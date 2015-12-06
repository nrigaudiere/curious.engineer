$(document).foundation();

var open = $('#navbar-open');
var close = $('#navbar-close');
var menub = $('.menu-bar');
var menuo = $('#menu-overlay');

open.click(function() {
	open.addClass( "animated fadeOut" ).removeClass("fadeIn");
	menuo.addClass( "show animated fadeInRight" ).removeClass("hide fadeOutRight");
});

close.click(function() {
	menuo.removeClass("show animated fadeInRight").addClass("animated fadeOutRight" );
	open.addClass( "show animated fadeIn" ).removeClass("fadeOut");
});


