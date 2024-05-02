# Metodos e atributos de classe

## Métodos estáticos

""" class Classe:
    @staticmethod
    def metodo_estatico():
        print("Método estático")

objeto = Classe()
Classe.metodo_estatico()
objeto.metodo_estatico() """

##Atributo de classe

""" class Classe2:
    atributo_da_classe = 1

objecto_1 = Classe2()
objecto_2 = Classe2()

print(Classe2.atributo_da_classe)
print(objecto_1.atributo_da_classe)
print(objecto_2.atributo_da_classe)

Classe2.atributo_da_classe = 2
print(Classe2.atributo_da_classe)
print(objecto_1.atributo_da_classe)
print(objecto_2.atributo_da_classe)

objecto_1.atributo_da_classe = 3
print(Classe2.atributo_da_classe)
print(objecto_1.atributo_da_classe)
print(objecto_2.atributo_da_classe) """

##Método de classe
""" 
class Classe3:
    _atributo_da_classe = 1

    @classmethod
    def seta_atributo_da_classe(cls, valor):
        cls._atributo_da_classe = valor
    
    @classmethod
    def retorna_atributo_da_classe(cls):
        return cls._atributo_da_classe
    
objeto_1 = Classe3()

objeto_2 = Classe3()


print(Classe3.retorna_atributo_da_classe())  # Saída: 1

print(objeto_1.retorna_atributo_da_classe())  # Saída: 1

print(objeto_2.retorna_atributo_da_classe())  # Saída: 1


Classe3.seta_atributo_da_classe(2)

print(Classe3.retorna_atributo_da_classe())  # Saída: 2

print(objeto_1.retorna_atributo_da_classe())  # Saída: 2

print(objeto_2.retorna_atributo_da_classe())  # Saída: 2


objeto_1.seta_atributo_da_classe(3)

print(Classe3.retorna_atributo_da_classe())  # Saída: 3

print(objeto_1.retorna_atributo_da_classe())  # Saída: 3

print(objeto_2.retorna_atributo_da_classe())  # Saída: 3 """


## Chamando métodos de classe e estáticos

class Classe4:
    atributo_da_classe = 1

    def __init__(self):
        self.atributo_do_objeto = 2

    def método_normal(self):
        print(self)

    @classmethod
    def método_de_classe(cls):
        print(cls)

    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe4()

# Acessando atributo do objeto
print(objeto.atributo_do_objeto)
# Não dá pra chamar usando a classe (Classe4.atributo_do_objeto dá erro)
# Saída:
# 2

# Acessando atributo da classe
print(Classe4.atributo_da_classe)
print(objeto.atributo_da_classe) 
# Saída:
# 1
# 1

# Chamando o método normal
Classe4.método_normal(objeto)  # Ou Classe4.método_normal(self=objeto)
objeto.método_normal() # Açúcar sintático para a forma da linha acima
# Saída:
# <__main__.Classe4 object at 0x7f2304ab3d30>
# <__main__.Classe4 object at 0x7f2304ab3d30>

# Chamando o método estático
Classe4.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá

# Chamando o método de classe
Classe4.método_de_classe()  # Observe que não precisa passar nenhum parâmetro
objeto.método_de_classe() 
# Saída:
# <class '__main__.Classe4'>
# <class '__main__.Classe4'>