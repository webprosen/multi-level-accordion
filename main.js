// $('.acnav__label--level1').attr('data-id');
// label.attr('data-id');


$('.acnav__label').click(function () {
    var label = $(this);

    if(label.hasClass('acnav__label--level1')){
        $(".acnav__label--level1").each(function(){

            if($(this).attr('data-id') != label.attr('data-id')){
                $(this).parent().find('.acnav__list--level2').slideUp('fast');
                $(this).parent().removeClass('is-open');   
            }
        });
    }

    
	var parent = label.parent('.has-children');
	var list = label.siblings('.acnav__list');
    
	if ( parent.hasClass('is-open') ) {
		list.slideUp('fast');
		parent.removeClass('is-open');
	}
	else {
		list.slideDown('fast');
		parent.addClass('is-open');
	}

});