

# Extensão Chrome para adicionar utilitários ao LMS

  

Este projeto utiliza o Webpack para criar uma extensão rápida e eficiente, com TypeScript como linguagem principal. A arquitetura é baseada em princípios de Programação Orientada a Objetos (POO), facilitando a organização e reutilização do código.

## Funcionalidades

-  **Sorteador**: Criar um sorteador baseado na lista de alunos do LMS! Acessar o link: https://lms.ada.tech/teacher/lectures com a extensão instalada.

![Imagem sorteador fechado](/src/assets/docs/sorteador-closed.jpeg)
  ![Imagem sorteador aberto](/src/assets/docs/sorteador-opened.jpeg)

## Tecnologias

  
-  **Webpack**: Para um ambiente de desenvolvimento rápido.

-  **TypeScript**: Para tipagem estática e desenvolvimento mais seguro.

-  **POO**: Estruturação do código com classes, herança, encapsulamento e polimorfismo.

## Pré-requisitos


Antes de iniciar, você precisará ter o Node.js instalado na sua máquina. Se ainda não o possui, pode baixá-lo [aqui](https://nodejs.org/).

  

## Como iniciar o projeto

 

Siga os passos abaixo para rodar a aplicação localmente:

  

1.  **Clone o repositório:**

  

```bash
git clone https://github.com/MateusPaixao/lms-utils
```

2.  **Navegue até a pasta do projeto:**

```bash
cd lms-utils
```


3.  **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

4.  **Execute o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

**Ou**

5.  **Build o projeto:**
```bash
npm run build
# ou
yarn build
```

6.  **Acesse a extensão no chrome:**

- Acesse o gerenciamento de extensões: [chrome://extensions/](chrome://extensions/)
- Habilite o modo desenvolvedor
- Carregue a extensão a partir da pasta *dist*/

![Imagem gerenciar extensões chrome](/src/assets/docs/extensions-manager.jpeg)

- Acesse a o LMS na página que deseja utilizar, por enquanto temos o utilitários sorteador na página de lista de presença: https://lms.ada.tech/teacher/lectures