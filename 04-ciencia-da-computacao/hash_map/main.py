from nums import count_ocorrence
from words import  screening

nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]
text = ['Ana', 'ama','Joao', 'que', 'ama', 'Jose', 'nao', 'mais', 'Jose', 'Ana']

for key, value in screening(text).items():
    print(f'{key}: {value}')

# print(count_ocorrence(nums))