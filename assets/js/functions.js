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

    $(".sobre a").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-3").offset().top
        }, 2000);
    });

    $(".inicio a").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-1").offset().top
        }, 2000);
    });

    $(".trab a").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-4").offset().top
        }, 2000);
    });

    $(".contato a").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-5").offset().top
        }, 2000);
    });
});

function sendMail() {
    var inputValue = document.getElementById("input-cta-2").value;
    var url = "https://api.whatsapp.com/send/?phone=5521982401165&text=Ol%C3%A1+quero+contratar"
    var urlTratada = url + ",+meu+email+é+" + inputValue + "&app_absent=0";
    if (inputValue == null || inputValue == "" || inputValue == " ") {

    } else {
        window.location.replace(urlTratada);
    }
}