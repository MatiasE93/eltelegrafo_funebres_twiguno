$(function (){
    //Selects
    var ad_type = $('#ad-type'); //Tipo de aviso
    var ad_type2 = $('#ad-type2'); //Sepelio a realizarse o realizado

    //Datos
    var name = $('#name-lastname'); //Nombre y apellido
    var deudos = $('#deudos'); //Mensaje de condolencia inicial
    var parti = $('#parti'); //Participantes
    var deu2 = $('#deu2'); //Mensaje de condolencia final
    var sepel = $('#sepel'); //Datos especificos del sepelio
    var date_death = $('#datepicker'); //Fecha fallecimiento

    $('#generate').click(function (){
        adt2Int = parseInt(ad_type2.val());
        adt1Int = parseInt(ad_type.val());
        var totChar = $('#noseen').val().length;
        //console.log('Caracteres total permitidos: '+totChar);
        var totalCont = parseInt($('#name-lastname').val().length)+parseInt($('#deudos').val().length)+parseInt($('#parti').val().length)+parseInt($('#deu2').val().length)+parseInt($('#sepel').val().length);
        //console.log('Caracteres en datos: '+totalCont);
        var total = parseInt(totChar.valueOf())-parseInt(totalCont.valueOf());
        $('#total-Char').html(total.valueOf())
        if (adt1Int >= 1){
            if (adt2Int >= 1){
                if (date_death.val() != ""){
                    if (total.valueOf() > 0){
                        if (window.screen.width > 1024){
                            if (ad_type.val() == 1){
                                document.getElementById('final-text').style.width = "300px";
                            }

                            if (ad_type.val() == 2){
                                document.getElementById('final-text').style.width = "500px";
                            }

                            if (ad_type.val() == 3){
                                document.getElementById('final-text').style.width = "700px";
                            }
                        } else {
                            if (window.screen.width <= 1024 && window.screen.width >= 768){
                                if (ad_type.val() == 1){
                                    document.getElementById('final-text').style.width = "300px";
                                }

                                if (ad_type.val() == 2){
                                    document.getElementById('final-text').style.width = "400px";
                                }

                                if (ad_type.val() == 3){
                                    document.getElementById('final-text').style.width = "500px";
                                }
                            } else {
                                if (ad_type.val() == 1){
                                    document.getElementById('final-text').style.width = "250px";
                                }

                                if (ad_type.val() == 2){
                                    document.getElementById('final-text').style.width = "250px";
                                }

                                if (ad_type.val() == 3){
                                    document.getElementById('final-text').style.width = "250px";
                                }
                            }
                        }

                        if (ad_type2.val() == 1){ //Sepelio a realizarse
                            if (document.getElementById('cruz').checked){
                                document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                                var deathname = $('#death-name');
                                deathname.text(name.val());
                                var complete = $('#ad-complete');
                                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + sepel.val() + '.');
                            }
                            if (document.getElementById('star').checked){
                                document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                                var deathname = $('#death-name');
                                deathname.text(name.val());
                                var complete = $('#ad-complete');
                                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + sepel.val() + '.');
                            }
                            if (document.getElementById('sin-s').checked){
                                document.getElementById('final-title').innerHTML = '<span class="death-name" id="death-name"></span>';
                                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                                var deathname = $('#death-name');
                                deathname.text(name.val());
                                var complete = $('#ad-complete');
                                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + sepel.val() + '.');
                            }
                        }

                        if (ad_type2.val() == 2){ //Sepelio realizado
                            if (document.getElementById('cruz').checked){
                                document.getElementById('final-title').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                                var deathname = $('#death-name');
                                deathname.text(name.val());
                                var complete = $('#ad-complete');
                                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + sepel.val() + '.');
                            }
                            if (document.getElementById('star').checked){
                                document.getElementById('final-title').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-final"><span class="death-name" id="death-name"></span>';
                                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                                var deathname = $('#death-name');
                                deathname.text(name.val());
                                var complete = $('#ad-complete');
                                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + sepel.val() + '.');
                            }
                            if (document.getElementById('sin-s').checked){
                                document.getElementById('final-title').innerHTML = '<span class="death-name-sin" id="death-name"></span>';
                                document.getElementById('final-content').innerHTML = '<p id="ad-complete"></p>';
                                var deathname = $('#death-name');
                                deathname.text(name.val());
                                var complete = $('#ad-complete');
                                complete.text(deudos.val() + 'el día ' + date_death.val() + '. ' + parti.val() + deu2.val() + sepel.val() + '.');
                            }
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
                        }).show()
                        document.getElementById('total-Char').style.color = "red";
                    }
                } else {
                    new Noty({
                            type: 'error',
                            layout: 'topRight',
                            theme: 'mint',
                            text: 'Ingrese fecha de deceso',
                            timeout: 5000,
                            progressBar: true,
                            closeWith: ['click', 'button'],
                            animation: {
                            open: 'noty_effects_open',
                            close: 'noty_effects_close'
                            },
                    }).show()
                    document.getElementById('datepicker').style.border = "solid 2px red";
                }
            } else {
                new Noty({
                        type: 'error',
                        layout: 'topRight',
                        theme: 'mint',
                        text: 'Seleccione si el sepelio fue realizado o no',
                        timeout: 5000,
                        progressBar: true,
                        closeWith: ['click', 'button'],
                        animation: {
                        open: 'noty_effects_open',
                        close: 'noty_effects_close'
                        },
                }).show()
                document.getElementById('ad-type-sep').style.color = "red";
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
                }).show()
                document.getElementById('ad-type-avi').style.color = "red";
        }
    });
});