/*eslint-env jquery, browser*/

$(document).ready(function() {
	$(".carousel").slick({
    autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false
  });
	$("div").css("border", "3px solid red");
});