$(function (){
    //Selects
    var ad_type = $('#ad-type'); //Tipo de aviso
    //var ad_type2 = $('#ad-type2'); //Sepelio a realizarse o realizado

    //Datos
    var name = $('#name-lastname'); //Nombre y apellido
    var nick = $('#nickname'); //Apodo
    var deudos = $('#deudos'); //Mensaje de condolencia inicial
    var parti = $('#parti'); //Participantes
    var deu2 = $('#deu2'); //Mensaje de condolencia final
    var sepel = $('#sepel'); //Datos especificos del sepelio
    var date_death = $('#datepicker'); //Fecha fallecimiento

    $('#generate').click(function (){
        var totChar;
        var adt1Int = parseInt(ad_type.val());
        if (adt1Int > 1){
            if (adt1Int == 400){
                totChar = 400;
            }

            if (adt1Int == 520){
                totChar = 520;
            }

            if (adt1Int == 630){
                totChar = 630;
            }
            var totalCont = parseInt($('#name-lastname').val().length)+parseInt($('#deudos').val().length)+parseInt($('#parti').val().length)+parseInt($('#deu2').val().length)+parseInt($('#sepel').val().length);
            var total = parseInt(totChar.valueOf())-parseInt(totalCont.valueOf());
            $('#total-Char').html(total.valueOf());
            if (date_death.val() == "" || name.val() == "" || deudos.val() == "" || parti.val() == "" || deu2.val() == "" || sepel.val() == ""){
                new Noty({
                        type: 'error',
                        layout: 'topRight',
                        theme: 'mint',
                        text: 'Ingrese los datos correspondientes en cada campo resaltado en rojo',
                        timeout: 5000,
                        progressBar: true,
                        closeWith: ['click', 'button'],
                        animation: {
                        open: 'noty_effects_open',
                        close: 'noty_effects_close'
                        },
                }).show();
                if (date_death.val() == ""){
                    document.getElementById('datepicker').style.border = "solid 2px red";
                }

                if (name.val() == ""){
                    document.getElementById('name-lastname').style.border = "solid 2px red";
                }

                if (deudos.val() == ""){
                    document.getElementById('deudos').style.border = "solid 2px red";
                }

                if (deu2.val() == ""){
                    document.getElementById('deu2').style.border = "solid 2px red";
                }

                if (parti.val() == ""){
                    document.getElementById('parti').style.border = "solid 2px red";
                }

                if (sepel.val() == ""){
                    document.getElementById('sepel').style.border = "solid 2px red";
                }
            } else {
                if (total.valueOf() > 0){
                    if (window.screen.width > 1024){
                        if (ad_type.val() == 400){
                            document.getElementById('final-text').style.width = "300px";
                        }

                        if (ad_type.val() == 520){
                            document.getElementById('final-text').style.width = "500px";
                        }

                        if (ad_type.val() == 630){
                            document.getElementById('final-text').style.width = "700px";
                        }
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            if (ad_type.val() == 400){
                                document.getElementById('final-text').style.width = "300px";
                            }

                            if (ad_type.val() == 520){
                                document.getElementById('final-text').style.width = "400px";
                            }

                            if (ad_type.val() == 630){
                                document.getElementById('final-text').style.width = "500px";
                            }
                        } else {
                            if (ad_type.val() == 400){
                                document.getElementById('final-text').style.width = "250px";
                            }

                            if (ad_type.val() == 520){
                                document.getElementById('final-text').style.width = "250px";
                            }

                            if (ad_type.val() == 630){
                                document.getElementById('final-text').style.width = "250px";
                            }
                        }
                    }

                    if (document.getElementById('cruz').checked){
                        document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                        document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                        var deathname = $('#death-name');
                        if (nick.val() != ""){
                            deathname.text(name.val()+' ('+nick.val()+')');
                        } else {
                            deathname.text(name.val());
                        }
                        var complete = $('#ad-complete');
                        complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + ' ' + deu2.val() + sepel.val() + '.');
                    }

                    if (document.getElementById('star').checked){
                        document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                        document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                        var deathname = $('#death-name');
                        if (nick.val() != ""){
                            deathname.text(name.val()+' ('+nick.val()+')');
                        } else {
                            deathname.text(name.val());
                        }
                        var complete = $('#ad-complete');
                        complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + ' ' + deu2.val() + sepel.val() + '.');
                    }
                        
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('final-title').innerHTML = '<span class="death-name-sin" id="death-name"></span>';
                        document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                        var deathname = $('#death-name');
                        if (nick.val() != ""){
                            deathname.text(name.val()+' ('+nick.val()+')');
                        } else {
                            deathname.text(name.val());
                        }
                        var complete = $('#ad-complete');
                        complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + ' ' + deu2.val() + sepel.val() + '.');
                    }

                    document.getElementById('total-Char').style.color = "black";
                } else {
                    new Noty({
                            type: 'error',
                            layout: 'topRight',
                            theme: 'mint',
                            text: 'La cantidad de caracteres excede el permitido',
                            timeout: 5000,
                            progressBar: true,
                            closeWith: ['click', 'button'],
                            animation: {
                            open: 'noty_effects_open',
                            close: 'noty_effects_close'
                            },
                    }).show();
                    document.getElementById('total-Char').style.color = "red";
                }
            }
        } else {
            new Noty({
                        type: 'error',
                        layout: 'topRight',
                        theme: 'mint',
                        text: 'Seleccione tipo de aviso',
                        timeout: 5000,
                        progressBar: true,
                        closeWith: ['click', 'button'],
                        animation: {
                        open: 'noty_effects_open',
                        close: 'noty_effects_close'
                        },
                }).show();
                document.getElementById('ad-type-avi').style.color = "red";
        }
    });
});