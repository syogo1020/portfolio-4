$(function () {
    //drawer.js
    $('.drawer').drawer()


    // #から始まるURLがクリックされた時
    jQuery('a[href^="#"]').click(function () {

        let speed = 300;
        let id = jQuery(this).attr("href");
        let target = jQuery("#" == id ? "html" : id);
        let position = jQuery(target).offset().top;
        jQuery("html, body").animate(
            {
                scrollTop: position - $('#js-header').outerHeight()
            },
            speed
        );
        return false;
    });

    //wowjs
    new WOW().init();

    //googleform

    let $form = $('#js-form')
    $form.submit(function (e) {
        $.ajax({
            url: $form.attr('action'),
            data: $form.serialize(),
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $form.slideUp()
                    $('#js-success').slideDown()
                },
                200: function () {
                    $form.slideUp()
                    $('#js-error').slideDown()
                }
            }
        });
        return false;
    });

    // formの入力
    let $submit = $('#js-submit')
    $('#js-form input, #js-form textarea').on('change', function () {
        if (
            $( '#js-form input[type="text"]' ).val() !=="" &&
            $( '#js-form input[type="email"]' ).val() !=="" &&
            $( '#js-form input[name="entry.1042112061"]' ).prop( 'checked' ) === true
        ) {
            $submit.prop( 'disabled', false )
            $submit.addClass( '-active' )
        } else {
            $submit.prop( 'disabled', false )
            $submit.removeClass( '-active' )

        }
      });

});
