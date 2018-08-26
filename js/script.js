$(function(){
	
	/* Выпадающее меню Начало*/
	$('.menuToggle').on('click', function(){
		
		$('.menu').slideToggle(300, function(){
			
			if($(this).css('display') == 'none'){
				$(this).removeAttr('style'); 
			}
		});
	});
	/* Выпадающее меню Финиш*/
	
	
	/* Выпадающий слайдер статей Начало*/
	/* $('.main__right__section__title').click(function(){
		$(this).next().slideToggle(300);
	}); */
	/* Выпадающий слайдер статей Финиш*/
	
	/* Выпадающий слайдер статей Начало - работает после Ajax подгрузки контента*/
	$('body').on('click', '.main__right__section__title', function(){
		$(this).next().slideToggle(300);
	});
	/* Выпадающий слайдер статей Финиш*/
	
	
	
	/*Текущая дата Старт*/
	var currentDate = new Date();
	$(".date").html(currentDate.getFullYear());
	/*Текущая дата Финиш*/
	
	
	/* Время загрузки страницы Старт */
	var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    console.log('Page load time is '+ loadTime);
	/* Время загрузки страницы Финиш */
	
	/* Google search Start*/
	  (function() {
    var cx = '006003387562024621562:qeuijazizle';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
	/* Google search Finish*/
	
});