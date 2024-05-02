
def name_pyramid(name):
    
    for l in range(len(name)):
        for i in range(len(name)-l):
            print(name[i], end='')
        print()
if __name__ == '__main__':
    name = input('Digite seu nome: ')
    name_pyramid(name)
