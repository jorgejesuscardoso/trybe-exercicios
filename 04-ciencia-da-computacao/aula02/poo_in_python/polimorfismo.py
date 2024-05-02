from class_to_heranca import Eletrodomesitco

class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesitcos = []
    
    def __str__(self):
        return f'**************************************\nNome: {self.nome}\nIdade: {self.idade}\nSaldo na conta: {self.saldo_na_conta or 0}'

    def comprar_eletrodomestico(self, eletrodomesitco):
        if eletrodomesitco.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomesitco.preco
            self.eletrodomesitcos.append(eletrodomesitco)

pessoal_1 = Pessoa('João', 1000)
pessoal_2 = Pessoa('Maria')
pessoal_3 = Pessoa('José', 33)
pessoal_4 = Pessoa('Ana', saldo_na_conta=4000)

# **************************************

class Radio(Eletrodomesitco):
    def esta_ligado(self):
        return "Sim" if super().esta_ligado() else "Não"

class Vemtilador(Eletrodomesitco):
    def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
        super().__init__(cor, potencia, tensao,preco)
        self.quantidade_de_portas = quantidade_de_portas

