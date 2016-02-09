$( document ).ready(function() {

	if (localStorage.getItem("languageSetting") == "English") {
		$(".ja").addClass("langHide");
	} else if (localStorage.getItem("languageSetting") == "Japanese") {
		$(".en").addClass("langHide");
	} else {
		$(".ja").addClass("langHide");
	}

	$("#jLangButton").on("click", function() {
		$(".en").addClass("langHide");
		$(".ja").removeClass("langHide");
		localStorage.setItem("languageSetting", "Japanese");
	});
	$("#eLangButton").on("click", function() {
		$(".ja").addClass("langHide");
		$(".en").removeClass("langHide");
		localStorage.setItem("languageSetting", "English");
	});

	// on mouse enter, gh and li links get special hover property
	// -----------------------------------------
	$('#gh').hover(function(){
		$(".ghImage").css({width:"+=5px", height:"+=5px"});
	},function(){
		$(".ghImage").css({width:"-=5px", height:"-=5px"});   
	});

	$('#li').hover(function(){
		$(".liImage").css({width:"+=5px", height:"+=5px"});
	},function(){
		$(".liImage").css({width:"-=5px", height:"-=5px"});   
	});

	$('#gh').hover(function(){
		$(this).addClass('specialHover');
	}, function() {
		$(this).removeClass('specialHover');
	});

	$('#li').hover(function(){
		$(this).addClass('specialHover');
	}, function() {
		$(this).removeClass('specialHover');
	});
	// -----------------------------------------

});
