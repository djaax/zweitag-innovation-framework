$(document).ready(function() {
	var ifa = $('.innovation-framework-interactive');
	var ifc = $('.if-container');

	var unselectAll = function() {
		ifa.removeClass('s01 s02 s03 s04 s05 s06');
		ifc.find('.if-feature').removeClass('active');
	}

	var select = function(id) {
		unselectAll();
		ifa.addClass(id);
		ifc.find('.if-feature.'+id).addClass('active');
	}

	$('.if-hover-zone').mouseenter(function() {
		select($(this).attr('data-id'));
	});

	$('.if-feature').mouseenter(function() {
		select($(this).attr('data-id'));
	});

	ifa.mouseleave(function() {
		unselectAll();
	});
});