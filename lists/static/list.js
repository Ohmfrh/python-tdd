var initialize = function () {
    console.log('initialize called');
    $('input').on('keypress', function () {
	console.log('HI');
	$('.has-error').hide();
    });
}
initialize();
