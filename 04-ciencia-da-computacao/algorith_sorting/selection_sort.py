def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1):
        min_element_index = index

        for search_index in range(index + 1, n):
            if numbers[search_index] < numbers[min_element_index]:
                min_element_index = search_index
    
        current_element = numbers[index]
        numbers[index] = numbers[min_element_index]
        numbers[min_element_index] = current_element
    
    return numbers

""" numbers = [5, 2, 9, 1, 5, 6]
print(f'Lista inicial: {numbers}')  # Output: [5, 2, 9, 1, 5, 6]
ordered_numbers = selection_sort(numbers)
print(f'Lista ordenada: {ordered_numbers}') """  # Output: [1, 2, 5, 5, 6, 9]

# Modo 2

def search(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    for i in range(start + 1, end):
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i
    return min_element_index

def selection_sort(numbers):
    n = len(numbers)

    for i in range(n - 1):
        min_element_index = search(numbers, i, n)
        numbers[i], numbers[min_element_index] = numbers[min_element_index], numbers[i]
    
    return numbers

numbers = [5, 2, 9, 1, 5, 6]
print(f'Lista inicial: {numbers}')  # Output: [5, 2, 9, 1, 5, 6]
ordered_numbers = selection_sort(numbers)
print(f'Lista ordenada: {ordered_numbers}')  # Output: [1, 2, 5, 5, 6, 9]