$(document).foundation();

var open = $('#navbar-open');
var close = $('#navbar-close');

open.click(function() {
	open.addClass( "hide" ).removeClass("show");
	close.addClass( "show animated pulse" ).removeClass("hide");
});

close.click(function() {
	close.addClass( "hide" ).removeClass("show");
	open.addClass( "show animated pulse" ).removeClass("hide");
});


