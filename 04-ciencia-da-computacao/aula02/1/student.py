
with open('student_with_note.txt') as file:
    approved = open('student_failed.txt', 'w')
    failed = open('student_approved.txt', 'w')

    for line in file:
        student, note = line.split()
        try:
            if (int(note) < 6):
                approved.write(f'{student} reprovado com: {note} pontos na média final!\n')
            elif (int(note) >= 6):
                failed.write(f'{student} aprovado com: {note} pontos na média final!\n')
        except ValueError:
            print(f'Erro: {student} não possui nota válida!')
        else:
            print('Processo finalizado!')
            
