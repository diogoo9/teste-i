<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# criar migration
$ npm run migration:create -name=user
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Descrição da Entrevista Técnica - Desenvolvedor Backend (V2)

**Objetivo:**
O candidato deverá construir uma aplicação backend utilizando **TypeScript** e o framework **NestJS**, que será responsável por gerenciar companhias, usuários e veículos, com autenticação via JWT e integração com uma API externa para telemetria de veículos. Além disso, espera-se que o candidato demonstre habilidades em testes end-to-end (e2e), internacionalização, utilização de Docker, e documentação da API com Swagger.

**Especificações do Projeto:**

1. **Tecnologias e Ferramentas:**
   - [x] **Linguagem**: TypeScript
   - [x] **Framework**: NestJS
   - [x] **Banco de Dados**: PostgreSQL (com setup inicial, seeds e migrations)
   - [x] **Dockerização** da API
   - [ ] **Autenticação**:
     - [ ] JWT para autenticação de usuários
     - [ ] Autenticação via Token Basic para acesso da API de telemetria
   - [ ] **Internacionalização**:
     - [ ] Suporte a **en-us** (padrão) e **pt-br**

2. **Requisitos Funcionais:**
   - [ ] **CRUD Companhia**:
     - [ ] Campos: `id`, `name`, `address`, `phone`
     - [ ] Exclusão lógica
   - [ ] **CRUD Usuários**:
     - [ ] Campos: `id`, `company_id`, `name`, `login`, `password`
     - [ ] Exclusão lógica
   - [ ] **CRUD Veículos**:
     - [ ] Campos: `id`, `company_id`, `license`, `vin`, `lat`, `long`, `fuel_level`
     - [ ] Exclusão lógica
   - [ ] **Autenticação**:
     - [ ] JWT para gerenciar o acesso de usuários
     - [ ] Token Basic para API de telemetria
   - [ ] **Usuário Admin**:
     - [ ] Apenas o usuário Admin pode criar, atualizar ou excluir companhias, usuários e veículos.
     - [ ] Cada usuário pode visualizar apenas os usuários e veículos de sua própria companhia.
     - [ ] O usuário comum pode alterar suas próprias informações de cadastro.

3. **Integração com API de Telemetria:**
   - [ ] Quando uma companhia for criada, a API de telemetria deve ser chamada para também criar a companhia lá.
   - [ ] Quando uma companhia for excluída, a API de telemetria deve ser chamada para excluir ela também.
   - [ ] Criar um endpoint que será chamado por uma API externa para atualizar telemetrias de um veículo.
   - [ ] Quando um veículo for criado, a API de telemetria deve ser chamada para iniciar o tracking do veículo.
   - [ ] Quando um veículo for excluído, a API de telemetria deve ser chamada para finalizar o tracking do veículo.

4. **Testes e2e**:
   - [ ] Espera-se que o candidato desenvolva testes automatizados para verificar o funcionamento da API em um cenário de ponta a ponta (e2e).

5. **Documentação**:
   - [ ] A API deve ser documentada utilizando **Swagger**, facilitando o entendimento e uso por outras equipes ou serviços.

6. **Desafios Adicionais**:
   - [ ] O projeto deve incluir um usuário padrão Admin.
   - [ ] A lógica de negócios deve ser clara, garantindo que apenas usuários com permissões adequadas realizem operações administrativas.
   - [ ] A aplicação deve ser capaz de escalar e estar pronta para ser executada em ambientes de produção, com uso de Docker para containerização.
   - [ ] Quando for excluir uma companhia deverá também excluir todos os veículos daquela companhia.

**Operações de Organização e Veículo**:

- **Criar Organização**  
  **Endpoint**: `POST /companies`  
  **Descrição**: Cria uma nova organização com as informações fornecidas.  
  **Request Body**:  
    - `callbackUrl` (string): URL de callback para notificações.  
    - `password` (string): Senha associada à organização.  
    - `username` (string): Nome de usuário para a organização.  
    - `companyRef` (number): Identificador único da organização.  
  **Resposta**:  
    - `201 Created`: Organização criada com sucesso.  

- **Deletar Organização**  
  **Endpoint**: `DELETE /companies/{companyRef}`  
  **Descrição**: Deleta logicamente uma organização existente com base no identificador `companyRef`.  
  **Path Parameter**:  
    - `companyRef` (number): Identificador único da organização a ser excluída.  
  **Resposta**:  
    - `200 OK`: Organização excluída com sucesso.  

- **Criar Veículo**  
  **Endpoint**: `POST /vehicles`  
  **Descrição**: Cria um novo veículo associado a uma organização específica.  
  **Query Parameter**:  
    - `companyRef` (number): Identificador da organização à qual o veículo pertence.  
  **Request Body**:  
    - `vin` (string): Número de Identificação do Veículo (VIN).  
    - `fuelLevel` (number): Nível de combustível do veículo.  
  **Resposta**:  
    - `201 Created`: Veículo criado com sucesso.  

- **Deletar Veículo**  
  **Endpoint**: `DELETE /vehicles/{vin}`  
  **Descrição**: Deleta logicamente um veículo existente com base no seu `vin`.  
  **Path Parameter**:  
    - `vin` (string): Número de Identificação do Veículo (VIN).  
  **Query Parameter**:  
    - `companyRef` (number): Identificador da organização à qual o veículo pertence.  
  **Resposta**:  
    - `200 OK`: Veículo excluído com sucesso.  

**Critérios de Avaliação:**
- [ ] Organização e estruturação do código
- [ ] Conhecimento de **NestJS** e **TypeScript**
- [ ] Uso correto de **PostgreSQL** com **migrations** e **seeds**
- [ ] Capacidade de dockerizar o projeto
- [ ] Implementação da **autenticação JWT** e segurança da aplicação
- [ ] Aplicação da lógica de negócios e controle de permissões
- [ ] Internacionalização e configuração de múltiplos idiomas
- [ ] Documentação clara e precisa com **Swagger**
- [ ] Escrita de testes end-to-end (e2e)
- [ ] Integração com API externa para telemetria

**Diferenciais:**
- [ ] Código limpo e bem documentado
- [ ] Implementação de boas práticas de segurança
- [ ] Uso de boas práticas para manutenibilidade e escalabilidade da aplicação
- [ ] Validação das variáveis de ambiente
- [ ] Validação de todos os payloads recebidos pela API


[API Telemetria Docs](https://github.com/joaodobread/fake-tracking-api)
