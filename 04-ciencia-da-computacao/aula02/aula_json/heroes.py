import json

with open('hero.json', 'r') as heroes_file:
    heros = json.load(heroes_file)
for hero in heros:
    print(hero['superhero'])