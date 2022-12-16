'use strict';

//variavel onde irá conter cada imagem do slide//
const images = [

    { 'id': '1', 'url': './img/chrono.jpg'},
    { 'id': '2', 'url': './img/inuyasha.jpg'},
    { 'id': '3', 'url': './img/ippo.png'},
    { 'id': '4', 'url': './img/tenchi.jpg'},
    { 'id': '5', 'url': './img/tenjhotenge.jpg'},
    { 'id': '6', 'url': './img/yuyuhakusho.jpg'},

]

//variavel para  selecionar area de container interno, onde irá aparecer as imagens//
const containerItems = document.querySelector('#container-items')


//arrow function utilizando as variaveis "images" e "container" como parametro.// 
//Toda vez que eu chamar essa função, deverá ser carregada as imagens do array, uma por vez.//
const loadImages = (a, b) => {

    //Executar uma função para cada item dentro da variavel 'images'. Criado o parametro 'cadaImagem' que representa de forma unitaria cada um dos elementos do array (imagens) // 
    a.forEach (cadaImagem => {

        b.innerHTML += 
        `
            <div class='item'>
                <img src='${cadaImagem.url}'
            </div>
        `
        
    })

}

loadImages (images, containerItems)

//Variavel que engloba todas as imagens presentes na div "item", que foi criada dentro de "loadImages"//
let items = document.querySelectorAll('.item')

const previous = () => {

    //Toda vez que clicar em previous, o primeiro item será enviado para o final.//
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')

}

const next = () => {

    //Enviar o ultimo item para ficar antes do primeiro item e depois ler novamente a lista//
    const lastItem = items[items.lenght - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')

}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)

