import time
'''

sum():

Responsável por calcular o fatorial com base no paramento 'n'.

Primeiramente ela checa se 'n' é igual a 0, se for, imprime a 'string' informando o fatorial de 'n'

Se 'n' não for 0, ela multiplica esse valor pelo valor guardado na constante 'val' e chama ela mesma no final.

Esse ciclo se repete até q 'n' seja igual a 0, então imprimi o resultado e encerra a função.'''



param = input('Digite um valor: ')

def valid_input(param):
    try:
        int(param)
        return True
    except ValueError:
        return False
valid_input(param)

while not param.isnumeric():
    param = input('Digite um valor válido: ')
while int(param) >= 8 or int(param) <= 0:
    param = input('Digite um valor válido menor que 8 e maior que 0: ')
    while not valid_input(param):
      param = input('Digite um valor válido não fracionado: ')

def sum(n: int) -> int:
   
    if n == 1:
        return n
    
    return n * sum(n - 1)

while sum(int(param)) != 0:
    print('******************************')
    print(f'O fatorial de: {param} é: {sum(int(param))}')
    print('******************************')
    reset = input('Deseja calcular outro valor? [S/N]: ').upper()
   
    if reset == 'S':
        param = input('Digite um valor: ')
        while not param.isnumeric():
           param = input('Digite um valor válido: ')
        while int(param) >= 8 or int(param) <= 0:
            param = input('Digite um valor válido menor que 8 e maior que 0: ')
            while not valid_input(param):
                param = input('Digite um valor válido não fracionado: ')
    else:
        break
def count(n):
    if n == 0:
        print('FIM')
        return
    countdown = n
    print(f'Encerrando... {countdown}')
    time.sleep(1)
    count(n - 1)

if __name__ == '__main__':    
    count(3)
