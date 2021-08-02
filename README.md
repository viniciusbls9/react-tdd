[![Build Status](https://travis-ci.com/viniciusbls9/react-tdd.svg?branch=master)](https://travis-ci.com/viniciusbls9/react-tdd)
[![Coverage Status](https://coveralls.io/repos/github/viniciusbls9/react-tdd/badge.svg?branch=master)](https://coveralls.io/github/viniciusbls9/react-tdd?branch=master)
# :rocket: ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID

Curso do professor Rodrigo Manguinho com foco em ReactJS com Typescript e Hooks, utilizando TDD, Clean Architecture, Design Patterns e SOLID.

![TDD, SOLID](https://raw.githubusercontent.com/rmanguinho/clean-react/master/public/course-logo.png)

### seção 1: Introdução

Ideia do primeiro modulo do curso é passar as configurações do git que o professor indica, e também as configurações iniciais do projeto que será aplicado no curso.

### seção 2: Login - Domain e Data Layer

Nesse segundo modulo já iniciamos com os primeiros testes para o caso de uso de login do usuário. Criamos testes para cada mensagem de erro ou sucesso que a API pode nos retornar, deixando cada arquivo de erro com a sua responsabilidade.

### seção 3:  Infra Layer - Implementando o HttpPostClient

Na seção 3 implementamos o axios de uma forma com que o sistema não fique dependente de uma única ferramenta para requisições, então deixamos o código genérico para caso necessário, poder trocar a ferramenta sem prejudicar o resto do sistema.

### seção 4: Login - Presentation Layer

Essa seção tivemos a oportunidade de configurar o React na mão, sem o uso do CRA (Create React App), assim ganhamos vantagens de utilizar o react de uma forma mais "livre". Configuramos também toda a parte do webpack, iniciamos no layout da tela de login e fizemos as devidas coberturas de testes.

### seção 5: Validation Layer

Durante essa seção criamos alguns validations para os nossos campos de login, e conhecemos alguns Design Pattern como o Composite e o Builder.

### seção 6: Login - Main Layer

Na seção 6 fizemos a composição do Login, ajustamos alguns Client do nosso serviço do Axios, fizemos alguns novos testes para bater coverage 100% e também criamos variável de ambiente para subir para produção.

### seção 7: Continuous Integration

A seção 7 foi curta porém muito valiosa, integramos o projeto com o TravisCI e Coveralls para antes de subir o push para o github, as ferramentas verificarem nosso código, e se estiver tudo correto, ai sim liberar o push.

### seção 8: Movendo LocalStorage para Infra

Na seção 8 movemos o LocalStorage para a Infra do projeto, tirando o localStorage "marretado" nos arquivos de layout do projeto. A ideia é deixar o mais genérico possível, e se caso amanha aparecer uma solução melhor do que o localStorage, a gente conseguir alterar o recurso em um único lugar.

### seção 9: SignUp

A seção 9 criamos o layout, testes e refactores para o SignUp. Por estar aplicando o Clean Code, conseguimos reutilizar muitos códigos da seção 6 nessa feature do SignUp.

## seção 10: Testes de Integração com Cypress

Nessa seção vimos como implementar testes de integração com o Cypress, uma ferramenta que simula um "usuário" real utilizando a aplicação. Então incluimos testes de duplo clique no botão submit, envio de dados não permitidos etc.