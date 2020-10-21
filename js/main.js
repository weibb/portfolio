
/** FRONT ANIMATION **/

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

/** NAME TOGGLE **/
$('.name').hover(function () {
    $('#name').toggle();
    $('#namehover').toggle();
});


/** TITLE COLOR CHANGE **/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $('.title-text').addClass('title_w');
    } else {
        $('.title-text').removeClass('title_w');
    }
});
