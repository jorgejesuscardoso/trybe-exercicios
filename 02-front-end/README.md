# [Introdução ao Front-end e JavaScript Assícrono](https://github.com/jorgejesuscardoso/trybe-exercicios/tree/main/02-front-end/1%C2%BA%20periodo)

## [Ambiente de Desenvolvimento](https://github.com/jorgejesuscardoso/trybe-exercicios/tree/main/02-front-end/1%C2%BA%20periodo/1-introducao-ao-frontend-e-javascript-assicrono/dia-01-ambiente-de-desenvolvimento)

#### **Desenvolvimento**

##### **Vite**
  
 - O Vite é um ecossistema de desenvolvimento web rápido e moderno baseado em JavaScript. Ele se destaca por sua eficiência no processo de construção e desenvolvimento de aplicativos web, utilizando a arquitetura de servidor de desenvolvimento extremamente veloz. Com o Vite, é possível criar aplicações web de forma ágil e eficiente, melhorando significativamente o tempo de compilação e recarga durante o desenvolvimento.

#### **Library - Biblioteca**

##### **Nanoid**

 - O NanoID é uma biblioteca JavaScript que gera ID aleatórios em formato de strings. O NanoID é amplamente utilizado por sua capacidade de produzir IDs exclusivos e ter uma pequeno código.
##### **Clipboard-copy**
 - O clipboard-copy é uma biblioteca JavaScript que fornece uma maneira simples e eficiente de copiar texto para a área de transferência (clipboard) do sistema. Ele permite que os desenvolvedores adicionem facilmente a funcionalidade de cópia de texto em suas aplicações web com apenas algumas linhas de código. O clipboard-copy é amplamente utilizado para melhorar a usabilidade das aplicações, permitindo que os usuários copiem informações importantes de forma rápida e fácil.

## [JavaScript Assícrono](https://github.com/jorgejesuscardoso/trybe-exercicios/tree/main/02-front-end/1%C2%BA%20periodo/1-introducao-ao-frontend-e-javascript-assicrono/dia-02-javascript-assicrono)

#### **Codigo Assíncrono**

 - Códigos assíncrono funciona fora do fluxo principal sem travar a aplicação. Depois que terminar de executar o retorno dele volta para o fluxo principal. 

##### **Função setTimeOut()**

A função `setTimeOut()` recebe 2 paramentros:
 - Primeira recebe uma função(callback) que será executada e ela sera executada de acordo o tempo que será passada como segundo paramentro.
 - Segundo é um tempo que deve ser definido em milisegundos: 1000 milisegundos = 1 seg.

> A função callback será executada de maneira assíncrono, quando a execuçao passar por ela, ela nao será executada de imediato, mas sim, depois do tempo que foi passado como segundo paramentro acabar.

 
 ### **Promises**

 - As promises são usadas para lidar com códigos assíncronos, aqueles códigos que serão executados fora do fluxo sequencial da aplicação. Esses códigos costumam demorar para finalizarem seu sua execução, entre milisegundos e até memso minutos.
 - As promises possuem trẽs estados:
    - _pending_ (pendente), estado inicial dela, aguardando o fim da execução.
    - _fulfilled_ (realizada), execução finalizada e promise _resolvida_.
    - _rejected_ (rejeitada), quando a operação deu erro.

##### **Função _`new Promise((resolve, reject) => {})`_;**
 - Os paramentros _resolve_ e _reject_ serão usadis para definir o estado da promise ao finalizar
    - _resolve_ para resolvida (_then_).
    - _reject_ para rejeitada (_catch_).

##### **Recebendo retorno _then_ e _catch_: **

 - O _then_ recebe um função e essa função recebe o paramentro que é a resposta do codigo asíncrono


### **Método fetch()**

 - Método importante para as aplicações de front-end se comunique com outras aplicações com outras API's.
 - O `fetch()` recebe dois paramentros sendo a primeira obrigatória e é o endereço URL da API e o segundo paramentro é um objeto de configurações e opcional a menos que tenha alguma configuração adicional, se tiver, procurar a documentação da API. `fetch(URL, {})`
