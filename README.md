# Node.js

Node.js é uma plataforma para desenvolvimento de aplicações lado do servidor, essas aplicações baseadas em rede,construído através do interpretador V8 Javascript Engine do Google Chrome, com o Node.js facilmente podemos construir aplicações rápidas e escaláveis.

## Tecnologias utilizadas no desenvolvimento

* ### Node.js
* Postman - Extensão do Google Chrome para teste de requisições HTTP.
* Npm - Gerenciador de pacotes do Node.js
* Express - Framework do Node.js.
* Mongodb - Banco de dados orientado a documentos, não relacional que armazena os dados no formato JSON.
* Mongoose - Biblioteca do Node.js que soluciona esquemas para modelar os dados da aplicação.
* Nodemon - Utilitário que monitora as alterações nos arquivos da aplicação e reinicia o servidor quando necessário.


## Desenvolvimento da aplicação

Antes de começarmos é importante que tenha o Node.js instalado em sua máquina, caso não tenha vou deixar o link para fazer o download diretamente do site [ https://nodejs.org/en/download/ ](https://nodejs.org/en/download/).

Após o Node.js instalado vamos começar a instalar as depêndencias do projeto.

Abra o terminal e vá até o diretório onde vai ficar nossa aplicação, ex:
```
Linux - cd /home/nomedocomputador/crudnodejs 
 
Windows - cd C:\Users\NomeDoComputador\Documents\crudnodejs
```
# Inicilizando o projeto

Agora já estamos na pasta onde será desenvolvido nosso projeto.
Então vamos iniciar a aplicação, ainda no terminal digite:

```
npm init
```
Logo ele irá pedir algumas informaçães para o projeto, essas informações serão inseridas no arquivo package.json do nosso projeto, ex:
```
package name: (exemplo) nome do Projeto
version: (1.0.0) versao do Projeto
description: Aqui será feito a descrição do nosso projeto.
entry point: (index.js) vamos trocar de index.js para server.js
test command: Opcional
git repository: endereço do repositório Git.
keywords: Opcional
author: Nome do autor.
```
## Instalando as depêndecias do projeto

Então vamos usar o NPM para instalar as dependências: Express, Mongodb, Mongoose e Nodemon, essas dependêcias serão armazenadas no arquivo package.json através da instrução " --save "  para Ainda no terminal, digite:

* Instalação Express:
```
npm install express --save

```
* Instalação Mongodb
```
npm install mongodb --save

```

* Instalação Mongoose
```
npm install mongoose --save

```
* Instalação Nodemon
```
npm install nodemon --save

```
Após feito as instalações das dependências, vamos ter uma estrutura assim: 

```
- NossoProjeto/
    |---node_modules/ pasta criada pelo npm. Onde obtem as nossas dependências e pacotes */
 
    - package.json   /* arquivo responsável pelas dependências da nossa aplicação */
 
    - server.js
```
Feito!
Agora podemos começar a desenvolver nossa aplicação.
<hr>

### Criação do banco através do [Mlab](https://mlab.com/)

Vamos usar o Mlab para pegar o URI para que possamos conectar o banco com a nossa aplicação.

Acesse o site do [Mlab](https://mlab.com/)  e clique no botão "sign up", crie uma conta no site.

Feito isso, vá até a opção "MongoDB Deployments" e clique em "create new".

Na caixa Standard Line, marque a opção "Sandbox" - "FREE".
A segunda caixa apenas deixe em branco, e depois em "Database Name:", insira o nome do banco.
Após clique em "Create new MongoDB deployment".

![Mlab](https://i.imgsafe.org/2bdd5097f7.png)

Pronto nosso banco foi criado!<br>
No desenvolvimento da aplicação vamos precisar do link do URI, que está selecionado.
![Mlab](https://i.imgsafe.org/2c09d9cf2e.png)

<hr>

### Executando o projeto

Para iniciar nosso servidor, execute o comando:
```
node server.js

```
Acesse http://localhost:3000/ 

<hr>

### Conclusões

Node.js utiliza Javascript, resolve o problema de muitos programadores em ter que trabalhar com linguagens diferentes no front-end e no back-end, com o Node.js isso é resolvido já que ele permite Javascript Full-stack.
Mas por ser uma tecnologia recente, o Node.js ainda sofre algum preconceito por parte dos desenvolvedores na questão de garantir confiança em projetos grandes.

### Extras

[Exemplo de Hello World com Express](http://expressjs.com/pt-br/starter/hello-world.html)<br>
[Primeiros passos com Node.js](https://tableless.com.br/o-que-nodejs-primeiros-passos-com-node-js/)
