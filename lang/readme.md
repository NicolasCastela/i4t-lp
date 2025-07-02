# Sistema de Internacionalização (i18n) - Emmitec Health Landing Page

Este projeto utiliza um sistema de internacionalização (i18n) para traduzir automaticamente o conteúdo das páginas, incluindo **header**, **footer** e o conteúdo principal, de acordo com o idioma selecionado pelo usuário.

## Estrutura de Pastas de Tradução

As traduções estão organizadas na pasta `/lang`:

- Os arquivos `*-index.json` em cada subpasta contêm as traduções específicas daquela página.
- Os arquivos em `/lang/struct-json/` podem ser usados para textos globais, como header e footer.

## Como funciona o carregamento das traduções

O arquivo [`services/i18n.js`](../services/i18n.js) é responsável por:

1. **Detectar o idioma salvo** no `localStorage` (padrão: `pt`).
2. **Detectar a página atual** e a pasta em que ela está.
3. **Carregar o arquivo de tradução correto** usando o [i18next](https://www.i18next.com/) e o plugin [i18next-http-backend](https://github.com/i18next/i18next-http-backend).
4. **Substituir automaticamente** o conteúdo de todos os elementos com o atributo `data-i18n` pelo texto traduzido correspondente.
5. **Atualizar o ícone da bandeira** de acordo com o idioma selecionado.

## Como adicionar traduções

1. **Para cada página**, crie ou edite o arquivo de tradução na pasta correspondente, por exemplo:
   - `/lang/BenefitsRPM/en-index.json`
   - `/lang/BenefitsRPM/es-index.json`

2. **Para textos globais** (header/footer), utilize arquivos como:
   - `/lang/struct-json/english.json`
   - `/lang/struct-json/espanol.json`

3. **Adicione o atributo `data-i18n`** nos elementos HTML que devem ser traduzidos, usando a chave correspondente do JSON.

   ```html
   <a data-i18n="about_us">Sobre Nós</a>