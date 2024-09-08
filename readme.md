# Projeto TypeScript

Este é um projeto desenvolvido em TypeScript, estruturado para seguir as melhores práticas de desenvolvimento.

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Rodando o projeto](#rodando-o-projeto)
- [Estrutura de Branches](#estrutura-de-branches)
- [Processo de Trabalho](#processo-de-trabalho)
- [Commits Semânticos](#commits-semânticos)
- [Contribuindo](#contribuindo)

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

Além disso, é interessante ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

## Instalação

### Clonando o Repositório

```bash
git clone https://github.com/DiegoAVaz/node_typescript_api_rotina_estudos.git
cd seu-repositorio
```

## Instalando as dependências

Com npm:

```bash
npm install
```

Com yarn:

```bash
yarn install
```

# Rodando o projeto

Para rodar o projeto localmente:

Com npm:

```bash
npm run dev
```

Com yarn:

```bash
yarn dev
```

Isso irá iniciar o servidor de desenvolvimento. O projeto estará disponível no endereço http://localhost:3000.

# Estrutura de Branches

O projeto utiliza a seguinte estrutura de branches:

_master_: Branch de produção, com o código estável.  
_homolog_: Branch de homologação, onde são testadas novas funcionalidades.  
_dev_: Branch de desenvolvimento, onde todas as alterações e conflitos são resolvidos antes de passarem para homolog.

# Processo de Trabalho

Faça o pull da branch homolog:

```bash
git checkout homolog
git pull origin homolog
```

Crie uma nova branch para suas alterações:

```bash
git checkout -b tipo_de_alteracao/descricao
```

Exemplo:

```bash
git checkout -b feature/adicionar-login
```

Faça suas alterações e commits semânticos (veja a seção de Commits Semânticos).

Faça o push da sua branch:

```bash
git push origin tipo_de_alteracao/descricao
```

Crie um pull request da sua branch para a branch dev. Não faça PRs diretamente para homolog ou master.

## Commits Semânticos

Os commits devem seguir o padrão semântico:

_feature_: para novas funcionalidades.  
_fix_: para correção de bugs.  
_refactor_: para melhorias no código que não afetam funcionalidades.  
_docs_: para alterações na documentação.  
_style_: para formatação do código (espaçamento, indentação, etc.).  
_test_: para adição ou correção de testes.

Exemplo de commit:

```bash
git commit -m "feature/adicionar-nova-rota"
```

# Contribuindo

Para contribuir com o projeto, siga o processo descrito acima e sempre crie um pull request da sua branch para a branch dev. Após a revisão e resolução de conflitos, suas alterações serão integradas à branch homolog para testes e, finalmente, à branch master para produção.
