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

#### Componentes
Seguindo os princípios de OOCSS (CSS Orientado a Objetos), aqui é onde iremos ter nossos pequenos "componentes", que nada mais são que pequenos pedaços da interface, em geral, padrões que se repetem por todo o site e que podem ter ou não uma camada visual por cima.

Aqui é onde fazemos os padrões de botões, listas, paineis, etc. Nesse momento, só é permitido também o uso de classes.

#### Objetos
Aqui como o nome já diz, teremos nossos objetos já mais específicos.

De acordo com o (RSCSS ou BEM), aqui que vamos jogar todos aqueles componentes/elementos criados. Enquanto nos objetos nós tentamos abstrair o máximo possível, para ter muitos objetos reutilizáveis e genéricos, aqui nós vamos ser específicos ao criar os objetos, mas respeitando as regras do (RSCSS ou BEM) de especificidade e também não colocando positions ou outras propriedades que engessem muito o objeto a ponto dele não ser reutilizável.

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
 `.s-foo__bar` | escopo
 `.is-bar` e `.has-foo` | algum estado
 `._bar__foo` e `._foo__bar` | hack
 `.js-bar__foo`| classe para JS
 `.qa-bar__foo`| classe para testes de QA
#### Namespace: .c-
Significa que algo é um componente. Esta é uma parte da IU concreta e específica da implementação. Todas as alterações feitas em seus estilos devem ser detectáveis ​​no contexto em que você está olhando. A modificação desses estilos deve ser segura e sem efeitos colaterais.

#### Namespace: .o-
Significa que algo é um objeto e que pode ser usado em qualquer número de contextos não relacionados àquele em que você pode vê-lo atualmente.
Fazer modificações nesses tipos de classe pode ter efeitos indiretos em muitos outros lugares não relacionados.
#### Namespace: .l-
É usado para definir elementos numa página. Ditam a estrutura de uma página, posicionamento dos elementos e etc...

#### Namespace: .u-
Significa que esta classe é uma classe de utilitário. Ele tem uma função muito específica (geralmente fornecendo apenas uma declaração) e não deve ser vinculado ou alterado. Ele pode ser reutilizado e não está vinculado a nenhuma parte específica da IU.
#### Namespace: .s-
Significa que uma classe cria um novo contexto de estilo ou escopo. Semelhante a um layout, mas não necessariamente cosmético, eles devem ser usados ​​com moderação - podem estar sujeitos a abusos e levar a CSS de baixa qualidade se não forem usados ​​com sabedoria. Geralmente é utilizando para conteúdos que venham de um publicador.
#### Namespace: .is- ou .has-
Significa que a parte da IU em questão atualmente tem um estilo específico devido a um estado ou condição. Este namespace stateful é lindo e vem do SMACSS. Ele nos diz que o DOM atualmente tem um estilo temporário, opcional ou de curta duração aplicado a ele devido a um determinado estado que está sendo invocado.
#### Namespace: ._
Diga que essa class é a pior das piores - um hack! Às vezes, embora raramente, precisamos adicionar uma classe em nossa marcação para forçar algo a funcionar. Se fizermos isso, precisamos que os outros saibam que esta classe é menos do que ideal e, esperançosamente, temporária (ou seja, não se vincule a ela).
#### Namespace: .js-
Significa que essa parte do DOM tem algum comportamento agindo sobre ela e que o JavaScript se liga a ela para fornecer esse comportamento.
#### Namespace: .qa-
Significa que uma equipe de controle de qualidade ou engenharia de teste está executando um teste de IU automatizado que precisa localizar ou vincular a essas partes do DOM. Como o namespace JavaScript, ele basicamente reserva ganchos no DOM para fins não CSS.

Um [post](https://zellwk.com/blog/css-architecture-1/) que explica essa união com BEM e Namespaces.




