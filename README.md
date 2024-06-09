# Orange-Play

Orange-Play é um projeto inspirado na interface do YouTube, desenvolvido durante o curso de Formação Front-End da ALURA, para demonstrar habilidades em HTML, CSS, e JavaScript. Este projeto inclui funcionalidades como filtro de busca por título de vídeo e adição de novos vídeos, proporcionando uma experiência de usuário dinâmica e interativa.

## Funcionalidades Principais

- **Pesquisa por Título de Vídeo**: Os usuários podem pesquisar vídeos pelo título utilizando a barra de pesquisa. A busca não distingue entre maiúsculas e minúsculas e ignora acentos para facilitar a pesquisa.
- **Mensagem de Nenhum Resultado Encontrado**: Quando uma pesquisa não encontra vídeos correspondentes, uma mensagem de aviso é exibida para o usuário.
- **Adição de Novos Vídeos**: Os usuários podem adicionar novos vídeos à lista, proporcionando uma atualização dinâmica do conteúdo.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6+

## Como o projeto foi configurado

- FUNÇÃO ASSÍNCRONA PARA REQUISIÇÃO DE API VIA FETCH AWAIT
- FUNÇÃO PARA CONSTRUIR OS CARDS DE VIDEOS VIA INNERHTML, INSERINDO O TRECHO DE CÓDIGO 'LI' DO HTML PRÉVIO. PASSAMOS PARAMETROS ESTABELECIDOS EM UM FOR EACH POSTERIOR
- FOR EACH PARA RODAR OS ELEMENTOS DO ARRAY DE VIDEOS DO ARQUIVO JSON (TITULO, DESCRICAO, URL E IMAGEM)
- FUNÇÃO QUE PERMITE ACRESCENTAR NOVOS VÍDEOS NA TELA ATRAVÉS DO FORMULÁRIO ACESSÍVEL VIA ÍCONE DE 'MAIS' CONTIDO NO MENU.
- FUNÇÃO QUE PERMITE O FORMULÁRIO DE ENVIO DE NOVO VÍDEO FUNCIONAR (PARA SER POSSÍVEL UM USUÁRIO CADASTRAR UM NOVO VÍDEO) -> ESSES SERÃO INCORPORADOS NA API.
- Função para remover acentos de uma string
- Função para filtrar vídeos pelo título


---

Desenvolvido por [Leonardo Laranja](https://github.com/LeoLaranja)
