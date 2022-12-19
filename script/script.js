$(function () {



    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.navbar-header .main-nav').slideToggle();
    });

    $(window).on('load resize', function () {
        var w = $(window).width();
        var h = $(window).height();
        var x = 700;
        if (w >= x) {
            $('.navbar-header .main-nav').css({display: 'flex', height: 'auto'});
        } else {
            $('.navbar-header .main-nav').css({display: 'none', height: 'auto'});
        }
    });
//************script section portfolio********

    $('.toggles button').click(function () { /*обратимся к класу и отслеживаем событие click*/
        var get_id=this.id;/*переменная  отслеживаем идентификатор и сохраняем в переменную*/
        var get_current=$('.posts .'+ get_id);/*определяем текущий пост с идентификатором */

        $('.post').not(get_current).hide(500); /*скрываем элементы которые не нужны( все что не попали в переменную мы их скрываем методом hide с анимацией 500 мс*/
        get_current.show(500); /*показываем выбранные элементы*/
    });
    $('#showall').click(function () {
        $('.post').show(500); /*показывать блок с класом post показывать весь */
    });
});

/****Scroll To Top Button***/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";

    } else {
        document.getElementById("myBtn").style.display = "none";

    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
