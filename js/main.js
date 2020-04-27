
function consultaCep(){

    $.ajax({
        url: "https://viacep.com.br/ws/18800390/json/",
        type: "GET",
        success: function(response){
            console.table(response);
            console.log(response.bairro);
        }
    })

}