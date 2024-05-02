class TV:
    STATUS = {
        True: 'Sim',
        False: 'Não'
    }

    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False
  
    def __str__(self):
        return f'Volume: {self.__volume}\nCanal: {self.__canal}\nTamanho: {self.__tamanho}\nLigada: {self.STATUS[self.__ligada]}'

    def aumentar_volume(self):        
        if self.__volume < 0 or self.__volume > 100:
            raise ValueError('Volume deve ser entre 0 e 100')
        self.__volume += 1
    
    def diminuir_volume(self):
        if self.__volume < 0 or self.__volume > 100:
            raise ValueError('Volume deve ser entre 0 e 100')
        self.__volume -= 1
    
    def mudar_canal(self, canal):
        if canal < 1 or canal > 99:
            raise ValueError('Canal deve ser entre 1 e 100')
        self.__canal = canal
    
    def ligar_desligar(self):
        self.__ligada = not self.__ligada
        
            

tvSmart = TV(50)
tvSmart.aumentar_volume()
tvSmart.ligar_desligar()
tvSmart.mudar_canal(10)

class FIguraGeometrica:
    def __init__(self, area, perimetro):
        self.area = area
        self.perimetro = perimetro

class Quadrado(FIguraGeometrica):
    def __init__(self, lado):
        super().__init__(lado ** 2, lado * 4)
        self.lado = lado

class Retangulo(FIguraGeometrica):
    def __init__(self, base, altura):
        super().__init__(base * altura, 2 * (base + altura))
        self.base = base
        self.altura = altura

class Circulo(FIguraGeometrica):
    def __init__(self, raio):
        super().__init__(3.14 * raio ** 2, 2 * 3.14 * raio)
        self.raio = raio

quadrado = Quadrado(4)
retangulo = Retangulo(4, 5)
circulo = Circulo(3)

print(quadrado.area)
print(retangulo.perimetro)
print(circulo.area)