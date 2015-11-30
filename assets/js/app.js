$(document).foundation();

var open = $('#navbar-open');
var close = $('#navbar-close');
var menuo = $('#menu-overlay');

open.click(function() {
	open.addClass( "hide" ).removeClass("show");
	close.addClass( "show animated pulse" ).removeClass("hide");
	menuo.addClass( "show animated fadeInRight" ).removeClass("hide");
});

close.click(function() {
	close.addClass( "hide" ).removeClass("show");
	menuo.addClass( "fadeOutRight" ).removeClass("show");
	open.addClass( "show animated pulse" ).removeClass("hide");
});
