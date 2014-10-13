$(document).ready(function() {

	$(".user-photo ul li:nth-child(3n+2)").addClass('margin');
	$(".user-friend ul li:nth-child(3n+2)").addClass('margin');
	

	$(".sliderkit").sliderkit({
		shownavitems: 8,
		circular: true,
		auto: false,
		navscrollatend: true,
		counter: true,
		panelfxspeed: 200
	});    

	$(".user-photo li").click(function() {
		var counter = $('.user-photo li').index(this);
		var scrollTop = $(window).scrollTop();        
		$(".mask, .modal-view-photo").fadeIn('fast');
		$(".sliderkit-nav-clip, .sliderkit-nav-clip ul, .sliderkit-nav-clip ul li").removeClass("sliderkit-selected");
		$(".modal-view-photo .sliderkit-panels .sliderkit-panel")
		.eq(counter)
		.addClass("sliderkit-panel-active")
		.css("display", "block");
		$(".sliderkit-nav .sliderkit-nav-clip ul li")
		.eq(counter)
		.addClass("sliderkit-selected");
		var img = $('.sliderkit-panel img').eq(counter);
		var width  = $(img).width();
		var height = $(img).height();
		$(".modal-view-photo").css({
		 "width" : width + 415,
		 "top" : scrollTop + 10
	 });
		$(".modal-view, .sliderkit, .sliderkit-panel-active, .sliderkit-nav-clip").css("width", width);
		$(".sliderkit, .sliderkit-nav").css("height", height + 81);
		
		if (width < 595) {
		 $(".modal-view-photo .meta .fright, .modal-view-photo .meta .fleft").css("float", "none");
		 $(".modal-view-photo .meta .fright").css("width", "100%");
	 } else {
		 $(".modal-view-photo .meta .fleft").css("float", "left");
		 $(".modal-view-photo .meta .fright").css({"float" : "right", "width" : "68%"});
	 }

	 var modHeight = $(".modal-view").height();
	 $(".modal-comments").css("height", modHeight + 40);
	 $(".modal-comments .comments").css("height", modHeight-100);
 	});

	$(".sliderkit-go-prev, .sliderkit-go-next, .sliderkit-nav-clip ul li").click(function() {
	 var img = 0;
	 var img = $('.sliderkit-panel-active img');
	 var width  = $(img).width();
	 var height = $(img).height
	 var modHeight = $(".modal-view").height();
	 $(".modal-view, .sliderkit, .sliderkit-panel-active, .sliderkit-nav-clip").css("width", width);
	 $(".modal-view-photo").css("width", width + 415);
	 $(".sliderkit, .sliderkit-nav").css("height", height + 81);
	 $(".modal-comments").css("height", modHeight);
	 if (width < 595) {
		$(".modal-view-photo .meta .fright, .modal-view-photo .meta .fleft").css("float", "none");
		$(".modal-view-photo .meta .fright").css("width", "100%");
	} else {
		$(".modal-view-photo .meta .fleft").css("float", "left");
		$(".modal-view-photo .meta .fright").css({"float" : "right", "width" : "68%"});
	}
	var modHeight = $(".modal-view").height();
	$(".modal-comments").css("height", modHeight + 40);
	$(".modal-comments .comments").css("height", modHeight-100);
	});
});