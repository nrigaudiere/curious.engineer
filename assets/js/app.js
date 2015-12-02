$(document).foundation();

var open = $('#navbar-open');
var close = $('#navbar-close');
var menuo = $('#menu-overlay');

open.click(function() {
	open.addClass( "hide" ).removeClass("show animated pulse");
	close.addClass( "show animated pulse" ).removeClass("hide");
	menuo.addClass( "show animated fadeInRight" ).removeClass("hide fadeOutRight");
});

close.click(function() {
	close.addClass( "hide" ).removeClass("show animated pulse");
	menuo.addClass( "fadeOutRight" ).removeClass("show animated fadeInRight");
	open.addClass( "show animated pulse" ).removeClass("hide");
});


