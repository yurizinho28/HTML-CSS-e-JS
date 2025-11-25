const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu');
const fundo = document.getElementById('fundo');
// configurações
const mudaCor = document.querySelectorAll('.mudaCor');
const config = document.querySelectorAll('.configuracao');
const botaoConfig = document.querySelectorAll('.botao-config');

function mudarCor(){
    mudaCor.forEach(e => {
        e.classList.toggle('claro')
    })

    config.forEach(e => {
        e.classList.toggle('claro')
    })

    botaoConfig.forEach(e => {
        e.classList.toggle('claro')
    })
};

function btn(){
    menu.setAttribute('data-ativo', 'true');
    botaoMenu.setAttribute('data-ativo', 'true');
    fundo.setAttribute('data-ativo', 'true');
};

fundo.addEventListener('click', function(){
    menu.removeAttribute('data-ativo');
    botaoMenu.removeAttribute('data-ativo');
    fundo.removeAttribute('data-ativo');
})