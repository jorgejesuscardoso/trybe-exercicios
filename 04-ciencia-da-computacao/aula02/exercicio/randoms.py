import random
from tabulate import tabulate

NOME = ''

ranking = [
    {'nome': 'João', 'pontos': 10},
    {'nome': 'Maria', 'pontos': 20},
    {'nome': 'José', 'pontos': 30},
]


with open('list_fruit.txt', 'r') as file:
    ALL_FRUITS = []
    frutas = file.readlines()
    for fruta in frutas:
        ALL_FRUITS.append(fruta.strip())

def qual_nome():
    global NOME
    names = input('Qual é o seu nome? ') or 'Anônimo' 
    NOME = names

qual_nome()

def jogo():
    escolhida = random.choice(ALL_FRUITS)
    embaralhada = ''.join(random.sample(escolhida, k=len(escolhida)))

    pontos = 0
    partial_points = pontuacao_total + 10
    tentativas = 3

    
    print(f'Bem vindo ao jogo de adivinhação de palavras! {NOME}')
    
    input('Você terá 3 tentativas para adivinhar a palavra embaralhada.')
    input('Valendo 10 pontos!')
    input('Dica única: Fruta. Vamos lá!')

    for _ in range(tentativas):
        print('*-----------------------------------------------------*')
        print(f'Qual é a palavra embaralhada: {embaralhada}?')
        guess = input('Digite sua resposta: ')

        if guess.lower() == escolhida.lower():
            pontos += 10
            print('*******************************************')
            print('Parabéns, você acertou! Você ganhou 10 pontos!')
            print(f'Você possui', {partial_points}, 'pontos até agora.')
            print('*******************************************')
            return {'nome': NOME, 'pontos': pontos}
        else:
            tentativas -= 1
            if tentativas > 0:
                print(f'Você errou! Restam {tentativas} tentativas.')
            else:
                print('Infelizmente você não ganhou! A resposta correta era:', escolhida)
    return 0

pontuacao_total = 0

while True:
    data = jogo()
    pontuacao_total += data['pontos'] if data else 0
    new_player = {
        'nome': data['nome'] if data else 'Anônimo',
        'pontos': pontuacao_total
    }
    for rk in ranking:
        if new_player['nome'] in rk['nome']:
            rk['pontos'] = pontuacao_total
            break
    else:
        ranking.append(new_player)
    
    restart = input('Deseja jogar novamente? (s/n): ')
    if restart.lower() != 's':       
        break

if pontuacao_total == 0:
    print('*-----------------------------------------------------*')
    print('Você não fez nenhum ponto! Boa sorte na próxima!')
    print('*-----------------------------------------------------*')

raking_position = sorted(ranking, key=lambda x: x['pontos'], reverse=True)

if raking_position.index(new_player) == 0:
    print('*************************************************')    
    print('Parabẽns! Você é o novo líder do ranking!')
    print('Sua pontuação é a maior até o momento!!')
    print(f'Você possue: {new_player["pontos"]} pontos!')  

    print(tabulate(raking_position, headers='keys', tablefmt='fancy_grid', numalign='center', stralign='center'))
    print('*************************************************')        

if raking_position.index(new_player) != 0 and pontuacao_total > 0:   

    print('*************************************************')
    print('Parabéns! Você fez', pontuacao_total, 'pontos!')

    max_score = max(ranking, key=lambda x: x['pontos'])    

    print(f'Suas posição no ranking é: {raking_position.index(new_player) + 1}º lugar')

    print(f'O jogador com a maior pontuação é {max_score["nome"]} com {max_score["pontos"]} pontos!')    

    print(tabulate(raking_position, headers='keys', tablefmt='fancy_grid', numalign='center', stralign='center'))

    print('*************************************************')
    print('Obrigado por jogar! Até a próxima!')
    print('*************************************************')
