import json

with open("faturamento.json", "r") as file:
    faturamento_diario = json.load(file)

menor_faturamento = faturamento_diario[0]["valor"]
maior_faturamento = faturamento_diario[0]["valor"]
total_faturamento = 0
dias_acima_media = 0
dias_com_faturamento = 0

for dia in faturamento_diario:
    valor = dia["valor"]
    if valor < menor_faturamento:
        menor_faturamento = valor
    if valor > maior_faturamento:
        maior_faturamento = valor
    if valor > 0:
        total_faturamento += valor
        dias_com_faturamento += 1

media_mensal = total_faturamento / dias_com_faturamento

for dia in faturamento_diario:
    valor = dia["valor"]
    if valor > media_mensal:
        dias_acima_media += 1

print("Menor faturamento diário: R$ {:.2f}".format(menor_faturamento))
print("Maior faturamento diário: R$ {:.2f}".format(maior_faturamento))
print("Número de dias com faturamento acima da média mensal: {}".format(dias_acima_media))