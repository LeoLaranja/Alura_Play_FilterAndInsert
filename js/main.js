
const videosItem = document.querySelector('.videos__item')
const lista = document.querySelector("[data-lista]")

// FUNÇÃO ASSÍNCRONA PARA REQUISIÇÃO DE API VIA FETCH AWAIT
async function requisicaoApi () {
    let url = await fetch ('http://localhost:3000/videos')
    let urlConvertida = await url.json()
    return urlConvertida;
}

//FUNÇÃO PARA CONSTRUIR OS CARDS DE VIDEOS VIA INNERHTML, INSERINDO O TRECHO DE CÓDIGO 'LI' DO HTML PRÉVIO. PASSAMOS PARAMETROS ESTABELECIDOS EM UM FOR EACH POSTERIOR
function constroiCards(titulo, descricao,url,imagem) {
    const video = document.createElement('li')
    video.className = 'videos__item'
    video.innerHTML = `
        <div class="descricao-video">
                <iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <img src="${imagem}" alt="logo do canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`
    return video
}

// FOR EACH PARA RODAR OS ELEMENTOS DO ARRAY DE VIDEOS DO ARQUIVO JSON (TITULO, DESCRICAO, URL E IMAGEM)
async function forEachApi () {
    const listaApi = await requisicaoApi();
    listaApi.forEach(element => {
        lista.appendChild(constroiCards(element.titulo, element.descricao,element.url,element.imagem))
    });
}
forEachApi ()

//FUNÇÃO QUE PERMITE ACRESCENTAR NOVOS VÍDEOS NA TELA ATRAVÉS DO FORMULÁRIO ACESSÍVEL VIA ÍCONE DE 'MAIS' CONTIDO NO MENU.
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

//---------------------------------------------------------------------------------------------------------
//ABAIXO FAREMOS O FORMULÁRIO FUNCIONAR PARA SER POSSÍVEL UM USUÁRIO CADASTRAR UM NOVO VÍDEO. PARA ISSO SELECIONAREMOS OS CAMPOS DO FORMULÁRIO E CRIAREMOS A FUNÇÃO PARA SUBMETER OS VIDEOS. ESSES SERÃO INCORPORADOS NA API.


const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await criaVideo(titulo, descricao, url, imagem);
    window.location.href = "../pages/envio-concluido.html";
}

if (formulario) {
    formulario.addEventListener("submit", criarVideo);
}

//Para fazer uma solicitação GET simples com fetch, o único parâmetro obrigatório é a URL como argumento, por isso não havíamos declarado o método na função listaVideos(). Para uma solicitação POST, você precisará passar um objeto das opções de configuração como um segundo argumento. O objeto opcional pode receber vários parâmetros diferentes, mas o essencial é a declaração de que está usando o método POST. 

// Função para filtrar vídeos pelo título
// Função para remover acentos de uma string
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


// Função para filtrar vídeos pelo título
// function filtrarVideos() {
//     const input = document.getElementById('pesquisar');
//     const filter = removerAcentos(input.value.toLowerCase());
//     const videos = document.querySelectorAll('.videos__item');
//     const container = document.querySelectorAll('.videos__container');

//     videos.forEach(video => {
//         const titulo = removerAcentos(video.querySelector('h3').textContent.toLowerCase());
//         if (titulo.includes(filter)) {
//             video.style.display = '';
//         } else {
//             video.style.display = 'none';
//         }
//     });
// }

// // Adicionar evento de input ao campo de pesquisa para filtrar os vídeos em tempo real
// document.getElementById('pesquisar').addEventListener('input', filtrarVideos);

// Função para remover acentos de uma string
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para filtrar vídeos pelo título
function filtrarVideos() {
    const input = document.getElementById('pesquisar');
    const filter = removerAcentos(input.value.toLowerCase());
    const videos = document.querySelectorAll('.videos__item');
    let encontrouVideo = false;

    videos.forEach(video => {
        const titulo = removerAcentos(video.querySelector('h3').textContent.toLowerCase());
        if (titulo.includes(filter)) {
            video.style.display = '';
            encontrouVideo = true;
        } else {
            video.style.display = 'none';
        }
    });

    const mensagemBusca = document.getElementById('mensagem-busca');
    if (encontrouVideo) {
        mensagemBusca.style.display = 'none';
    } else {
        mensagemBusca.style.display = 'block';
    }
}

// Adicionar evento de input ao campo de pesquisa para filtrar os vídeos em tempo real
document.getElementById('pesquisar').addEventListener('input', filtrarVideos);


