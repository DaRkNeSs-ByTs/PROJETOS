# Aula - Operadores Lógicos
# and, or, not
# and = e
# or = ou
# not = não
# Exemplo:


def find_numbers(start, end):
    result = []
    for num in range(start, end + 1):  # percorre de start até end inclusive
        if num % 7 == 0 and num % 5 != 0:  # divisível por 7 mas não múltiplo de 5
            result.append(str(num))  # converte para string para facilitar o join
    print(",".join(result))  # exibe em uma linha separado por vírgula

# Testando com o exemplo
find_numbers(100, 200)
