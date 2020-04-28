
function consultaCep(){

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    //console.log(cep);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.table(response);
           // console.log(response.bairro);

           //$("#logradouro").html(response.logradouro);
           //document.getElementById("bairro").innerHTML = response.bairro;
           //document.getElementById("localidade").innerHTML = response.localidade;
           //document.getElementById("uf").innerHTML = response.uf;

        }
    })

}