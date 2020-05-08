jQuery(document).ready(function () {
	var header = $("#header");
	var introH = $("#intro").innerHeight();
	var scrollOffset = 0;

	//Header fixed
	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();
		if (scrollOffset >= introH || $(this).scrollTop() >= introH)
			header.addClass("header--fixed");
		else
			header.removeClass("header--fixed");
	});

	//Smooth scroll
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this);
		var currentID = $(this).data("scroll");
		var currentOffset = $(currentID).offset().top - 70;
		$(".header__nav a").removeClass("current_nav");
		$(".header__nav").removeClass("active");
		$("#nav-toggle").removeClass("active");
		$this.addClass("current_nav");
		$("html, body").animate({
			scrollTop: currentOffset
		}, 700)
	})

	//burger-menu
	$("#nav-toggle").on("click", function () {
		$(this).toggleClass("active");
		$(".header__nav").toggleClass("active");
	})

	//tabs
	$("[data-collapse]").on("click", function () {
		var $this = $(this);
		var currentBlock = $(this).data("collapse");
		$this.toggleClass("blocking");
		$(currentBlock).toggleClass("blocking");
	})

});


//slider

	var rightArrow = document.getElementById('right-arrow');
	var leftArrow = document.getElementById('left-arrow');
	var slides = document.getElementsByClassName('review-item'); 



	function changeSlideRight() {
		for (var i = 0; i < slides.length; i++) {
			if (slides[i].classList.contains('active-item')) {
				slides[i].classList.remove('active-item');
				if (i < slides.length - 1)
					slides[++i].classList.add('active-item');
				else
					slides[0].classList.add('active-item');
				return;
			}
		}
	}

	function changeSlideLeft() {
		for (var i = slides.length - 1; i >= 0; i--) {
			if (slides[i].classList.contains('active-item')) {
				slides[i].classList.remove('active-item');
				if (i > 0)
					slides[--i].classList.add('active-item');
				else
					slides[slides.length - 1].classList.add('active-item');
				return;
			}
		}
	}

	rightArrow.addEventListener('click', function () {
		changeSlideRight();
	})


	leftArrow.addEventListener('click', function () {
		changeSlideLeft();
	})