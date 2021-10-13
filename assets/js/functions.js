$(function() {

    $(function() {
        $('.submenu-mais-desktop').css('margin-top', '0px'); //definindo margem do topo do submenu
        $('.submenu-mais-desktop').css("position", "fixed"); //definindo posição fixa

        dropDownMais.hide(); // escondendo o submenu como padrão
        botaomais.css('color', '#606266');

        //evento de clique
        botaomais.on('hover', function(event) {
            //show e hide ao clicar no <a>
            dropDownAvatar.hide();
            dropDownMais.stop(true, true).slideToggle(0);
            botaomais.css('color', '#296fb1');
            event.stopPropagation();

            //show e hide ao clicar fora do submenu
            $('body').click(function() {
                dropDownMais.hide();
                botaomais.css('color', '#606266');
            });

            if (!$(e.target).is(".submenu-mais-desktop")) {
                dropDownMais.hide();
                botaomais.css('color', '#606266');
            }
        });
    });



    $('.trab-1').on('hover', function(event) {
        $(".trab-2").animate({
            height: "200px"
        }, 500);
    });
});