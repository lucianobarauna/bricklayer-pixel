/*!
 * Scripts Solucao Aqui
 * Desenvolvido por fattoriaweb em: 21/10/2016
 */
$(function () {
    // Menu
    $('.btn-menu').click(function(e){
        console.log('adijaoda');
        e.preventDefault();
        $('.wrap-menu').addClass('aberto');
    });
    $('.btn-fechar-menu').click(function(e){
        e.preventDefault();
        $('.wrap-menu').removeClass('aberto');
    });
    // Tooltip padrao
    $('[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip tooltip-sa" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });
    // Scroll barra lateral auto
    $(document).ready(function (){
        var $alturaPagina = $(window).height();
        var $larguraPagina = $(window).width();
        if($larguraPagina > 1100){
            $('.timeline--sa').height($alturaPagina)
                              .css("padding-bottom", function(index){
                                  var $alturaDl = $(this).height();
                                  index = ($alturaDl - $alturaPagina) + 250;
                                  return index;
                              });
        }
    });

    // Modal finalizar atendimento
    $('#modal-incidentefinal').modal('show');
    // Modal nao aceitar finalizacao
    $('.btn-naofinalizar-ativar').click(function(e){
      e.preventDefault;
      $('.form-naofinalizar').fadeIn();
      $('.modal-box-btn-controles').hide();
    });
    // Modal de avaliacao
    $('.btn-avaliacao-iniciar').click(function(e){
      e.preventDefault;
      $('.modal-incidentefinal-atendente-aval').fadeIn();
      $('.modal-incidentefinal-atendente').hide();
    });

    $('#modal-incidentefinal').on('hide.bs.modal', function() {
      $('.form-naofinalizar').fadeOut(800);
      $('.modal-box-btn-controles').fadeIn(800);
      $('.modal-incidentefinal-atendente').fadeIn(800);
      $('.modal-incidentefinal-atendente-aval').fadeOut(800);
    })

    // Modais de exclusao em massa
    $('#modalDeletar').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('whatever')
        var modal = $(this)

        if (recipient === 'remover-empresas') {
            modal.find('.modal-change').text('Tem certeza que deseja remover todas as empresas?');
        } else if(recipient === 'remover-incidentes') {
            modal.find('.modal-change').text('Tem certeza que deseja remover todos os incidentes?');
        } else if(recipient === 'remover-logradouro'){
            modal.find('.modal-change').text('Tem certeza que deseja remover todos os logradouros?');
        }
    });
    $('.btn-remover-funcionario').on('click', function(event){
        event.preventDefault();
        $(this).closest('li').fadeOut();
    });
});
