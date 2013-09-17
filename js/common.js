$(document).ready(function() {

//quickmenu
$('.quickmenu').click(function (e) {
	$(this).toggleClass('is-active');
	$('.quickmenu__drop').toggle();
});

//scroll
if ($('.scroll').length > 0) {
	$('.scroll').jScrollPane({
		showArrows: true,
		verticalArrowPositions: 'split',
		horizontalArrowPositions: 'split'
	});
};

//choice city
function select() {
	var el = $('.js-select');
	var el_title = el.find('span');
	var item = el.find('li');
	var list = el.find('ul');
	el_title.click(function() {	
		if ($(this).parent().hasClass('is-open')) {
			$(this).parent().removeClass('is-open');
		}
		else {
			el.removeClass('is-open');
			$(this).parent().addClass('is-open');
		};
	});
	item.click(function() {
		var val = $(this).text();
		$(this).parent().prev().addClass('is-selected');
		$(this).parent().prev().html(val + '<i></i>');
		el.removeClass('is-open');
	});
	el_title.click(function(event){
	  event.stopPropagation();
	});
};
select();

//click document
$(document).click(function() {
	$('.js-select').removeClass('is-open');	
});

});