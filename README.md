# BrickLayer Pixel
Um boilerplate simples para criar projetos sem frameworks usando Gulp, Pug e Sass.

## Requesitos
- Node 14.*

## Configurações
As configurações do projeto para executar as tarefas do `gulp` encontram-se
no arquivo [./task/config.js](./task/config.js).

## Tarefas
- `start`: Inicia o projeto,
- `build`: Gera projeto para produção,
- `build:comp`: Gera build com `CSS` dos componentes separados para serem utilizadas na documentação,
- `movedocs:css`: Move o `CSS` gerado dos componentes para a pasta da documentação,
- `postinstall`: Hook do nodejs que você roda algum script após alguma instalação.
- `pre-commit`: Hook do Husky para rodar algo antes de commitar.


## Iniciando o porjeto
```
# Instale as dependências.
npm install

# Inicie o projeto
npm run start

```
Caso você não altere as configurações, após rodar esse comando será criado
um diretório `dev` contendo todos os arquivos no momento em que é desenvolvido.

## Gerando para produção
```
# Gera o projeto para produção.
npm run build

```
Após rodar o código os arquivos estaram numa pasta `build` caso você não altere
as configurações padrões.

## Documentando o projeto
O boilerplate utiliza o [Docusaurus](https://v2.docusaurus.io) como ferramenta de documentação. Caso não
queira ele basta excluir a pasta `brick-docs` e remover os scripts.

## Sobre o PUG
A estrutura de pastas está de acordo com o modelo [Atomic Design](atomicdesign.bradfrost.com) mas isso não impede de ser alterado.

## Sobre o CSS
O projeto utiliza a arquitetura [ITCSS](https://willianjusten.com.br/organizando-seu-css-com-itcss/) e as metodologia [BEM](http://getbem.com/) junto com [Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

### A estrutura de pastas do ITCSS:

#### Settings
Essas são as configurações básicas da sua arquitetura. Em geral, são as variáveis globais que vão definir cores, espaçamentos e outras configurações desejadas para o funcionamento do seu framework em si.

#### Generic
Essa é a primeira camada que vai de fato aplicar CSS final e ela é destinada para as propriedades mais genéricas e com a menor especificidade possível.

Em geral, é onde colocamos resets, box-sizing, etc.

#### Base
Aqui ficarão as estilizações básicas, a última camada que veremos seletores em tags diretamente.

Portanto aqui ficarão estilos para os headings `h1-h6`, `blockquotes`, `a`, `buttons`, etc. Mas lembre-se são estilizações BÁSICAS, nada de estilizar tudo aqui!

#### Objects
Seguindo os princípios de OOCSS (CSS Orientado a Objetos), aqui é onde iremos ter nossos pequenos "objetos", que nada mais são que pequenos pedaços da interface, em geral, padrões que se repetem por todo o site e que podem ter ou não uma camada visual por cima.

Aqui é onde fazemos os padrões de botões, listas, paineis, etc. Nesse momento, só é permitido também o uso de classes.

#### Components
Aqui como o nome já diz, teremos nossos componentes já mais específicos.

De acordo com o (RSCSS ou BEM), aqui que vamos jogar todos aqueles componentes/elementos criados. Enquanto nos objetos nós tentamos abstrair o máximo possível, para ter muitos objetos reutilizáveis e genéricos, aqui nós vamos ser específicos ao criar os componentes, mas respeitando as regras do (RSCSS ou BEM) de especificidade e também não colocando positions ou outras propriedades que engessem muito o componente a ponto dele não ser reutilizável.

Normalmente, aqui ficarão listas específicas como de produtos,
cards específicos como aqueles incluindo imagens, headers, footers e etc.

#### Layout
**Lembrando que essa pasta é uma organização que achei relevante ser colocada**
Aqui ficam os estilos relacionadas a posicionamento. Em outras palavras, as propriedades que afetam a posição de um bloco ou seus elementos devem ser abstraídas em uma classe separada para reutilização.

Além também de conter estilos para cada página específica.

#### Helpers

É o lugar onde você vai guardar seus mixins e funções necessárias para a construção de seus layouts. Pode ser qualquer coisa, desde mixins de font-face, até mixins de animações, etc.


### Sobre os namespaces utilizados são:

Namespaces | Significado |
---------|----------|
 `.c-foo__bar` | componentes
 `.o-foo__bar` | objetos
 `.l-foo__bar` | layouts
 `.u-foo__bar` | utilitários

Um [post](https://zellwk.com/blog/css-architecture-1/) que explica essa união com BEM e Namespaces.




