/*eslint-env jquery, browser*/

$(document).ready(function() {
	$(".carousel").slick({
    autoplay: true,
		autoplaySpeed: 4000
  });
	$("div").css("border", "3px solid red");
});