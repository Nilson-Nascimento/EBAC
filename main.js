$(document).ready(function(){
    console.log('Olá JQuery - A página está carregada!')


//const form = document.getElementById('form-list')

//const  inputValue = document.getElementById('input-list')

//console.log(form)


    $('#form-list').submit(function(e){
        e.preventDefault()//Inibi o reload do formulário

        // .val() Obtém o valor digitado no input, .trim() sem espaços no início e no final
        const inputValue = $('#input-list').val().trim()
        
        // Cria um novo item de lista com a tarefa
        const newIten = $(`<li>${inputValue}</li>`)
        $(newIten).appendTo('#task-list')

        $('#input-list').val('')

        console.log(inputValue , "> Valor do inputValue")
        console.log(newIten, "> Valor newIten")    


        newIten.click(function(){
            
            $(this).toggleClass('completed')
            console.log("O click, funcionou!")

        })

    })

})