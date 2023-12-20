<br>
<p align="center">
 <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/WatsonSantos/next-todolist?color=%2304D361">
 <img alt="Repository size" src="https://img.shields.io/github/repo-size/WatsonSantos/next-todolist">
 <a href="https://github.com/WatsonSantos/next-todolist/commits/master" target="_blank" >
      <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/WatsonSantos/next-todolist"></a>
 <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
 <a href="https://github.com/WatsonSantos/next-todolist/stargazers" target="_blank">
      <img alt="Stargazers" src="https://img.shields.io/github/stars/WatsonSantos/next-todolist?style=social"></a>
 <a href="www.linkedin.com/in/watson-dos-santos-a1b547182/" target="_blank">
      <img alt="Feito por Wason Santos" src="https://img.shields.io/badge/feito%20por-WatsonSantos-%237519C1"></a>
 <a href="https://www.instagram.com/watson_santos1/" target="_blank">
       <img src="https://img.shields.io/badge/meu-Instagram-%23E4405F"></a>

</p>

<div align=center>
<img alt="banner" src="./src/app/favicon.ico" align=center/>  
</div>

## 💻 Sobre o projeto

<p align="center">🚀 Um aplicação de lista de tarefas (Todo list) para que possam ser anotadas as tarefas do dia-a-dia e assim auxiliar no controle das tarefas que têm que ser realizadas.</p>

<br>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-demonstração">Demonstração</a> • 
 <a href="#-pré-requisitos">Pré-requisitos</a> • 
 <a href="#-executando-a-aplicação">Executando a aplicação</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>
<br>
<h4 align="center"> 
	🚩   Status:  Terminado🚀   🚩
</h4>

## ⚙️ Funcionalidades

- ✅ Adicionar uma nova tarefa
- ✅ Eliminar tarefa
- ✅ Alterar o status (marcar a tarefa como cnluída ou não) da terefa
- ✅ Listagem das tarefas
  - Conteúdo da tarefa
  - Botão de eliminar
  - Botão de editar o status

## 📺 Demonstração

<br>
<img alt="banner" src="./public/img/bunner.png" align=center/>

<br>

 <a href="https://vercel.org" target="_blank"> 
  <img alt="vercel" src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white">
 </a>

Link para teste: [Lista de tarefas](https://)

<br>

## 🔗 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina o [Node.js](https://nodejs.org/).
<br>
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## 🎲 Executando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/WatsonSantos/next-todolist>

# Acesse a pasta do projeto no terminal/cmd
$ cd next-todolist

# Instale as dependências
$ npm install

# Acesse o arquivo no caminho: prisma/schema.prisma
# Comenta o datasource db com o provider "postegres" e descomente o provider "sqlite"


# Execute o o comando
$ npx prisma migrate dev --name

## Acesse o componente no cmainho: src/app/components/DeleteButton.jsx e retire a propriedade "disabled" no botão

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/): Forma de rodar o Javascript no servidor.
- [Next.js](https://nextjs.org/): Framework front-end do javascrit muito poderoso.
- [Prisma](https://prisma.io/): Um ORM poderso para trabalhar com vários Banco de dados (Postgre, Mysql, MongoDB. SQLite, etc)
- [Zustend](https://zustand-demo.pmnd.rs/): Um gerenciador de estado moderno e otimizado.

## 👨‍💻 Autor

<a href="https://github.com/WatsonSantos">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87064395?s=400&u=b48b05f5151f538308d8a50d2b058988ab3215b6&v=4" width="100px;" alt="logo"/>
 <br />
 <sub><b>Watson Santos</b></sub></a> <a href="https://github.com/WatsonSantos" title="Watson Github">🚀</a>

Feito com ❤️ por Watson Santos 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Watson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/watson-dos-santos-a1b547182/)](https://www.linkedin.com/in/watson-dos-santos-a1b547182/)
[![Gmail Badge](https://img.shields.io/badge/-watsontavares72@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:watsontavares72@gmail.com)](mailto:watsontavares72@gmail.com)

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
