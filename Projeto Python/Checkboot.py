import datetime
from escpos.printer import Network

 #pip install python-escpos  - Importar biblioteca para impressora térmica

IMPRESSORA_IP = "10.10.12.47"
IMPRESSORA_PORTA = 9100

checklist = [
    "Sistema Operacional atualizado",
    "Conexão com a rede funcional",
    "Antivírus instalado e atualizado",
    "Firewall ativo",
    "Pacote Office instalado",
    "Navegador padrão configurado",
    "Ferramentas da empresa instaladas (VPN, Teams, etc)",
    "Espaço em disco suficiente",
    "Memória RAM adequada",
    "Conta do usuário configurada",
    "Mapeamento de rede funcionando"
]

respostas = {}

print("===== CheckBoot TI =====")
equipamento = input("Digite o nome do equipamento/usuário: ")
print("\nResponda cada item: [S] Sim | [N] Não | [P] Pendente\n")

for item in checklist:
    while True:
        resp = input(f"{item}: ").strip().upper()
        if resp in ["S", "N", "P"]:
            respostas[item] = resp
            break
        else:
            print("⚠️ Resposta inválida! Digite apenas S, N ou P.")

agora = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M")
arquivo = f"report_{equipamento}_{agora}.txt"

with open(arquivo, "w", encoding="utf-8") as f:
    f.write(f"===== RELATÓRIO CHECKBOOT TI =====\n")
    f.write(f"Equipamento/Usuário: {equipamento}\n")
    f.write(f"Data: {agora}\n\n")
    for item, resp in respostas.items():
        status = "✅ OK" if resp == "S" else ("❌ Não Conforme" if resp == "N" else "⚠️ Pendente")
        f.write(f"- {item}: {status}\n")

print(f"\n📄 Relatório gerado: {arquivo}")

try:
    p = Network(IMPRESSORA_IP, IMPRESSORA_PORTA)
    p.set(align="center", bold=True, double_height=True)
    p.text("RELATÓRIO CHECKBOOT TI\n")
    p.text("--------------------------------\n")
    p.set(align="left", bold=False, double_height=False)
    p.text(f"Equipamento/Usuário: {equipamento}\n")
    p.text(f"Data: {agora}\n\n")
    for item, resp in respostas.items():
        status = "OK" if resp == "S" else ("NÃO CONFORME" if resp == "N" else "PENDENTE")
        p.text(f"- {item}: {status}\n")
    p.text("\n--------------------------------\n")
    p.text("Assinatura Técnico: __________\n")
    p.cut()  # Corta papel no final
    print("🖨️ Relatório enviado para impressora térmica!")
except Exception as e:
    print(f"❌ Erro ao imprimir: {e}")
