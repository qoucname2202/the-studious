$(document).ready(function () {
	$('.slider').slick({
		centerMode: true,
		dots: true,
		autoplay: true,
		speed: 300,
		centerPadding: '50px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '30px',
					Infinity: true,
					slidesToShow: 1,
				},
			},
		],
	});
});
