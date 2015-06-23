/*
Simple push/pull slide out menu using JQuery selector targeting and animate().

The menu starts off off-screen with Left at -285. The main() starts when the page is loaded and monitors for click events.
When the div with the icon-menu class is clicked the function is executed and the menu is "pushed" out making it's Left 0px and the body image is Left 285px.

If the div with the class of icon-close is clicked we "pull" everything back and reset the menu to Left -285 off screen and the body Left 0px.
*/

var main = function () {
    $('.icon-menu').click(function () {
        $('.menu').animate({
            left: "0px"
        }, 200);
        
        $('body').animate({
            left: "285px"
        }, 200);
    });
    
    $('.icon-close').click(function () {
         $('.menu').animate({
            left: "-285px"
        }, 200);
        
        $('body').animate({
            left: "0px"
        }, 200);
    });
};

$(document).ready(main);