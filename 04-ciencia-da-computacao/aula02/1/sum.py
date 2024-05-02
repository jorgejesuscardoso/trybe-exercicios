my_number = 0
while my_number < 42:
    my_number += int(input("Digite seu número!"))

select_number = f'O seu número é: {my_number}'

print(f"O seu número excedeu 42! {select_number}")