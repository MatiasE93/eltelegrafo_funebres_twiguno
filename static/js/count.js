$(document).ready(function() {
    $('#generate').click(function (){
        var totChar = $('#noseen').val().length;
        //console.log('Caracteres total permitidos: '+totChar);
        var totalCont = parseInt($('#name-lastname').val().length)+parseInt($('#deudos').val().length)+parseInt($('#parti').val().length)+parseInt($('#deu2').val().length);
        //console.log('Caracteres en datos: '+totalCont);
        var total = parseInt(totChar.valueOf())-parseInt(totalCont.valueOf());
        $('#total-Char').html(total.valueOf())
    });
});