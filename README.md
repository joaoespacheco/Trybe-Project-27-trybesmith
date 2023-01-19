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

## ↪️ Rotas:
### Login:
<details>
<summary><strong>POST /login</strong></summary>
 
Esta rota é responsável por fazer o login na API </br>
> * Se bem-sucedido, retorna status 200 e um token

</details>

### Users:
<details>
<summary><strong>POST /users</strong></summary>

Cadastra um usuário no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um token

</details>

### Orders:
<details>
<summary><strong>GET /orders</strong></summary>

Lista todas os pedidos de compra cadastrados no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um array contendo todos os pedidos de compra cadastrados

</details>
<details>
<summary><strong>POST /orders</strong></summary>

Cadastra um novo pedido no banco de dados </br>
> * Se bem-sucedido, retorna status 201 e um objeto contendo as informações do novo pedido

</details>

### Products:
<details>
<summary><strong>GET /products</strong></summary>

Lista todas os produtos cadastrados no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um array contendo as informações de todas os produtos cadastrados

</details>
<details>
<summary><strong>POST /products</strong></summary>

Cadastra uma novo produto no banco de dados </br>
> * Se bem-sucedido, retorna status 201 e um objeto contendo as informações do novo produto

</details>
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
