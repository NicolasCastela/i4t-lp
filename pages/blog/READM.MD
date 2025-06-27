# Página Blog

Esta página exibe os posts do blog do projeto.

## Como adicionar um novo post

Atualmente, a adição de posts é feita **manualmente**. Para que o post apareça corretamente nas seções e filtros, siga os passos abaixo:

### 1. Adicione o conteúdo do post

- Navegue até o arquivo HTML do blog (ex: `pages/blog/index.html`).
- Localize a seção onde os posts são exibidos (ex: dentro de `<section class="blog-cards-grid">` ou `<div class="card-banner-section">`).

### 2. Defina os atributos de categoria

- Para que o post seja filtrado corretamente, adicione o atributo `data-banner` ao elemento do post/banner.  
  Exemplo:
  ```html
  <div class="card-banner-section" data-banner="saude-mental">
    <!-- Conteúdo do post -->
  </div>
  ```
- O valor de `data-banner` deve corresponder à categoria do post (ex: `saude-mental`, `nutricao-saudavel`, etc).

### 3. Configure os botões de filtro

- Os botões de filtro devem ter o atributo `data-button` com o mesmo valor usado em `data-banner`.
  Exemplo:
  ```html
  <button class="filter-btn" data-button="saude-mental">Saúde Mental</button>
  ```
- Isso garante que, ao clicar no botão, apenas os posts da categoria correspondente serão exibidos.

### 4. Atualize o JavaScript (se necessário)
**Localicazacao da service:** `services/blog-service.js`

- O filtro de categorias funciona através do JavaScript, que utiliza os valores de `data-banner` e `data-button` para mostrar/ocultar os posts.
- Certifique-se de que o valor do atributo está correto e igual nos dois lugares.

### 5. Salve as alterações

- Após adicionar o novo post e configurar os atributos corretamente, salve o arquivo.
- O novo post aparecerá na página do blog e será filtrado conforme a categoria selecionada.

> **Nota:** Não há interface administrativa; conforme a reuniao alinhada com Emilio e Alcir toda alteração   deve ser feita diretamente no código HTML.  
> Lembre-se de manter o padrão dos atributos para garantir o funcionamento