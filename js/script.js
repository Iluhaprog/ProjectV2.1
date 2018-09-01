window.scroll(0, pageYOffset - 1);
var menu_count = 1;

$(".menu-button , .mod-nav-mobile .menu .menu-item a").click(function(){
	if(menu_count == 2){
		menu_count = 1;
		$(".nav-mobile").css({"opacity":"0"});
		$(".menu-button-line:nth-child(1)").removeClass("rotate-right");
		$(".menu-button-line:nth-child(3)").removeClass("rotate-left");
		setTimeout(function(){
			$(".menu-button-line:nth-child(2)").css({"display":"block"});
			$(".menu-button-line:nth-child(1)").css({"top":"0px"});
			$(".menu-button-line:nth-child(3)").css({"top":"100%"});
			$(".nav-mobile").removeClass("mod-nav-mobile");
		},400);
		$(".header").css({"height":"15vh"})
	}
	else{
		$(".nav-mobile").addClass("mod-nav-mobile");
		$(".menu-button-line").css({"top":"14.5px"});
		setTimeout(function(){
			$(".menu-button-line:nth-child(2)").css({"display":"none"});
			$(".menu-button-line:nth-child(1)").addClass("rotate-right");
			$(".menu-button-line:nth-child(3)").addClass("rotate-left");
			$(".nav-mobile").css({"opacity":"1"})
		},400);
		$(".header").css({"height":"100vh"})
		menu_count++;
	}

});

$(".button-down").click(function(){

	window.scroll(0 , 600);

});

$(".menu-item a").click(function(){
		var elem = $(this).attr('href');
		var dist = $(elem).offset().top - 75;

		window.scroll(pageYOffset , dist);
		return false;
	});


$(document).ready(function(){
	$('.owl1').owlCarousel({

	nav : false,
	loop:true,
	responsive:{
	 	0:{
	 		items: 1
	 	},
	 	1000:{
	 		items : 1
	 	}
	 }

	});

	$('.owl2').owlCarousel({

	nav : true,
	loop:true,
	navText: ['<span class="icon-arleft"></span>', '<span class="icon-arright"></span>'],
	responsive:{
	 	0:{
	 		items: 1
	 	},
	 	600:{
	 		items: 2
	 	},
	 	1000:{
	 		items : 3
	 	}
	 }

	});

	$('.owl3').owlCarousel({

	nav : true,
	loop:true,
	navText: ['<span class="ow3 icon-arleft"></span>', '<span class="ow3 icon-arright"></span>'],
	responsive:{
	 	0:{
	 		items: 1
	 	}
	 }

	});

	$(window).scroll(function(){

		var header = $(".header");
		var logo = $(".logo");
		var menu_item = $(".menu-item a");
		if ($(this).scrollTop() > 100 && window.innerWidth > 1000) {
			header.addClass("mod-header");
			logo.addClass("mod-logo");
			menu_item.addClass("mod-menu-item");
			$(".order-call span , .order-call a , .link-for-form a").addClass("mod-color");
		}
		else{
			header.removeClass("mod-header");
			logo.removeClass("mod-logo");
			menu_item.removeClass("mod-menu-item");
			$(".order-call span , .order-call a , .link-for-form a").removeClass("mod-color");
		}

	});

	var count_acc = 1;
	$(".accordion-bt").click(function(){

		count_acc++;

		if( $(this).hasClass("mode-acc") ){
			$(this).removeClass('mode-acc').addClass('accordion-bt');
			$(this).css({"background":"#fff"});
		}
		if(count_acc > 2){
			$(this).removeClass('accordion-bt').addClass('mode-acc');      
            count_acc = 1;
		}


	});

	$(".button-card").click(function(){

		var name_attr = $(this).attr('id');

		$(".before-form").css({"display":"block"});
		$(".info").css({"display":"block"});
			
			setTimeout(function(){
				$(".before-form").css({"opacity":"1"});
				$(".info").css({"opacity":"1"});
				$(".text").css({"opacity":"1"});
				if(name_attr === 'inf1'){
					$("#in1").css({"opacity":"1"});
					$(".text #in1").css({"display":"block"});
					setTimeout(function(){
						$(".text #in1").css({"opacity":"1"});
					},100);
				}
				if(name_attr === 'inf2'){
					$("#in2").css({"opacity":"1"});
					$(".text #in2").css({"display":"block"});
					setTimeout(function(){
						$(".text #in2").css({"opacity":"1"});
					},100)
				}
				if(name_attr === 'inf3'){
					$("#in3").css({"opacity":"1"});
					$(".text #in3").css({"display":"block"});
					setTimeout(function(){
						$(".text #in3").css({"opacity":"1"});
					},100)
				}
				if(name_attr === 'inf4'){
					$("#in4").css({"opacity":"1"});
					$(".text #in4").css({"display":"block"});
					setTimeout(function(){
						$(".text #in4").css({"opacity":"1"});
					},100)
				}
			},100);

		});
		

	$("#get-model-form").click(function(){

		$(".before-form").css({"display":"block"});
		$("#model-form").css({"display":"block"});
		setTimeout(function(){
			$(".before-form").css({"opacity":"1"});
			$("#model-form").css({"opacity":"1"});
		},100);

	});

	$("#close , .before-form").click(function(){
		$(".before-form").css({"opacity":"0"});
		$("#order-call").css({"opacity":"0"});
		$("#model-form").css({"opacity":"0"});
		$(".info").css({"opacity":"0"});
		$(".info .header-form").css({"opacity":"0"});
		$(".text div").css({"opacity":"0"});
		setTimeout(function(){
			$(".before-form").css({"display":"none"});
			$("#order-call").css({"display":"none"});
			$("#model-form").css({"display":"none"});
			$(".info").css({"display":"none"});
			$(".text div").css({"display":"none"});
		},400);

	});

});

function getFormOrderCall(){

	$(".before-form").css({"display":"block"});
	$("#order-call").css({"display":"block"});
	setTimeout(function(){
		$(".before-form").css({"opacity":"1"});
		$("#order-call").css({"opacity":"1"});
	},100);
}