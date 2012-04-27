(function($){
	$.fn.elastfix = function(options) {
		var
			defaults = {
				autoResize: true // Auto checks if the scroll content size has changed on touchstart. 
			},

		settings = $.extend({}, defaults, options);
         
		this.each(function() {
			var $this = $(this);
				negHeight = - ($('> *', this).height() - $this.height()),
    			posHeight = $('> *', this).height() - $this.height() - 1;

			$this.on('touchmove', function(e){
				if($('> *', this).position().top === 0) {
					$(this).scrollTop(1);
				}
				else if($('> *', this).position().top === negHeight) {
					$(this).scrollTop(posHeight);
				}

				if($('> *', this).height() > $this.height()) {
					e.stopPropagation();
				}
			});
			
			$this.on('touchstart', function(e){
				if (settings.autoResize === true) {
					var negHeight = - ($('> *', this).height() - $this.height()),
    					posHeight = $('> *', this).height() - $this.height() - 1;
    			}
				if($('> *', this).position().top === 0) {
					$(this).scrollTop(1);
				}
				else if($('> *', this).position().top === negHeight) {
					$(this).scrollTop(posHeight);
				}
			});
		});
		return this;
	}
})(jQuery);