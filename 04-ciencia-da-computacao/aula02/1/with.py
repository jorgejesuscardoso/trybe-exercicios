with open('arquivo.txt', 'w') as file:
    file.write('nome idade\n')
    file.write('joao 20\n')
    file.write('maria 25\n')
    file.write('pedro 30\n')
    file.write('ana 35\n')
    file.write('jose 40\n')
  
with open('arquivo.txt', 'r') as file:
    for l in file:
        print(l)