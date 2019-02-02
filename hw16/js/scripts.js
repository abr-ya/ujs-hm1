$(document).ready(function() {
    function modalON() {
        $('.overlay').animate(
            {
                opacity: 'toggle'
            },
            2000
        );
        $('.modal').slideToggle(2000);
    }

    $('nav ul li:eq(1) a').on('click', modalON); // расисание туров
    $('.main_btna').on('click', modalON); // выбрать тур
    $('.main_btn').on('click', modalON); // получить консультацию
    $('button.close').on('click', modalON); // крестик
    $('.overlay').on('click', modalON); // затемнение
});