$( document ).ready(function() {


    $('.one .first-line').delay(200).animate({left: "0", opacity: "1"}, 600);
    $('.one .down-block-left').delay(600).animate({left: "0", opacity: "1"}, 600);
    $('.one .form-block').delay(600).animate({left: "0", opacity: "1"}, 600);


    $('.adv1').animate({opacity: "1"}, 350);
    $('.adv2').delay(200).animate({opacity: "1"}, 350);
    $('.adv3').delay(400).animate({opacity: "1"}, 350);
    $('.adv4').delay(600).animate({opacity: "1"}, 350);
    $('.adv5').delay(800).animate({opacity: "1"}, 350);
    $('.adv6').delay(1000).animate({opacity: "1"}, 350);


    $(window).scroll(function () {
        win = $(window).scrollTop();
        wh = $(window).height();


        fo = $('.four').offset();
        fo_t = fo.top - 0.8 * wh;
        if (fo_t < win) {

            $('.list-block').delay(100).animate({opacity: "1"}, 250);
            $('.tovar-first-line').delay(200).animate({opacity: "1"}, 250);
            $('.u1').delay(300).animate({opacity: "1"}, 250);
            $('.u2').delay(400).animate({opacity: "1"}, 250);
            $('.u3').delay(500).animate({opacity: "1"}, 250);
            $('.u4').delay(550).animate({opacity: "1"}, 250);
            $('.u5').delay(600).animate({opacity: "1"}, 250);
            $('.u6').delay(650).animate({opacity: "1"}, 250);
            $('.u7').delay(700).animate({opacity: "1"}, 250);
            $('.u8').delay(750).animate({opacity: "1"}, 250);
            $('.u9').delay(800).animate({opacity: "1"}, 250);
            $('.u10').delay(850).animate({opacity: "1"}, 250);
            $('.u11').delay(900).animate({opacity: "1"}, 250);
            $('.u12').delay(950).animate({opacity: "1"}, 250);
        }


        sx = $('.six').offset();
        sx_t = sx.top - 1.1 * wh;
        if (sx_t < win) {
            $('.stp1').animate({opacity: "1"}, 300);
            $('.stp2').delay(200).animate({opacity: "1"}, 250);
            $('.stp3').delay(400).animate({opacity: "1"}, 250);
            $('.stp4').delay(600).animate({opacity: "1"}, 250);
            $('.stp5').delay(800).animate({opacity: "1"}, 250);
            $('.stp6').delay(1000).animate({opacity: "1"}, 250);
            $('.stp7').delay(1200).animate({opacity: "1"}, 250);

        }

        sv = $('.seven').offset();
        sv_t = sv.top - 0.8 * wh;
        if (sv_t < win) {
            $('.section').animate({opacity: "1"}, 600);

        }

        et = $('.eight').offset();
        et_t = et.top - 0.8 * wh;
        if (et_t < win) {
            $('.wrapper_tabs').animate({opacity: "1"}, 500);

        }

        n = $('.nine').offset();
        n_t = n.top - 0.9 * wh;
        if (n_t < win) {
            $i = 0;
            $('.comment-list .comment').each(function () {
                $(this).delay($i).animate({right: "0", opacity: "1"}, 400);
                $i = $i + 150;
            });
            $('.nine .more').delay(1200).animate({opacity: 1}, 400);
        }

        tn = $('.ten').offset();
        tn_t = tn.top - 1.3 * wh;
        if (tn_t < win) {
            $('.cooperation').each(function () {
                $(this).delay($i).animate({opacity: "1"}, 200);
                $i = $i + 100;
            });
            $('.textCooperation').animate({opacity: "1"}, 600);

        }


    });


});