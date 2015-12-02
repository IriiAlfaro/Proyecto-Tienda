//''
(function() {
	$(document).ready(function() {
		var itemCounter = 0;
		//variables for the navigation functionality
		var menuButton = $('#menu-btn');
		var mainNav = $('#main-nav');

		//variables for the chosen item functionality
		var itemNext = $('#slider-item-next');
		var itemBack = $('#slider-item-back');
		var itemViews = $('#slider-item li');
		// console.log(sliderItem);

		//variables for item previews functionality
		var productNext = $('#products-slider-next');
		var productsBack = $('#products-item-back');

		menuButton.on('click', function() {
			mainNav.toggleClass('hide')
		});

		function sliderItemFunc(){

		}
		itemNext.on('click', function() {
			itemCounter++;
			console.log(itemCounter);
			$( itemViews  ).each(function() {
  				if ( $( this ).hasClass('selected-item') ){
  					if (itemCounter == 4) {
  						$( this ).removeClass('selected-item');
  						$('#slider-item li:first-child').addClass('selected-item');	
  						itemCounter = 0;
  					} else {
  						$( this ).removeClass('selected-item').next().addClass('selected-item');	
  					}
  					return false;
  				}
			});
		});

		itemBack.on('click', function() {
			itemCounter--;
			console.log(itemCounter);
			$( itemViews  ).each(function() {
  				if ( $( this ).hasClass('selected-item') ){
  					if (itemCounter == -1) {
  						$( this ).removeClass('selected-item');
  						$('#slider-item li:last-child').addClass('selected-item');	
  						itemCounter = 3;
  					} else {
  						$( this ).removeClass('selected-item').prev().addClass('selected-item');	
  					}
  					return false;
  				}
			});
		});
	});

})();


