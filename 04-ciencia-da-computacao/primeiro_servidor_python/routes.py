from flask import Blueprint, jsonify, request, make_response
import json

bp = Blueprint('routes', __name__)
CARS = 'carros.json'

@bp.route('/create', methods=['POST'])
def create_car():
    '''Cria um novo carro'''
    # Recebe o novo carro
    NEW_CAR = request.json

    if not NEW_CAR["brand"]:
        return make_response(jsonify({ 'message': 'Todos os campos são obrigatórios! Ausente, campo "brand"!'}), 400)
    elif not NEW_CAR["model"]:
        return make_response(jsonify({ 'message': 'Todos os campos são obrigatórios! Ausente, campo "model"!'}), 400)
    elif not NEW_CAR["year"]:
        return make_response(jsonify({ 'message': 'Todos os campos são obrigatórios! Ausente, campo "year"!'}), 400)
    elif not NEW_CAR["color"]:
        return make_response(jsonify({ 'message': 'Todos os campos são obrigatórios! Ausente, campo "color"!'}), 400)
    elif not NEW_CAR["price"]:
        return make_response(jsonify({ 'message': 'Todos os campos são obrigatórios! Ausente, campo "price"!'}), 400)
    
    # Abre o arquivo de carros
    with open(CARS) as f:
        carros = json.load(f)
    
    # Adiciona o novo carro
    carros.append(NEW_CAR)

    # Salva o arquivo
    with open(CARS, 'w') as f:
        json.dump(carros, f, indent=2)
    # Retorna o novo carro
    respose = make_response(jsonify(NEW_CAR), 201)
    return respose


@bp.route('/')
def home():
    with open(CARS) as f:
        return jsonify(json.load(f))

@bp.route('/update/<int:id>', methods=['PUT'])
def update_car(id):
    '''Atualiza um carro'''
    # Recebe o carro atualizado
    UPDATED_CAR = request.json

    # Abre o arquivo de carros
    with open(CARS) as f:
        carros = json.load(f)

    # Procura o carro a ser atualizado
    for i, car in enumerate(carros):
        if i == id - 1:
            carros[i] = UPDATED_CAR
            break
    
    # Salva o arquivo
    with open(CARS, 'w') as f:
        json.dump(carros, f, indent=2)

    # Retorna o carro atualizado
    respose = make_response(jsonify(UPDATED_CAR), 200)
    return respose

@bp.route('/delete/<int:id>', methods=['DELETE'])
def delete_car(id):
    '''Deleta um carro'''
    # Abre o arquivo de carros
    with open(CARS) as f:
        carros = json.load(f)

    # Procura o carro a ser deletado
    for i, car in enumerate(carros):
        if i == id - 1:
            carros.pop(i)
            break
    
    # Salva o arquivo
    with open(CARS, 'w') as f:
        json.dump(carros, f, indent=2)

    # Retorna o carro deletado
    respose = make_response(jsonify({ 'message': 'Carro deletado com sucesso!'}), 200)
    return respose
