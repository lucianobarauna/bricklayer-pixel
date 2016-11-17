// Select 2 modal
$(function (){
    $('.select2-transp').select2({
        placeholder: "Definir",
        theme: "bootstrap"
    }).on('select2:open',function(){
        $('.select2-container').addClass('select2-container--sa');
        $('.select2-search--dropdown').addClass('select2-search--dropdown--sa');
    });

    $('.select2-transp.filtroEstado').select2({
        placeholder: "Definir estado",
        theme: "bootstrap",
    });

    $('.select2-transp.filtroEmpresa').select2({
        placeholder: "Definir empresa",
        theme: "bootstrap",
    });

    $('.select2-transp.filtroArea').select2({
        placeholder: "Definir area",
        theme: "bootstrap",
    });

    $('.select2-transp.filtroCidade').select2({
        placeholder: "Definir cidade",
        theme: "bootstrap",
    });

    // Container dos passos
    $('.passoPrbl').css({
        display: 'none',
        opacity: 0,
        left: -10,
    })

    // Botao para mostra o passo
    $('.modal__wrapcol-incidente').on('click', '.modal__wrapcol-icone', function (event) {
        event.preventDefault();
        var dataPasso = $(this).attr('data-passo'),
            $passoInci = '#' + dataPasso + 'ModalPassoInci';
        $('.modal__wrapcol-incidente').hide();
        $($passoInci).velocity({
            opacity: 1,
            left: 0
        },{
            display: 'block',
            duration: 200
        });
    });
    // Botao voltar passo
    $('.btn-voltarPassoPrbl').on('click', function (event) {
        event.preventDefault();
        $('.passoPrbl').velocity({
            opacity: 0,
            left: -10,
        },{
            display: 'none',
            duration: 200,
            complete: function () {
                $('.modal__wrapcol-incidente').show();
            }
        });
    });
});
