$(document).ready(function() {
	$(".user-photo ul li:nth-child(3n+2)").addClass('margin');
	$(".user-friend ul li:nth-child(3n+2)").addClass('margin');
	// Calendar
	$(".cal table td").dblclick(function() {
		$(".mask, .modal").fadeIn('fast');
	});
	$(".cal table td.today, .cal table td.want-day").click(function() {
		$(".mask, .modal").fadeIn('fast');
		$("input[name='delete']").css('display', 'inline-block');
		$("input[name='delete']").css({'marginRight':'10px'});
	});
	$(".modal input[name='cancel'], .mask, .close").click(function() {
		$(".mask, .modal, .modal-add-photo, .modal-add-video, .modal-view-photo, .user-enter-window, .user-sign-up-window, .advertiser-sign-up-window, .wedding-dress-window").fadeOut('fast');
		$("input[name='delete']").css('display', 'none');
	});

	//other-modal
	$(".add-photo, .add-video").click(function() {
		$(".mask, .modal-add-photo, .modal-add-video").fadeIn('fast');
	});
	$(".enter").click(function() {
		$(".mask, .user-enter-window").fadeIn('fast');
	});
	
	$(".sign-up").click(function() {
		$(".mask, .user-sign-up-window").fadeIn('fast');
	});

	$(".dress-card .description a").click(function() {
		var scroll = $(document).scrollTop()+30;
		$(".wedding-dress-window").css({'top': scroll});
		$(".mask, .wedding-dress-window").fadeIn('fast');
		$('#carousel8').carouFredSel({
			items               : 1,
			direction           : "left",
			prev: '#prev8',
			next: '#next8',
			auto: false,
			height: 730,
			width: 479,
			scroll : {
				items           : 1,
				easing          : false,
				duration        : 1000,                         
				pauseOnHover    : true
			}                   
		});
		return false;
	});

	$(".video-from a").click(function() {
		$(this).attr('id', 'active').siblings().removeAttr('id');
		var p = $(this).attr("class");
		$(".file-upload").find("div."+p+"").removeAttr('id').siblings().attr('id', 'hide');
	});


	$('.toggle').click(function(){
		if ($('#filter').is(":visible")) {
			$('#filter').slideUp("fast", function() {
				$('.options-up').removeClass('options-up').addClass('options-down');
				$('.options-down').text('Параметры подбора')
			});
		}else{
			$('#filter').slideDown("fast", function() {
				$('.options-down').removeClass('options-down').addClass('options-up');
				$('.options-up').text('Скрыть параметры')
			});
		}
		return false;
	});

	$('#filter > span, #filter .section2 .box2.visible > span').click(function(){
		if ($(this).next(".checkboxes").is(":visible")) {
			$(this).next(".checkboxes").slideUp("fast", function() {
				$(this).prev().addClass('close');
			});
		}else{
			$(this).next(".checkboxes").slideDown("fast", function() {
				$(this).prev().removeClass('close');
			});
		}
	});
	

	$('div.tabs2').on('click', 'span:not(.current2)', function() {  
		$(this).addClass('current2').siblings().removeClass('current2')  
		.parents('div.section2').find('div.box2').eq($(this).index()).fadeIn(150).siblings('div.box2').hide();  
	});

	$('ul.tabs').on('click', 'li:not(.current)', function() {  
		$(this).addClass('current').siblings().removeClass('current')  
		.parents('div.section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();  
	});

	$('div.main-window').on('click', 'label:not(.current3)', function() {
		$(this).addClass('current3').siblings().removeClass('current3')  
		.closest('div.user-sign-up-window').find('div.box3').eq($(this).index() - 2).fadeIn(150).siblings('div.box3').hide();  
	});
	
/*carousels catalog_spisok_brand

	for (var i = 1; i <=6; i++) {
		$('#carousel'+i).carouFredSel({
		items               : 4,
		direction           : "left",
		//prev: '#prev1',
		next: '#next'+i,
		auto: false,
		height: 211,
		width: 675,
		scroll : {
			items           : 1,
			easing          : false,
			duration        : 1000,                         
			pauseOnHover    : true
		}                   
	});
	};

	*/
	$('#carousel1').carouFredSel({
		items               : 4,
		direction           : "left",
		//prev: '#prev1',
		next: '#next1',
		auto: false,
		height: 211,
		width: 675,
		scroll : {
			items           : 1,
			easing          : false,
			duration        : 1000,                         
			pauseOnHover    : true
		}                   
	});
	$('#carousel2').carouFredSel({
		items               : 4,
		direction           : "left",
		//prev: '#prev1',
		next: '#next2',
		auto: false,
		height: 211,
		width: 675,
		scroll : {
			items           : 1,
			easing          : false,
			duration        : 1000,                         
			pauseOnHover    : true
		}                   
	});
	$('#carousel3').carouFredSel({
		items               : 4,
		direction           : "left",
		//prev: '#prev1',
		next: '#next3',
		auto: false,
		height: 211,
		width: 675,
		scroll : {
			items           : 1,
			easing          : false,
			duration        : 1000,                         
			pauseOnHover    : true
		}                   
	});
	$('#carousel4').carouFredSel({
		items               : 4,
		direction           : "left",
		//prev: '#prev1',
		next: '#next4',
		auto: false,
		height: 211,
		width: 675,
		scroll : {
			items           : 1,
			easing          : false,
			duration        : 1000,                         
			pauseOnHover    : true
		}                   
	});
	$('#carousel5').carouFredSel({
		items               : 4,
		direction           : "left",
		//prev: '#prev1',
		next: '#next5',
		auto: false,
		height: 211,
		width: 675,
		scroll : {
			items           : 1,
			easing          : false,
			duration        : 1000,                         
			pauseOnHover    : true
		}                   
	});
	$('#carousel6').carouFredSel({
		items               : 4,
		direction           : "left",
		//prev: '#prev1',
		next: '#next6',
		auto: false,
		height: 211,
		width: 675,
		scroll : {
			items           : 1,
			easing          : false,
			duration        : 1000,                         
			pauseOnHover    : true
		}                   
	});

//end carousels
$('#carousel7').carouFredSel({
	items               : 3,
	direction           : "left",
	prev: '#prev7',
	next: '#next7',
	auto: false,
	height: 230,
	width: 536,
	scroll : {
		items           : 1,
		easing          : false,
		duration        : 1000,                         
		pauseOnHover    : true
	}                   
});





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