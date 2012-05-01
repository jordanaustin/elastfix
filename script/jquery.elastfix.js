/*
 * ElastFix v0.1
 * Copyright 2012 Jordan Austin
 * http://missingdesign.com
 *
 * Released under MIT license, 
 * http://www.opensource.org/licenses/mit-license.php
 */
 
(function($){
	$.fn.elastfix = function(options) {
		var
			defaults = {
				autoResize: true // Auto checks if the scroll content size has changed on touchstart. Recommended. 
			},

		settings = $.extend({}, defaults, options);
         
		this.each(function() {
			var $this = $(this);
			    negHeight = - ($('> *', this).height() - $this.height()),
    			    posHeight = $('> *', this).height() - $this.height() - 1;
			    
			// Only stops this event from propatating when the scrolling element has a height greater than the parent.    
			$this.on('touchmove', function(e){
				if($('> *', this).height() > $this.height()) {
					e.stopPropagation();
				}	
			});
			$this.on('touchstart touchmove', function(e) {
				    var negHeight = - ($('> *', this).height() - $this.height()),
					posHeight = $('> *', this).height() - $this.height() - 1;
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