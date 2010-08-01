; (function($) {
	/**
	* Based on textfill jquery plugin by Russ Painter (WebDesign@GeekyMonkey.com)
	*/
	$.fn.textfill = function(options) {
		var defaults = {
			maxFontPixels: 40,
			innerTag: 'span',
			widthOnly: false
		};
		var Opts = jQuery.extend(defaults, options);
		return this.each(function() {
			$(this).children(Opts.innerTag).each(function(index) {
        	var fontSize = Opts.maxFontPixels;
        	var maxHeight = $(this).parent().height();
    			var maxWidth = $(this).parent().width();
    			var textHeight;
    			var textWidth;
    			if(Opts.widthOnly) {
    			  	do {
        				$(this).css('font-size', fontSize);
        				textWidth = $(this).width();
        				fontSize = fontSize - 1;
        				console.log(fontSize);
        			} while (textWidth > maxWidth && fontSize > 3);
  			  }
  			  else {
  			    	do {
        				$(this).css('font-size', fontSize);
        				textHeight = $(this).height();
        				textWidth = $(this).width();
        				fontSize = fontSize - 1;
        			} while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
			    }
		  });
		});
	};
})(jQuery);

// $(document).ready(function() {
//  $('.jtextfill').textfill({ maxFontPixels: 36, innerTag: 'h1' });
// });

