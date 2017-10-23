$(function (){

    //Selects
    var ad_type = $('#ad-type'); //Tipo de aviso
    var ad_type2 = $('#ad-type2'); //Sepelio a realizarse o realizado
    var casa_velatoria = $('#casa-velatoria'); //Casa velatoria
    var cementery = $('#cementery'); //Cementerio

    //Datos
    var name = $('#name-lastname'); //Nombre y apellido
    var deudos = $('#deudos'); //Mensaje de condolencia inicial
    var parti = $('#parti'); //Participantes
    var deu2 = $('#deu2'); //Mensaje de condolencia final
    var date_death = $('#datepicker'); //Fecha fallecimiento
    var casa_address = $('#address'); //Dirección de la casa velatoria

    //Datos específicos de sepelio
    var sala = $('#sala'); //Sala velatoria
    var time_vel = $('#hora-vel'); //Hora del sepelio
    var time_cor = $('#hora-cor'); //Hora de partida del cortejo

    //Textarea donde recopilar todo el texto generado
    //var edit = $('#ad-edit');
    /*
    console.log("Reuno datos");

    var final_casa = "";
    switch (casa_velatoria.val()){
        case '0':
            break;

        case '1':
            final_casa = "Cochería San José";
            break;

        case '2':
            final_casa = "Cochería Del Norte";
            break;

        case '3':
            final_casa = "Otro";
            break;
    }
    var final_cementery = "";
    switch (cementery.val()){
        case '0':
            break;

        case '1':
            final_cementery = "Central";
            break;

        case '2':
            final_cementery = "Nuevo Paysandú";
            break;

        case '3':
            final_cementery = "Otro";
            break;
    }
    console.log("Pase switches");
        //Tipo de aviso: Sepelio
        nameLastname.onkeyup = function(){
            console.log("comienzo a escribir nombre");
            if (ad_type.val() == 1){
                console.log("Sepelio");
                if (document.getElementById('cruz').checked){
                    console.log("Es cruz");
                    document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.value + ', falleció el día ' + date_death.value + '. ' + deudos.value + ' El velatório se realizará en ' + final_casa.value + ' dirección ' + casa_address.value + ', en sala número ' + sala.value + ' a la hora ' + time_vel.value + '. El cortejo parte a la hora ' + time_cor.value + ' hacia el cementerio ' + final_cementery.value + '.';
                }
                if (document.getElementById('star').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-judia.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizará en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.';
                }
                if (document.getElementById('sin-s').checked){
                    document.getElementById('final-title').innerHTML = '<span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizará en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.';
                }
            }
        }

        deudos.onkeyup = function(){
            if (ad_type.val() == 1){
                if (document.getElementById('cruz').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizará en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.';
                }
                if (document.getElementById('star').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-judia.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizará en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.';
                }
                if (document.getElementById('sin-s').checked){
                    document.getElementById('final-title').innerHTML = '<span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizará en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.';
                }
            }
        }

        date_death.onkeyup = function(){
            if (ad_type.val() == 1){
                if (document.getElementById('cruz').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizará en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.';
                }
                if (document.getElementById('star').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-judia.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizará en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.';
                }
                if (document.getElementById('sin-s').checked){
                    document.getElementById('final-title').innerHTML = '<span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizará en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.';
                }
            }
        }

        //Tipo de aviso: Participación
        nameLastname.onkeyup = function(){
            if (ad_type.val() == 2){
                if (document.getElementById('cruz').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizó en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + '. Familiares y amigos participaron con profundo dolor.';
                }
                if (document.getElementById('star').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-judia.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizó en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + '. Familiares y amigos participaron con profundo dolor.';
                }
                if (document.getElementById('sin-s').checked){
                    document.getElementById('final-title').innerHTML = '<span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizó en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + '. Familiares y amigos participaron con profundo dolor.';
                }
            }
        }
        deudos.onkeyup = function(){
            if (ad_type.val() == 2){
                if (document.getElementById('cruz').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizó en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + '. Familiares y amigos participaron con profundo dolor.';
                }
                if (document.getElementById('star').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-judia.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizó en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + '. Familiares y amigos participaron con profundo dolor.';
                }
                if (document.getElementById('sin-s').checked){
                    document.getElementById('final-title').innerHTML = '<span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizó en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + '. Familiares y amigos participaron con profundo dolor.';
                }
            }
        }
        date_death.onkeyup = function(){
            if (ad_type.val() == 2){
                if (document.getElementById('cruz').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizó en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + '. Familiares y amigos participaron con profundo dolor.';
                }
                if (document.getElementById('star').checked){
                    document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-judia.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizó en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + '. Familiares y amigos participaron con profundo dolor.';
                }
                if (document.getElementById('sin-s').checked){
                    document.getElementById('final-title').innerHTML = '<span class="death-name" id="death-name"></span>';
                    document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                    document.getElementById('death-name').innerHTML = nameLastname.value;
                    document.getElementById('ad-complete').innerHTML = '(Q.E.P.D.) - ' + name.val() + ', falleció el día ' + date_death.val() + '. ' + deudos.val() + ' El velatório se realizó en ' + final_casa.valueOf() + ' dirección ' + casa_address.val() + '. Familiares y amigos participaron con profundo dolor.';
                }
            }
        }*/

    $('#generate').click(function (){
        var final_casa = "";
        switch (casa_velatoria.val()){
            case '1':
                final_casa = "Cochería San José";
                break;

            case '2':
                final_casa = "Cochería Del Norte";
                break;

            case '3':
                final_casa = "Otro";
                break;
        }
        var final_cementery = "";
        switch (cementery.val()){
            case '1':
                final_cementery = "Central";
                break;

            case '2':
                final_cementery = "Nuevo Paysandú";
                break;

            case '3':
                final_cementery = "Otro";
                break;
        }

        if (ad_type.val() == 1){
            document.getElementById('final-text').style.width = "300px";
        }

        if (ad_type.val() == 2){
            document.getElementById('final-text').style.width = "500px";
        }

        if (ad_type.val() == 3){
            document.getElementById('final-text').style.width = "700px";
        }

        if (ad_type2.val() == 1){ //Sepelio a realizarse
            if (document.getElementById('cruz').checked){
                document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                var deathname = $('#death-name');
                deathname.text(name.val());
                var complete = $('#ad-complete');
                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + final_casa.valueOf() + ', dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.');
            }
            if (document.getElementById('star').checked){
                document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                var deathname = $('#death-name');
                deathname.text(name.val());
                var complete = $('#ad-complete');
                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + final_casa.valueOf() + ', dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.');
            }
            if (document.getElementById('sin-s').checked){
                document.getElementById('final-title').innerHTML = '<span class="death-name" id="death-name"></span>';
                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                var deathname = $('#death-name');
                deathname.text(name.val());
                var complete = $('#ad-complete');
                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + final_casa.valueOf() + ', dirección ' + casa_address.val() + ', en sala número ' + sala.val() + ' a la hora ' + time_vel.val() + '. El cortejo parte a la hora ' + time_cor.val() + ' hacia el cementerio ' + final_cementery.valueOf() + '.');
            }
        }

        if (ad_type2.val() == 2){ //Sepelio realizado
            if (document.getElementById('cruz').checked){
                document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                var deathname = $('#death-name');
                deathname.text(name.val());
                var complete = $('#ad-complete');
                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + final_casa.valueOf() + ', dirección ' + casa_address.val() + '.');
            }
            if (document.getElementById('star').checked){
                document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                var deathname = $('#death-name');
                deathname.text(name.val());
                var complete = $('#ad-complete');
                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + final_casa.valueOf() + ', dirección ' + casa_address.val() + '.');
            }
            if (document.getElementById('sin-s').checked){
                document.getElementById('final-title').innerHTML = '<span class="death-name" id="death-name"></span>';
                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                var deathname = $('#death-name');
                deathname.text(name.val());
                var complete = $('#ad-complete');
                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + final_casa.valueOf() + ', dirección ' + casa_address.val() + '.');
            }
        }
    })
})