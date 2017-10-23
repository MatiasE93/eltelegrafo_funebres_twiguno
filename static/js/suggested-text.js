$(function (){
    var indice = 0;
    sugerencia = new Array();
    sugerencia[0] = "(Q.E.P.D) - Falleció en la Paz del Señor ";
    sugerencia[1] = "(Q.E.P.D) - Voló al Cielo ";
    sugerencia[2] = "(Q.E.P.D) - Durmió en el Señor ";
    sugerencia[3] = "(Q.E.P.D) - Falleció ";
    
    var str = "";
    str = $("#ad-type2 option:selected").val();
    if (str == 1){
        sugerencia2 = new Array();
        sugerencia2[0] = " participan con profundo pesar este fallecimiento y el sepelio a efectuarse ";
        sugerencia2[1] = " participan con honda pena este fallecimiento y el sepelio a efectuarse ";
        sugerencia2[2] = " participan con profundo dolor este fallecimiento y el sepelio a efectuarse ";
    } else {
        sugerencia2 = new Array();
        sugerencia2[0] = " participan con profundo pesar este fallecimiento. El sepelio fue realizado en ";
        sugerencia2[1] = " participan con honda pena este fallecimiento. El sepelio fue realizado en ";
        sugerencia2[2] = " participan con profundo dolor este fallecimiento. El sepelio fue realizado en ";
    }

    $('#sugg-1').click(function (){
        indice = Math.random()*(sugerencia.length);
        indice = Math.floor(indice);
        document.getElementById('deudos').innerHTML = sugerencia[indice];
    })

    $('#sugg-2').click(function (){
        indice = Math.random()*(sugerencia2.length);
        indice = Math.floor(indice);
        document.getElementById('deu2').innerHTML = sugerencia2[indice];
    })
})