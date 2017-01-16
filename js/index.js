
$(function() {
    // Start showing the divs
    showDiv();
    urlHover();
});

function showDiv() {
    // If there are hidden divs left
    if($('div:hidden').length) {
        // Fade the first of them in
        $('div:hidden:first').fadeIn(500,showDiv);
        // And wait one second before fading in the next one
        //setTimeout(showDiv, 200);
    }
}
function urlHover(){
    $('a').hover(
        function(){
        $(this).css('opacity', '0.3');
        },
        function(){
        $(this).css('opacity','1');
        }
    );
}
