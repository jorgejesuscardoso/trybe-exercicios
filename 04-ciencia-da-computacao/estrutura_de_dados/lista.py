arr = [1,2,3,4,5,6,7,8,9,0]

class Matrix(arr):

    def get(self, row, column):
        return self.data[row][column]
    
    def set(self, row, column, value):
        """Caso a linha não exista, cria-se uma nova linha"""
        try:
            self.data[row].insert(column, value)
        except IndexError:
            self.data.insert(row, [value])
    
    def remove(self, row, column):
        # Remove o item, retornando-o
        return self.data[row].pop(column)
    
print('------------- Arrays multidimensionais')

m = Matrix()
m.set(0, 0, 'Jorge')
m.set(0, 1, 6)
m.set(1, 0, 9)

m.set(2, 0, 'Patricia')
m.set(2, 1, 8)
m.set(2, 2, 7)

print(m)

m.remove(2,0)

print(m)