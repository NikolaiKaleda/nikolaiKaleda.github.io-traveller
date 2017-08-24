$(document).ready(function () {


    //ADD LETTER TO BACKGROUND (Content text section)

    var backgroundLetter = $('.contentSectionText').text();
    $('.backgroundLetter').text(backgroundLetter.charAt(0));

    //End add letter to background


    

});
//ADD CLASS TO BUTTONS ( Calendar section )

    /*function addClassSizeScreen() {
        console.log($(window).width());
        if ($(window).width() <= '900' ) {
            $('.ui-corner-all .ui-icon .fa').addClass('fa-5x');
            console.log('agaewgaeaegaeg');
        }else {
            $('.ui-corner-all .ui-icon .fa').removeClass('fa-5x');
        }
    }
    
    $(window).load(addClassSizeScreen);
    $(window).resize(addClassSizeScreen);
*/
    //End add class to buttons 