$(function($)  {


    //MODALNOE

    var $form_modal = $('.modal'),
        $form_login = $form_modal.find('#cd-login'),
        $form_forgot_password = $form_modal.find('#cd-reset-password'),
        $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
        $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
        $main_nav = $('.log-in ');

    //������� ��������� ����
    $main_nav.on('click', function(event){

        if( $(event.target).is($main_nav) ) {
            // ������� �� ��������� �������
            $(this).children('a').toggleClass('is-visible');
        } else {
            // ������� ������� �� ���������
            $main_nav.children('a').removeClass('is-visible');
            //�������� ��������� ����
            $form_modal.addClass('is-visible');
            //�������� ��������� �����
            ( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
        }

    });


    //������� ��������� ����
    $form_modal.on('click', function(event){
        if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
            $form_modal.removeClass('is-visible');
        }
    });
    //������� ��������� ���� ������� ������� Esc
    $(document).keyup(function(event){
        if(event.which=='27'){
            $form_modal.removeClass('is-visible');
        }
    });




    //�������� ����� ������������� ������
    $forgot_password_link.on('click', function(event){
        event.preventDefault();
        forgot_password_selected();
    });
    //��������� �� �������� ����� � ����� ������������� ������
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
