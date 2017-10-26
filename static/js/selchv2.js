(function (window, document) {
    $(document).ready(function(){
        $('input[name="rel"]').on('change', function(){
            var str = "";
            str = $("#ad-type option:selected").val();
            switch (str){
                case '0':
                    break;

                case '1':
                    document.getElementById('preview-text').style.width = "300px";
                    var changeTot = $('#total-Char');
                    changeTot.text('400');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u.');
                    }
                    $('#noseen').val('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u.');
                    break;

                case '2':
                    document.getElementById('preview-text').style.width = "500px";
                    var changeTot = $('#total-Char');
                    changeTot.text('520');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv.');
                    }
                    $('#noseen').val('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv.');
                    break;

                case '3':
                    document.getElementById('preview-text').style.width = "700px";
                    var changeTot = $('#total-Char');
                    changeTot.text('630');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.');
                    }
                    $('#noseen').val('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.');
                    break;
            }
        });

        $("#ad-type").change(function () {
            var str = "";
            str = $("#ad-type option:selected").val();
            switch (str){
                case '0':
                    break;

                case '1':
                    document.getElementById('preview-text').style.width = "300px";
                    var changeTot = $('#total-Char');
                    changeTot.text('400');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u.');
                    }
                    $('#noseen').val('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u.');
                    break;

                case '2':
                    document.getElementById('preview-text').style.width = "500px";
                    var changeTot = $('#total-Char');
                    changeTot.text('520');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv.');
                    }
                    $('#noseen').val('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Viv.');
                    break;

                case '3':
                    document.getElementById('preview-text').style.width = "700px";
                    var changeTot = $('#total-Char');
                    changeTot.text('630');
                    if (document.getElementById('cruz').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/cruz.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.');
                    }
                    if (document.getElementById('star').checked){
                        document.getElementById('preview-text').innerHTML = '<img src="public/media/estrella-de-david.png" class="symbol-rel-prev"><span class="name-title-con">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.');
                    }
                    if (document.getElementById('sin-s').checked){
                        document.getElementById('preview-text').innerHTML = '<br><span class="name-title-sin">Nombre Apellido</span><p id="lorem-ipsum-preview"></p>';
                        var prev = $('#lorem-ipsum-preview');
                        prev.text('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.');
                    }
                    $('#noseen').val('(Q.E.P.D.) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.');
                    break;
            }
            document.getElementById('ad-type-avi').style.color = "black";
        }).change();

        $("#ad-type2").change(function () {
            var str = "";
            str = $("#ad-type2 option:selected").val();
            if (str == 1){
                $('#sala-label').show();
                $('#sala').show();
                $('#hora-vel-label').show();
                $('#hora-vel').show();
                $('#hora-cor-label').show();
                $('#hora-cor').show();
                document.getElementById('ad-type-sep').style.color = "black";
            } else {
                $('#sala-label').hide();
                $('#sala').hide();
                $('#hora-vel-label').hide();
                $('#hora-vel').hide();
                $('#hora-cor-label').hide();
                $('#hora-cor').hide();
                document.getElementById('ad-type-sep').style.color = "black";
            }
        }).change();

        $("#casa-velatoria").change(function () {
            var str = "";
            str = $("#casa-velatoria option:selected").val();
            switch (str){
                case '0':
                    break;

                case '1':
                    $('#address').val("Jose Pedro Varela 749");
                    break;

                case '2':
                    $('#address').val("Guayabos 979");
                    break;

                case '3':
                    $('#address').val("Otro");
                    break;
            }
        }).change();

        $("#datepicker").on('click', function(){
            document.getElementById('datepicker').style.border = "2px solid #C8C7C7";
        });
    });
}(this, this.document));