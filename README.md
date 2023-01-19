# TrybeSmith ⚒️

## 📄 Sobre:

Projeto desenvolvido durante o módulo de back-end do curso de desenvolvimento web da [Trybe](https://www.betrybe.com/).

Neste projeto foi desenvolvida uma API RESTful de gerenciamento de items e vendas em uma loja medieval de um jogo. O desenvolvimento foi feito utilizando <strong>TypeScript</strong> e arquitetura <strong>MSC (model-service-controller)</strong>.

Para a aplicação foi utilizado um banco de dados <strong>MySQL</strong>.

Para as funções de autenticação foi utilizado a ferramenta <strong>JSON Web Token</strong>.


</br>
<details>
<summary><strong>Desempenho</strong></summary>
Aprovado com 100% de desempenho em todos os requisitos
![image](https://user-images.githubusercontent.com/99846604/213574698-cbc4216e-a63c-4ed8-9a2b-81e17614f205.png)
</details>

<details>
<summary><strong>Requisitos</strong></summary>
</br>
<strong>Requisitos obrigatórios:</strong> </br>
1. Crie um endpoint para o cadastro de produtos </br>
2. Crie um endpoint para a listagem de produtos </br>
3. Crie um endpoint para o cadastro de pessoas usuárias </br>
4. Crie um endpoint para listar todos os pedidos </br>
5. Crie um endpoint para o login de pessoas usuárias </br>
</br>

<strong>Requisitos bônus:</strong> </br>
6. Crie as validações dos produtos </br>
7. Crie as validações para as pessoas usuárias </br>
8. Crie um endpoint para o cadastro de um pedido </br>
</details>

<details>
<summary><strong>Diagrama Entidade-Relacionamento</strong></summary>
 
![image](https://user-images.githubusercontent.com/99846604/209410649-d4f4e628-97a1-493f-9254-dff27389e2db.png)
 
</details>
</br>

## ⚙️ Execução

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

      git clone git@github.com:joaoespacheco/Trybe-Project.27-trybesmith.git

Navegue até a raíz do projeto.

      cd Trybe-Project-27-trybesmith/
      
Uma vez na raiz do projeto, execute o comando abaixo para instalar as dependências do projeto.
    
    npm install
<br/>

<details>
   <summary><strong>Rodando a aplicação com o Docker</strong></summary>
  </br>

   Na pasta app do projeto, suba o container <strong>talker_manager</strong> utilizando o docker-compose.yml. Utilize o comando abaixo.

        docker-compose up -d

   Entre no terminal do container

        docker exec -it trybesmith bash

   Caso não tenha instalado anteriormente, uma vez no terminal do container, execute o comando abaixo para instalar as dependências do projeto.

        npm install

   Para iniciar o servidor utilize o seguinte comando no terminal do container

        npm run start
        
   Para iniciar o servidor no modo de desenvolvimento utilize o seguinte comando no terminal do container

        npm run dev
        
</details>
</br>

## ↪️ Rotas:

A documentação referente as rotas foi confeccionada utilizando a ferramenta Swagger/OpenAPI e pode ser visualizada de duas maneiras:

### Acessando as informações das rotas localmente:
A documentação das rotas pode ser acessada após iniciar a aplicação localmente de acordo com as instruções da seção anterior chamada "Execução". </br> 
</br>
Para visualizar as rotas e testar as requisições você pode utilizar a rota http://localhost:3000/api-docs. Caso preferir, você também pode utilizar um cliente de requisições HTTP de sua preferência (Insomnia, Thunder Client, etc) para realizar os testes.

### Acessando as informações das rotas online:
Para visualizar as rotas você pode utilizar a plataforma Swagger Viewer <strong>[clicando aqui](https://swaggerviewer.ptr.red/spec/aHR0cHM6Ly9naXRodWIuY29tL2pvYW9lc3BhY2hlY28vVHJ5YmUtUHJvamVjdC0yNC10YWxrZXItbWFuYWdlci9yYXcvbWFpbi9zcmMvc3dhZ2dlci5qc29u)</strong>.
      
</br>

## 🤹🏽 Habilidades Desenvolvidas:
* Criar uma aplicação utilizando Express.js e TypeScript
* Utilizar recursos como classes, interfaces, types entre outros
* Criar uma API RESTful utilizando arquitetura MSC (Model-Service-Controller)
* Validar os dados das requisições utilizando a biblioteca Joi
* Implementar autenticação via token utilizando JSON Web Token
</br>

## 🧰 Ferramentas:
* TypeScript
* Node.js
  * Express.js
  * Express Async Errors
* DotEnv
* Joi
* MySQL
* JSON Web Token
* Docker
</br>

## 📝 Desenvolvido por:
* [João Emanuel Soares Pacheco](https://github.com/joaoespacheco)
