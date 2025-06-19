$(document).ready(function () {
    
    alert("Carregou!")

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#endereco").val("");
        $("#endereco").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }

    // Aciona a animação de busca
    function tagReload(){

        $("#bnt-busca-cep").find('svg').addClass('d-none')
        $("#bnt-busca-cep").find('span').removeClass('d-none')
    }

    // Aciona a lupa de busca
    function tagFind(){

        $("#bnt-busca-cep").find('svg').removeClass('d-none')
        $("#bnt-busca-cep").find('span').addClass('d-none')
    }

    // JQ Masks
    $("#cep").mask('00000-000')
    
    $("#bnt-busca-cep").on('click', function (e) {
        
        e.preventDefault()

        tagReload()

        var cep = $("#cep").val()


        console.log(cep)

        console.log('Clicou')


        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{5}-[0-9]{3}$/;
            console.log(validacep)

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#endereco").val("...");
                $("#endereco").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        console.log(dados.logradouro + ", " + dados.bairro + ", " + dados.localidade + "- " + dados.uf);
                        $("#endereco").val(dados.logradouro + ", " + dados.bairro + ", " + dados.localidade + " - " + dados.uf);
                        tagFind()
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                        tagFind()
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Digite um Formato de CEP válido. (00000-000)");
                tagFind()
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            alert("Informe um CEP")
            limpa_formulário_cep();
        }

    })

    $("#enviar").on("click", function(e){
        e.preventDefault()
        alert("Enviado!")
    })

});