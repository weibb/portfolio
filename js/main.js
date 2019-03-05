// $(window).scroll(
//     {
//         previousTop: 0
//     },
//     function move_box() {
//     var row1 = $( window ).scrollTop();
//     if (row1.classList.contains("translator")) {
//         row1.addClass("translator");
//     } else {
//         row1.removeClass("translator");
//     }
//     });



$(window).ready( function move_box(){
    const row1 = document.getElementById("row1");
    const row3 = document.getElementById("row3");

    if (row1.classList.contains("translator")) {
        $( '#row1' ).removeClass( "translator" );
    } else {
        $( '#row1' ).addClass( "translator" );
    }
    if (row3.classList.contains("translator2")) {
        $( '#row3' ).removeClass( "translator2" );
    } else {
        $( '#row3' ).addClass( "translator2" );
    }
});


/** TITLE COLOR CHANGE **/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".title-text").addClass("title_w");
    } else {
        $(".title-text").removeClass("title_w");
    }
});

// $(window).scroll(function() {
// 	var height = $(this).scrollTop();
//     var turn = $('#section2').offset().top - 500;
// 	var title = $('.title-text');
//
//     if( height > turn) {
// 		title.addClass('title_w');
// 	} else {
// 		title.removeClass('title_w');
// 	}
// });


/** Toggle Contact **/

$('.contact').click(function () {
    $('#contact').slideToggle(500);
    $('#contact').css("display", "flex");
});

$('.info').click(function () {
    $('#info').slideToggle(500);
    $('#info').css("display", "flex");
});
