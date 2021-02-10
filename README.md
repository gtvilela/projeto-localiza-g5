# Projeto Localiza - Grupo 5 :memo:

(Descrição do projeto)


## Tecnologias :computer:

<ul>
  <li>React</li>
  <li>Next.js</li>
  <li>Typescript</li>
  <li>Jest</li>
</ul>

## Desenvolvimento :man_technologist:

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/gtvilela/projeto-localiza-g5.git
cd projeto-localiza-g5
npm install
```
Obs.: Gentileza utilizar o npm para instalações, pois o projeto foi criado por npm e configurado o ESlint. Com isso, o yarn pode fazer o projeto quebrar.

### Padronização de branches

<ul>
  <li><strong>feature/</strong>nome-da-branch</li>
  <li><strong>hotfix/</strong>nome-da-branch</li>
  <li><strong>release/</strong>nome-da-branch</li>
 </ul>

### Padronização commits:

1. <strong>build:</strong> Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm),
2. <strong>ci:</strong> Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs);
3. <strong>docs:</strong> referem-se a inclusão ou alteração somente de arquivos de documentação;
4. <strong>feat:</strong> Tratam adições de novas funcionalidades ou de quaisquer outras novas implantações ao código;
5. <strong>fix:</strong> Essencialmente definem o tratamento de correções de bugs;
6. <strong>perf:</strong> Uma alteração de código que melhora o desempenho;
7. <strong>refactor:</strong> Tipo utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada;
8. <strong>style:</strong> Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.);
9. <strong>test:</strong> Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD);
10. <strong>chore:</strong> Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas que realmente não entram em produção;
11. <strong>env:</strong> basicamente utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.


## Deploy e Publicação :cloud:

(Especificação deploy)

[Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## Api :dizzy:

(Especificação api)

As rotas podem ser acessadas e editadas em `pages/api/hello.js`.

## Testes :test_tube:

(Especificação dos testes)

## Inicialização :timer_clock:

Para inicialização do servidor:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

