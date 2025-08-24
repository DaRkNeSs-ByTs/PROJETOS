# Aula - Operadores Lógicos
# and, or, not
# and = e
# or = ou
# not = não
# Exemplo:

idade = 17
condicionamento_fisico = False
autorizacao_medica = True

if idade >= 18 and (condicionamento_fisico or autorizacao_medica):
    print("Pode fazer o teste de aptidão física")

else:
    print("você não pode fazer o teste")
