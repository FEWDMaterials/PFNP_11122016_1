// $('.single-item').slick();
// buildCat().speak()
// foo(4).bar({
// 	jello:1
// })

const today = new Date().getDay();

if ( today === 1 ) {
	$('.single-item').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  adaptiveHeight: true,
	  autoplay: true,
	  autoplaySpeed: 1000,
	  arrows: false
	});

	$('.single-item').css('border', '10px solid red')

	console.log($('.single-item'))	
}

