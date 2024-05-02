class A:
    def fazer_algo(self, valor):
        print(valor)

class B(A):
    def faz_outra_coisa(self):
        print('Vou printar o valor pelo método criado em A')
        super().fazer_algo(valor=1)

b = B()
b.faz_outra_coisa()