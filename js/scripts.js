$(document).ready(function() {
	FastClick.attach(document.body);
	
	viewportWidth = null;
	viewportHeight = null;
	navbarHeight = null;

	$(window).on("resize", function(){
		viewportWidth = $(window).width();
		viewportHeight = $(window).height();
		navbarHeight = $('#navbar').height();
	}).resize();

	$('.js-trigger').click(function(){
		$('.js-mobile-nav').addClass('is-opened');
	});

	$('.js-mobile-nav a').click(function(){
		$('.js-mobile-nav').removeClass('is-opened');
	});
});