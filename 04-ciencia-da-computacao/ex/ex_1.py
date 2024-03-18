max_n1 = 1
max_n2 = 10
max_n3 = 5

def max_num(n1, n2):
    if n1 > n2:
        return n1
    else:
        return n2


print(max_num(max_n1, max_n2))


def average(n1, n2, n3):
    total = n1 + n2 + n3
    return total / 3


print(average(max_n1, max_n2, max_n3))


def star_box(n):
    for i in range(n):
        print("*" * n)


star_box(max_n2)


def star_triangle(n):
    for i in range(n):
        print("*" * (i + 1))


star_triangle(max_n2)


def star_triangle_reverse(n):
    for i in range(n):
        print("*" * (n - i))


star_triangle_reverse(max_n2)


def box_square(n):
    for i in range(n):
        print('🔳' * n)

box_square(max_n2)


def box_rectangle(n1, n2):
    for i in range(n1):
        print('🔲' * n2)

box_rectangle(max_n3, max_n2 + 3)


def box_triangle(n):
    for i in range(n):
        print('🔲' * (i + 1))

box_triangle(max_n2)


def bridge(n):
    for i in range(n):
        print(' ', '🔲' * 2, '',' ', '🔲')

bridge(15)


def box_triangle_reverse(n):
    for i in range(n):
        print('🔲' * (n - i))

box_triangle_reverse(max_n2)


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def longest_name(names):
    longest = names[0]
    for name in names:
        if len(name) > len(longest):
            longest = name
    return longest

print(longest_name(names))

metros_por_litro = 3
litros_por_lata = 18

def paint_calculation(metros):
    litros_necessarios = metros / metros_por_litro
    latas_necessarias = litros_necessarios / litros_por_lata
    latas_necessarias = int(latas_necessarias) + 1 if latas_necessarias % 1 != 0 else int(latas_necessarias)
    preco_total = latas_necessarias * 80
    return (latas_necessarias, preco_total)

print(paint_calculation(100))


def descounted_price(liters, fuel_type):
    alcohol_price = 1.9
    gasoline_price = 2.5
    alcohol_util_20_liters = '3%'
    alcohol_upper_20_liters = "5%"
    gasoline_util_20_liters = '4%'
    gasoline_upper_20_liters = '6%'
    if fuel_type == 'A':
        if liters <= 20:
            return liters * alcohol_price * (1 - 0.03)
        else:
            return liters * alcohol_price * (1 - 0.05)
    if fuel_type == 'G':
        if liters <= 20:
            return liters * gasoline_price * (1 - 0.04)
        else:
            return liters * gasoline_price * (1 - 0.06)

print(descounted_price(20, 'G'))