var apiLink = "https://pokeapi.co/api/v2/pokemon/";

var doAjax = function (url) {

    var val = $('#pokesearch').val();

    apiLink += val;

    $.ajax({

        url: apiLink,

        dataType: "json"
    }).done(function loopOverJSON(obj) {
        console.log("take 1 " + obj);
        //result = JSON.parse(result);
        //$("#tekst").html(result);

        //elementen geven
        $('#tekst').text('');
        for (var key in obj) {
            if (typeof obj[key] !== "object") {
                console.log(key + " = " + obj[key]);
                $('#Pokemons').append('<p>' + obj[key] + '<p>');
            } else {
                loopOverJSON(obj[key]);
            }
        }
    });

};




$(document).ready(function () {
    $('#pokesearch').on('click', doAjax);

});
