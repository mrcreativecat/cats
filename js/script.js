$(document).scroll(function(){

		// calculates how far we have scrolled down on the page
		var y = $(document).scrollTop();	

		// calculates the distance between top of the broswer window and top of our red square, then stores the value in the variable "distance"
		var scrollTop = $(window).scrollTop(),
    		elementOffset = $("#cat_face").offset().top,
    		distance = (scrollTop - elementOffset);
    		
		if ( y > 10) {
			$("#red_scroll_arrow").fadeOut();
		}

		else {
			$("#red_scroll_arrow").fadeIn();
		}





		if ( y > 600) {
			$("#cat_face").css({
				"position": "absolute",
				"top": distance
			});
		}

		else {
			$("#cat_face").css({
				"position": "fixed",
				"top": "60%"
			});
		}

});