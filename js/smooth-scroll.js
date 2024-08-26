$(document).ready(function () {
	$('.tooltip-button').on('click', function (event) {
		event.preventDefault()
		var targetId = $(this).attr('href') || '#section1'

		$('html, body').animate({
			scrollTop: $(targetId).offset().top
		}, 1000)
	})
})