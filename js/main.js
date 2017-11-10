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
$(window).scroll( function(){
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
