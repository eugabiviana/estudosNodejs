# variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de códigos
* Identificadores
* 3 palavras reservadas para criar uma vairável em JS:
    * var - o valor pode ser alterado durante o programa
    * let - idem var
    * const - o valor não muda

O JS é uma linguagem fracamente tipada e dinâmica.
- Variáveis não precisam ter um tipo previamente definido;
- Podemos mudar o conteúdo da variável

# Scope

* Escopo determina a visibilidade de alguma variável no JS


# Block statement <!-- declaração de bloco -->
```JS
//vamos iniciar um bloco
{
    //aqui dentro é um bloco e posso colocar qualquer código
} //aqui fechamos o bloco
```
O bloco, também criará um novo escopo. Chamamos de `block-scoped`.

## let e const

* const e let são locais e só funcionam no escopo onde foi criada 


## Para criar nomes

* JS é case-sensitive
* JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais: $ _
    * Inciar com letras
    * Colocar acentos
    * Letras maiúsculas e minúsculas fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome

- Ideal:
    * Criar nomes que fazem sentido
    * Que explique o que a varuável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês (para que o código criado seja universal)