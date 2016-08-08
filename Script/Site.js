/**
 * Created by Елена on 26.07.2016.
 */
$( document ).ready(function() {


    //якоря
    $('.bottom-icon').click(function(){
            //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    $('.navbar-nav a').click(function(){
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });


});