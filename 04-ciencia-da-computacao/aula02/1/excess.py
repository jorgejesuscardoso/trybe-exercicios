#print(10 * (1 / 0))

#print(4 + spam * 3)

#print('2' + 2)

""" while True:
    try:
        x = int(input('Por favor digite um número inteiro: '))
        break
    except ValueError:
        print('Ops! Número inválido. Por favor insira um número inteiro. Tente novamente...') """
try:
    with open('arquivo.txt') as file:
        print(file.read())
except FileNotFoundError:
    print('Arquivo não encontrado. Por favor verifique o nome do arquivo e tente novamente...')
else:
    print('Arquivo encontrado com sucesso!')
finally:
    print('Fim da execução do bloco try/except.')
        