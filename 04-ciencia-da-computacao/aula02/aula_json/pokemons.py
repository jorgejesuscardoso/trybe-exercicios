import json

with open('pokemons.json') as f:
    content = f.read()
    pokemons = json.loads(content)

type_grass = []

for pokemon in pokemons:
    if 'Grass' in pokemon['type']:
        type_grass.append(pokemon)
        
with open('grass_pokemons.json', 'w') as f:
    json.dump(type_grass, f, indent=4)
    