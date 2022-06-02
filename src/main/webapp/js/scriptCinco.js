jQuery(function () {
    $(document).ready(() => {
        $('.error').hide();

        $('#frmRegistro').submit(function(evento) {
            evento.preventDefault();
            $('.error').hide();

            let email = $('#email').val().trim();

            if (!email.length) {
                $('#obligatorio').show();
                return;

            }

            let clave = $('#clave').val();
            if (!clave.length) {
                $('#obligatorio').show();
                return;
            }

            let claveRepetir = $('#claveRepetir').val();
            if (!claveRepetir.length) {
                $('#obligatorio').show();
                return;
            }

            if (clave !== claveRepetir) {
                $('#clavesNoIguales').show();
                return;
            }

            $('#resultado').text('El registro se realizó de forma satisfactoría.');
        })
    })
})

