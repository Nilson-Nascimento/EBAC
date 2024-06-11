//requisição direta com o JQuery
// Executa a função quando a página estiver totalmente carregada
$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#cancel-button'))
    
    // Os códigos 1 e 2 Abaixo executam a mesma função. A 1ª usa JS,
    // a 2ª usa JQuery.

    // 1ª Função
    document.querySelector('header button').addEventListener('click', function(){
        //alert('Olá JavaScript')
        
    })

    // 2ª Função
    $('header button').click(function(){
       //alert("Olá JQuery")
        $('form').slideDown(700) // mostra o formulário em milisegundos
    })

    $('#cancel-button').click(function(){
        $('form').slideUp()
    })

    // Inibi o reload do formulário
    $('form').on('submit', function(e){
        e.preventDefault()
        const urlNewImg = $('#url-img-new').val()
        const newIten = $('<li style="display:none"></li>')
        $(`<img src="${urlNewImg}"/>`).appendTo(newIten)
        $(`<div class="overlay-img-link">
            <a href="${urlNewImg}" target="_blank" title="Ver a imagem em tamanho real">
            Ver a imagem em tamanho real
            </a>
            </div>`).appendTo(newIten)
            $(newIten).appendTo('ul')
            $(newIten).fadeIn(1000)

            $('#url-img-new').val('')

        newImg() // testando uma função JS externa
        
        console.log(document.querySelector('newIten'))
        console.log(urlNewImg)
        console.log("submit")
    })
})

function newImg(){
    console.log('New Image')
}