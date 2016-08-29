$(function($)  {


    //MODALNOE

    var $form_modal = $('.modal'),
        $form_login = $form_modal.find('#cd-login'),
        $form_forgot_password = $form_modal.find('#cd-reset-password'),
        $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
        $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
        $main_nav = $('.log-in ');

    //открыть модальное окно
    $main_nav.on('click', function(event){

        if( $(event.target).is($main_nav) ) {
            // открыть на мобильных подменю
            $(this).children('a').toggleClass('is-visible');
        } else {
            // закрыть подменю на мобильных
            $main_nav.children('a').removeClass('is-visible');
            //показать модальный слой
            $form_modal.addClass('is-visible');
            //показать выбранную форму
            ( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
        }

    });


    //закрыть модальное окно
    $form_modal.on('click', function(event){
        if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
            $form_modal.removeClass('is-visible');
        }
    });
    //закрыть модальное окно нажатье клавиши Esc
    $(document).keyup(function(event){
        if(event.which=='27'){
            $form_modal.removeClass('is-visible');
        }
    });




    //показать форму востановления пароля
    $forgot_password_link.on('click', function(event){
        event.preventDefault();
        forgot_password_selected();
    });
    //Вернуться на страницу входа с формы востановления пароля
    $back_to_login_link.on('click', function(event){
        event.preventDefault();
        login_selected();
    });
    function login_selected(){
        $form_login.addClass('is-selected');
        $form_forgot_password.removeClass('is-selected');
    }
    function forgot_password_selected(){
        $form_login.removeClass('is-selected');
        $form_forgot_password.addClass('is-selected');
    }

//MODALNOE









});
