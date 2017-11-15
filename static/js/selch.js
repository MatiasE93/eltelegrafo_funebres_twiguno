(function (window, document) {
    $(document).ready(function(){
        $('input[name="rel"]').on('change', function(){
            var str = "";
            str = $("#ad-type option:selected").val();
            switch (str){
                case '0':
                    break;

                case '400':
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "300px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "300px";
                        } else {
                            document.getElementById('preview-text').style.width = "300px";
                        }
                    }
                    var changeTot = $('#total-Char');
                    changeTot.text('400');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    break;

                case '520':
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "500px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "400px";
                        } else {
                            document.getElementById('preview-text').style.width = "400px";
                        }
                    }
                    var changeTot = $('#total-Char');
                    changeTot.text('520');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    break;

                case '630':
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "700px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "500px";
                        } else {
                            document.getElementById('preview-text').style.width = "500px";
                        }
                    }
                    var changeTot = $('#total-Char');
                    changeTot.text('630');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    break;
            }
        });

        $("#ad-type").change(function () {
            var str = "";
            str = $("#ad-type option:selected").val();
            switch (str){
                case '0':
                    break;

                case '400':
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "300px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "300px";
                        } else {
                            document.getElementById('preview-text').style.width = "300px";
                        }
                    }
                    var changeTot = $('#total-Char');
                    changeTot.text('400');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    $('#total-Price').text('$600');
                    break;

                case '520':
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "500px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "400px";
                        } else {
                            document.getElementById('preview-text').style.width = "400px";
                        }
                    }
                    var changeTot = $('#total-Char');
                    changeTot.text('520');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    $('#total-Price').text('$1500');
                    break;

                case '630':
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "700px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "500px";
                        } else {
                            document.getElementById('preview-text').style.width = "500px";
                        }
                    }
                    var changeTot = $('#total-Char');
                    changeTot.text('630');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con"> NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">NOMBRE NOMBRE APELLIDO APELLIDO (APODO)</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D) Falleció en la Paz del Señor ayer viernes 7 de mayo de 2016. Sus hijos: Carlos, Ana, Pedro, nietos y bisnietos y demás deudos participan con profundo dolor este fallecimiento y el sepelio efectuado en el Cementerio Central.');
                    }
                    $('#total-Price').text('$3500');
                    break;
            }
            document.getElementById('ad-type-avi').style.color = "black";
        }).change();

        $("#ad-type2").change(function () {
            document.getElementById('ad-type-sep').style.color = "black";
        }).change();

        $("#datepicker").on('click', function(){
            document.getElementById('datepicker').style.border = "2px solid #C8C7C7";
        });

        $("#name-lastname").on('click', function(){
            document.getElementById('name-lastname').style.border = "2px solid #C8C7C7";
        });

        $("#sugg-1").on('click', function(){
            document.getElementById('deudos').style.border = "2px solid #C8C7C7";
        });

        $("#deudos").on('click', function(){
            document.getElementById('deudos').style.border = "2px solid #C8C7C7";
        });

        $("#parti").on('click', function(){
            document.getElementById('parti').style.border = "2px solid #C8C7C7";
        });

        $("#sugg-2").on('click', function(){
            document.getElementById('deu2').style.border = "2px solid #C8C7C7";
        });

        $("#deu2").on('click', function(){
            document.getElementById('deu2').style.border = "2px solid #C8C7C7";
        });

        $("#sepel").on('click', function(){
            document.getElementById('sepel').style.border = "2px solid #C8C7C7";
        });

        $('#reset-form').on('click', function(){
            document.getElementById('death-form').reset();
            document.getElementById('deudos').value = "";
            document.getElementById('deu2').value = "";
        });
    });
}(this, this.document));