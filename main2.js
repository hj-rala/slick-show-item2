$(function(){


// main slide
$slickElement = $('#mainSlide');

var s0 = function(slide){
	var myslide = $('#mainSlide .slick-slide').eq(slide);
	myslide.find('.simg01').stop().animate({'opacity':'1','margin':'0'},1000,'easeOutExpo');
	myslide.find('.simg02').stop().animate({'opacity':'1','margin':'0'},1000,'easeOutExpo');
	myslide.find('.simg03').animate({'opacity':'1','margin':'0'},1600,'easeOutExpo');

}

var s1 = function(slide){
	var myslide = $('#mainSlide .slick-slide').eq(slide);
	myslide.find('.simg01').stop().animate({'opacity':'1','margin':'0'},1000,'easeOutExpo');
	myslide.find('.simg02').stop().animate({'opacity':'1','margin':'0'},1000,'easeOutExpo');
	myslide.find('.simg03').animate({'opacity':'1','margin':'0'},1600,'easeOutExpo');
}





var slideMove = function(a){
	var currentSlide = a; 
	var myslide = $('.slick-slide').eq(currentSlide);
	$('.item').removeAttr('style','');

	switch (currentSlide) {
		case 0 :
			s0(currentSlide);
			break;
		case 1 :
			s1(currentSlide);
			break;
		case 2 :
			s2(currentSlide);
			break;
		case 3 :
			s3(currentSlide);
			break;
		default :	
			break;
	}
}


var dotMove = function(){
	var msDot = $('.slick-dots');
	var msDotH = -parseInt(msDot.height()/2);
	msDot.css('margin-top',msDotH);
}

$slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
	slideMove(currentSlide);
});

$(window).load(function(){
	$slickElement.slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		slidesToShow: 1,
		speed: 800,
		pauseOnHover:false,
		pauseOnFocus:false, 
		touchMove: false,
		arrows: false,
		dots: true,
	});
	setTimeout( function(){
		slideMove(0);
	},200);

	dotMove();

});

$(window).resize(function(){
	dotMove();
});





});