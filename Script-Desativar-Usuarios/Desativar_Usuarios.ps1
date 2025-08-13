# Script created by: Luiz Pasqualetto
# 
# Carrega o módulo Active Directory para o Windows PowerShell
Import-Module ActiveDirectory
$ErrorActionPreference = "Stop"
Write-Host "Modulo do Active Directory carregado."

# Global trap para capturar erros inesperados
trap {
    Write-Host "Erro inesperado: $_"
    Read-Host "Pressione Enter para sair..."
    break
}

# Elevação do prompt para Admin
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator"))
{
    Start-Process powershell "-NoProfile -ExecutionPolicy Bypass -File `"$($MyInvocation.MyCommand.Path)`"" -Verb RunAs
    exit
}

# Logging para debugging do script
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Start-Transcript -Path "$scriptDir\Logs\debug_log.txt"

Write-Host "Diretorio do script: $scriptDir"

# Combina o diretório do script com o nome do arquivo
$filePath = Join-Path $scriptDir "users.txt"
Write-Host "Caminho do arquivo: $filePath"

# Verifica se o arquivo existe
if (Test-Path $filePath) {
    Write-Host "Arquivo Encontrado. Continuando..."

    # Lê os IDs de usuário do arquivo
    $userIDs = Get-Content $filePath
    Write-Host "ID de Usuario carregado"

    # Obtém a data atual para incluir no nome do arquivo de saída
    $currentDate = Get-Date -Format "yyyy_MM_dd"
    Write-Host "Data atual: $currentDate"

    # Cria um caminho de pasta para o arquivo de saída (dentro da pasta "Logs")
    $logsFolder = Join-Path $scriptDir "Logs"
    $outputFilePath = Join-Path $logsFolder "UsuariosDesativados_$currentDate.txt"
    Write-Host "Arquivo de output: $outputFilePath"

    # Garante que a pasta "Logs" exista; cria se não existir
    if (-not (Test-Path $logsFolder)) {
        New-Item -ItemType Directory -Path $logsFolder
        Write-Host "Pasta de Logs Criada."
    } else {
        Write-Host "Pasta de Logs Existe."
    }

    # Inicializa um array para armazenar os usuários desativados
    $deactivatedUsers = @()

    # Inicializa a barra de progresso
    $progressParams = @{
        Activity = "Processando Usuarios"
        Status = "Inicializando"
        PercentComplete = 0
    }
    Write-Progress @progressParams

    foreach ($userID in $userIDs) {
        Write-Host "Processando UserID: $userID"

        # Atualiza a barra de progresso
        $progressParams.PercentComplete = [math]::Min([math]::Max(0, $progressParams.PercentComplete + 100 / $userIDs.Count), 100)
        $progressParams.Status = "Processando $userID"
        Write-Progress @progressParams

        try {
            # Percorre os IDs de usuário e encontra os usuários
            $users = Get-ADUser -LDAPFilter "(telephoneNumber=$userID)" -Properties SamAccountName, MemberOf

            if ($users) {
                Write-Host "Usuarios encontrados para o ID: $userID"
                foreach ($user in $users) {
                    Write-Host "Processando Usuario: $($user.SamAccountName)"
                    $deactivatedUsers += "Usuario desativado: $($user.SamAccountName)"

                    # Move o usuário para a OU "DESATIVADOS"
                    Move-ADObject -Identity $user.DistinguishedName -TargetPath "OU=DESATIVADOS,DC=confianca,DC=corp" -ErrorAction Stop
                    Write-Host "Usuario $($user.SamAccountName) movido para DESATIVADOS."

                    # Desativa o usuário
                    Disable-ADAccount -Identity $user.SamAccountName -ErrorAction Stop
                    Write-Host "Usuario $($user.SamAccountName) deshabilitado."

                    # Remove o usuário de todos os grupos
                    $userGroups = Get-ADUser $user.SamAccountName -Properties MemberOf | Select-Object -ExpandProperty MemberOf
                    if ($userGroups) {
                        foreach ($groupDN in $userGroups) {
                            $group = Get-ADGroup -Identity $groupDN
                            Remove-ADGroupMember -Identity $group -Members $user.SamAccountName -Confirm:$false -ErrorAction Stop
                            Write-Host "Removido $($user.SamAccountName) do grupo $($group.Name)"
                        }
                    } else {
                        Write-Host "Usuario $($user.SamAccountName) nao pertence a nenhum grupo."
                    }
                }
            } else {
                Write-Host "Nenhum usuario encontrado para UserID: $userID"
            }
        } catch {
            Write-Host "Erro ao processar usuario $userID : $_"
        }
    }

    # Fecha a barra de progresso
    Write-Progress -Activity "Processando Usuarios" -Status "Completo" -Completed

    if ($deactivatedUsers.Count -gt 0) {
        # Salva os resultados no arquivo de saída
        $deactivatedUsers | Out-File -FilePath $outputFilePath
        Write-Host "Resultados escritos para o arquivo $outputFilePath"
    } else {
        Write-Host "Nenhum usuario com IDs encontrados. Arquivo de log nao criado."
    }

    # Aguarda a entrada do usuário
    Read-Host "Pressione Enter para sair..."
} else {
    Write-Host "Arquivo nao encontrado: $filePath"
    Read-Host "Pressione Enter para sair..."
}

# Pare o logging detalhado
Stop-Transcript