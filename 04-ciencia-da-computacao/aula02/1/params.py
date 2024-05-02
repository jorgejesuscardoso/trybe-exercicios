""" import sys

if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)

create_name = input('Insira o nome do personagem!')
create_race = input('Insira a raça do personagem!')
create_class = input('Insira a classe do personagem!')
create_level = input('Insira o level do personagem!')
create_hp = input('Insira o hp do personagem!')
create_mp = input('Insira o mp do personagem!')
create_exp = input('Insira a experiência do personagem!')

character = {
    "name": create_name,
    "classe": create_class,
    "Raça": create_race,
    "level": create_level,
    "hp": create_hp,
    "mp": create_mp,
    "experiência": create_exp
}

next_level = int(create_exp) * 2
print(character)
print(f'{character["name"]} precisa de {next_level} pontos de experiência para subir de level!')

for l in create_name:
    print(l)
 """

nums = input("Insira valores aqui, separados por espaço: ")

nums_arr = nums.split(" ")

sum = 0

for num in nums_arr:
    if not num.isdigit():
        print(f'Erro ao somar valores, {num} não é um digito!')
    else:
        sum += int(num)

print(f'A soma dos valores válidos é: {sum}')