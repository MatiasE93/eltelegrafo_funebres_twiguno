(function (window, document) {
    $(document).ready(function(){
        $("#ad-type").change(function () {
            var str = "";
            str = $("#ad-type option:selected").val();
            if (str == 1){
                $('#sala-label').show();
                $('#sala').show();
                $('#hora-vel-label').show();
                $('#hora-vel').show();
                $('#hora-cor-label').show();
                $('#hora-cor').show();
            } else {
                $('#sala-label').hide();
                $('#sala').hide();
                $('#hora-vel-label').hide();
                $('#hora-vel').hide();
                $('#hora-cor-label').hide();
                $('#hora-cor').hide();
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
    });
}(this, this.document));