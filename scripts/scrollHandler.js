$(document).ready(function() {
	$('#socialLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('footer').offset().top }, 1000);
	});
	
	$('#contactUsLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('#contactUsSection').offset().top }, 1000);
	});
	
	$('#migrateLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('#whatToolsDoWeUse').offset().top }, 1000);
	});
	
	$('#whatDoWeDoAnchorLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('#whatDoWeDoSection').offset().top }, 1000);
	});
	
	
	$('#contactUsButton').on('click', function() {
		$("html, body").animate({ scrollTop: $('#contactUsSection').offset().top }, 1000);
	});
});