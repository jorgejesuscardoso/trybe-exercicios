## Relatório do dia.

Nesse dia, aprendi o que é e pra quê serve o Unix, Kernel e Shell. Também aprendi a manipular arquivos
e a tratar-los através do terminal utilizado inputs e outputs.

### Comandos que foram aprendidos nesse dia:

1. **cd**: Digitando no terminal _cd "nome do diretório"_, você acessa o diretório cujo nome foi colocado entre aspas. 
Obs: É necessário que o diretório esteja no mesmo diretório para poder ter acesso, caso contrário é necessário escrever o caminho inteiro até o diretório que deseja abrir, exemplo, _cd test-cd/test-cd2/diretório-destino_, no caso do exemplo o diretório que vai ser acessado é ser aberto é o diretório chamado, 'diretório-destino', _cd .._ você volta para o diretório anterior, apenas _cd_ você volta para o diretório raiz.

2. **ls**: Digitando no terminal, ele irá lista todos os diretórios e arquivos dentro do diretório onde você está, digitando _ls -a_ era exibir também diretórios ocultos, digitando _ls *_ irá listar todos os diretórios e seus conteúdos.

3. **cat**. Utilizando apenas _cat nome-de-arquivo.txt_ irá exibir o conteúdo do arquivo de texto, se digitar _cat > nome-de-arquivo.txt_ vai permitir inserir texto dentro do arquivo _nome-de-arquivo.txt_ mas vai apagar tudo que já estava lá antes. Caso não exista esse arquivo, o arquivo _nome-de-arquivo.txt_ será criado. Se utilizar _cat >> nome-de-arquivo.txt_ será permitido inserir texto a partir da linha final do arquivo sem apagar nada que já estava lá.

4. **rm**: Utilizado para apagar arquivo. _rm arquivo.txt_ arquivo.txt será apagado.

5. **rmdir**: Apaga diretório. _rmdir apagar_ será apagado o diretório _apagar_ caso ela esteja vazia, se não será necessário utilizar _rm -rf apagar_ ai sim o diretório _apagar_ será deletado com todo o seu conteúdo.  

6. **mv**. Usado para mover ou renomear arquivos e diretórios. _mv arquivo.txt arquivo1.txt_ o _arquivo.txt_ será renomeado para _arquivo1.txt_. Se usar _mv arquivo.txt test-mv/test-mv-unix_ o arquivo _arquivo.txt_ será movido para o diretório _test-mv-unix_.

7. **cp**. Faz uma copia do arquivo. _cp test.txt testei.txt_ o arquivo _test.txt_ será copiado e o arquivo _testei.txt_ será criado com o mesmo conteúdo do _test.txt_

8. **touch**. Cria um aquivo, exemplo, _touch index.html_ cria o arquivo _index.html_, pode criar vários arquivos simultaneamente se utilizado dessa maneira. _touch arquivo{1..10}.txt_. Assim será criado uma sequência de _arquivo.txt_ indo do _arquivo1.txt_ ao _arquivo10.txt_.

9. **pwd**. Mostra o caminho do diretório aonde você está.

10. **echo**. Imprimi uma mensagem no terminal, se utilizado colocando um arquivo de texto em seguida, a mensagem será adicionada no arquivo. _echo "Olá mundo!" > test.txt_ a mensagem _Olá mundo!_ será inserida dentro do arquivo _test.txt_.

11. **head**. Lista os 10 primeiros itens de um arquivo. Exemplo _head lista-de-filmes.txt_.

12. **tail**. Lista os 10 últimos itens de um arquivo. Exemplo _tail lista-de-filmes.txt_.

13. **wc**. Faz a contagem de linhas, palavras e caracteres dentro de um aquivo. Exemplo _wc lista-de-filmes.txt_

14. **less**. Se usado em um arquivo com muitas linhas ou página, exibe todo seu conteúdo em forma de páginas. Para mudar de página deve-se apertar barra de espaço e para sair aperta letra 'Q'.

15. **| (pipe)**. Permite o uso de vários comando ao mesmo tempo. Exemplo _head -5 lista-de-filmes.txt | sort_ irá imprimir no terminal as 5 primeiras linhas do arquivo _lista-de-filmes.txt_ em ordem alfabética.

16. **mkdir**. Cria um diretório vazio. Exemplo _mkdir testando_ o diretório _testando_ será criado.

17. **grep**. Imprime no terminal as linhas correspondente a pesquisa. Exemplo _grep Vingadores lista-de-filmes.txt_ ira imprimir no terminal todas as palavras que corresponde a Vingadores que está dentro do arquivo, neste caso, os nomes dos filmes dos vingadores que estão na lista será exibido. Utilizando _grep -i poderoso arquivo.txt_ ele irá buscar todas as linhas que contenha a palavra _poderoso_ ingnorando o _key sensitive_. Se usar com _-iv_ irá exibir todos os valores que não contenha a palavra _poderoso_. Se usar com _-in_ mostrará o número da linha em que está está e com _-ic_ mostra a quantidade de vezes que ela aparece.

18. **sort**. Põe em ordem alfabética. Exemplo _sort lista-de-filmes.txt_, todo o conteúdo do arquivo seŕa imprimido em ordem alfabética.

19. **find**. Procura por arquivos em um diretório.

20. **history**. Exibi o histórico de comando utilizado no terminal.


