from tabulate import tabulate

titles = ['Animes', 'Episódios', 'Gênero', 'Nota']
animes = [
    ['Naruto', 220, 'Ação', 8.5],
    ['One Piece', 900, 'Ação', 9.0],
    ['Dragon Ball', 153, 'Ação', 8.0],
    ['Death Note', 37, 'Suspense', 9.5],
    ['Bleach', 366, 'Ação', 8.5],
    ['Attack on Titan', 59, 'Ação', 9.0],
    ['One Punch Man', 24, 'Ação', 8.5],
    ['Tokyo Ghoul', 24, 'Terror', 8.0],
    ['Sword Art Online', 25, 'Ação', 7.5],
    ['My Hero Academia', 88, 'Ação', 9.0]
]

print(tabulate(animes, headers=titles, tablefmt='fancy_grid', numalign='center', stralign='center'))