## Parte 1

### **Codigo Assíncrono**

- Códigos assíncrono funciona fora do fluxo principal sem travar a aplicação. Depois que terminar de executar o retorno dele volta para o fluxo principal. 

#### **Função setTimeOut()**

A função `setTimeOut()` recebe 2 paramentros:
 - Primeira recebe uma função(callback) que será executada e ela sera executada de acordo o tempo que será passada como segundo paramentro.
 - Segundo é um tempo que deve ser definido em milisegundos: 1000 milisegundos = 1 seg.

> A função callback será executada de maneira assíncrono, quando a execuçao passar por ela, ela nao será executada de imediato, mas sim, depois do tempo que foi passado como segundo paramentro acabar.

 ## Parte 2

 ### **Promises**

 - As promises são usadas para lidar com códigos assíncronos, aqueles códigos que serão executados fora do fluxo sequencial da aplicação. Esses códigos costumam demorar para finalizarem seu sua execução, entre milisegundos e até memso minutos.
 - As promises possuem trẽs estados:
    - _pending_ (pendente), estado inicial dela, aguardando o fim da execução.
    - _fulfilled_ (realizada), execução finalizada e promise _resolvida_.
    - _rejected_ (rejeitada), quando a operação deu erro.

#### **Função _`new Promise((revols, reject) => {})`_;**
 - Os paramentros _resolve_ e _reject_ serão usadis para definir o estado da promise ao finalizar
    - _resolve_ para resolvida (_then_).
    - _reject_ para rejeitada (_catch_).

#### **Recebendo retorno _then_ e _catch_: **

 - O _then_ recebe um função e essa função recebe o paramentro que é a resposta do codigo asíncrono

## Parte 3

### **Método fetch()**

 - Método importante para as aplicações de front-end se comunique com outras aplicações com outras API's.
 - O `fetch()` recebe dois paramentros sendo a primeira obrigatória e é o endereço URL da API e o segundo paramentro é um objeto de configurações e opcional a menos que tenha alguma configuração adicional, se tiver, procurar a documentação da API. `fetch(URL, {})`