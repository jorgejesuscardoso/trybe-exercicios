from class_to_heranca import Eletrodomestico

class Exemplo:
    def __init__(self):
        print('Inicializando Exemplo')
    def __new__(cls, *args, **kwargs):
        print('Criando uma nova instância de Exemplo')
        instance = super().__new__(cls)
        return instance
    
class Liquidificador(Eletrodomestico):
    # Getter
    @property
    def cor(self):
        return self.__cor.upper()
    
    @cor.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == 'turquesa':
            raise ValueError('Não existe liquidificador turquesa')
        
        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0
    
    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f'Velocidade deve estar entre 0 e { self.__velocidade_maxima }'
            )
        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True
    
    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        if self.__ligado == True:
            return 'Sim'
        else:
            return 'Não'

liquidificador = Liquidificador('Rosa', '110', '127', '200')
liquidificador.cor = 'Vermelhor'

class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
    
    def __str__(self):
        return f"""
        - Conzinheiro: {self.nome}
        - Saldo na conta: R${self.saldo_na_conta},00 reais
        """
    
    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

pessoa_conzinheira = Pessoa('Jacquin', 1000)
print(pessoa_conzinheira)