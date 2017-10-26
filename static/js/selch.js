(function (window, document) {
    $(document).ready(function(){
        $('input[name="rel"]').on('change', function(){
            var str = "";
            str = $("#ad-type option:selected").val();
            switch (str){
                case '0':
                    break;

                case '1':
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "300px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "300px";
                        } else {
                            document.getElementById('preview-text').style.width = "250px";
                        }
                    }
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
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "500px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "400px";
                        } else {
                            document.getElementById('preview-text').style.width = "250px";
                        }
                    }
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
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "700px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "500px";
                        } else {
                            document.getElementById('preview-text').style.width = "250px";
                        }
                    }
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
                    if (window.screen.width > 1024){
                        document.getElementById('preview-text').style.width = "500px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            document.getElementById('preview-text').style.width = "450px";
                        } else {
                            document.getElementById('preview-text').style.width = "400px";
                        }
                    }
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
                    if (window.screen.width > 1024){
                        console.log("Mayor que 1024");
                        document.getElementById('preview-text').style.width = "700px";
                    } else {
                        if (window.screen.width <= 1024 && window.screen.width >= 768){
                            console.log("Igual que 1024");
                            document.getElementById('preview-text').style.width = "600px";
                        } else {
                            console.log("Menor que 1024");
                            document.getElementById('preview-text').style.width = "500px";
                        }
                    }
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
            document.getElementById('ad-type-sep').style.color = "black";
        }).change();

        $("#datepicker").on('click', function(){
            document.getElementById('datepicker').style.border = "2px solid #C8C7C7";
        });
    });
}(this, this.document));