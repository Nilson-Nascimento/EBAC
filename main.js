const form = document.getElementById('form-comparar')
let elementCampoA = document.querySelector('#campo-a')
let elementCampoB = document.querySelector('#campo-b')
let sentenca = false;

form.addEventListener('submit' , function(e){
    e.preventDefault();
    alert('O botão funcionou!');

    let campoA = elementCampoA.value
    let campoB = elementCampoB.value

   // while (campoA == '' || campoB == ''){
     //   alert("preencha todos os campos!")
       // stop;
    //}

    alert(`Campo A: ${campoA} , Campo B: ${campoB}`);

    const sentenca = campoA < campoB;

    if (sentenca){

        alert('Muito bom ! o número B é maoir que o número A.')

        elementCampoA.value = ' ';
        elementCampoB.value = ' ';

    }else{

        alert('Tente outra vez ! o número A deve ser menor que o número B.')

    }
})