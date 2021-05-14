# :rocket: ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID

Curso do professor Rodrigo Manguinho com foco em ReactJS com Typescript e Hooks, utilizando TDD, Clean Architecture, Design Patterns e SOLID.

### seção 1: Introdução

Ideia do primeiro modulo do curso é passar as configurações do git que o professor indica, e também as configurações iniciais do projeto que será aplicado no curso.

### seção 2: Login - Domain e Data Layer

Nesse segundo modulo já iniciamos com os primeiros testes para o caso de uso de login do usuário. Criamos testes para cada mensagem de erro ou sucesso que a API pode nos retornar, deixando cada arquivo de erro com a sua responsabilidade.

### seção 3:  Infra Layer - Implementando o HttpPostClient

Na seção 3 implementamos o axios de uma forma com que o sistema não fique dependente de uma única ferramenta para requisições, então deixamos o código genérico para caso necessário, poder trocar a ferramenta sem prejudicar o resto do sistema.