// mouseout pop
var timerId = setTimeout(function poptime() {
	$(function() {
	  $('.screenLock').css({height : $(document).height() + "px"});
		$('.close').click(function(){
		  $('.screenLock').fadeOut(300);
		})
	var flag = true;
	$(window).mouseout(function(e){
	  if(e.pageY - $(window).scrollTop() < 1 && flag == true){
		$('.screenLock').fadeIn(300);
		flag = false;
	  }
	}) 
	});
	timerId = setTimeout(poptime, 30000);
}, 300);
// mouseout pop end

// footer fixed
var timerId = setTimeout(function footsale() {
function firstshow() {
  $('.ftrsale').fadeIn(300);
}
setTimeout(firstshow, 10000);
	timerId = setTimeout(footsale, 20000);
}, 300);
// footer fixed end
// anchor script