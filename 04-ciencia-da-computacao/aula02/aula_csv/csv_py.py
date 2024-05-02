import csv

with open("graduacao_unb.csv", encoding = "utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')

    
    header, *data = graduacao_reader

grup_by_department = {}

for row in data:
    department = row[15]
    if department not in grup_by_department:
        grup_by_department[department] = 0
    grup_by_department[department] += 1

with open('department_report.csv', 'w', encoding = 'utf-8') as file:
    writer = csv.writer(file)
    
    # Escreve o cabeçalho
    headers = [
        'Departamento',
        'Total de cursos'
    ]
    writer.writerow(headers)

    # Escreve as linhas de dados
    # Desempacotamento de valores
    for department, grades in grup_by_department.items():
        # Agrupa o dado com o turno
        row = [
            department,
            grades
        ]
        writer.writerow(row)

with open('graduacao_unb.csv', encoding = 'utf-8') as file:
    gd_reader = csv.DictReader(file, delimiter=",", quotechar='"')
    
    # A linha de cabeçalho é utilizada como chave de dicionário
    # agrupa cursos por departamento
    group_by_department = {}
    for row in gd_reader:
        department = row['unidade_responsavel']
        if department not in group_by_department:
            group_by_department[department] = 0
        group_by_department[department] += 1
    
print(group_by_department)