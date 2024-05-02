import time
from pygame import mixer

def alarm(n):
    if n < 0:
        print("Número negativo fornecido. Encerrando...")
    elif n == 0:
        # Inicializa o mixer Pygame
        mixer.init()
        # Carrega a música
        mixer.music.load('ex001.mp3')
        # Inicia a música
        mixer.music.play()
        # Necessário para manter o programa em execução para reproduzir a música
        input()        
        # Encerra o mixer Pygame
        print('FIM')
    else:
        print(n)
        time.sleep(1)
        alarm(n - 1)

alarm(2)
