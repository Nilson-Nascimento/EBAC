document.addEventListener('DOMContentLoaded', function(){
    // Pega o valor digitado dentro de form-sorter ao clicar 
    document.getElementById('form-sorter').addEventListener('submit', function(evento){
        let numberMax = document.getElementById('number-max').value
        // Transforma string em número inteiro
        numberMax = parseInt(numberMax)
        // elimina o efeito de reload da página
        evento.preventDefault()

        // Sortea um número radômico e soma 1.
        let numberSorted = Math.random() * numberMax
        numberSorted = Math.floor(numberSorted) + 1

        // Inseri as informações da variável numberSorted dentro do elemento que tem a id resultValue.
        document.getElementById('resultValue').innerText = numberSorted
        document.querySelector('.result').style.display = "block";
    })
})

// Faz piscar um elemento
        function pisca() {
        var f = document.getElementById('pisca');
        setInterval(function() {
          f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
        }, 1000);
      }
