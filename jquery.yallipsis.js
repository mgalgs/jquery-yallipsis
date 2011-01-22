/**
 * yallipsis
 *
 * Author: Mitchel Humpherys
 */

(function($) {
    var console = window.console ? window.console : {
	log: $.noop,
	error: function(msg) {
	    $.error(msg);
	}
    };

    $.fn.yallipsis = function(options) {
	var defaults = {
	    replaceText: '<b><u>...</u></b>',
	    maxChars: 50,
	    where: 'back'
	};

	var options = $.extend(defaults, options);

	return this.each(function() {
	    var o = options;
	    var el = $(this);
	    var orig = el.html();//read-only please!
	    if (orig.length < o.maxChars) return;
	    switch (o.where) {
	    case 'front':
		var txt = o.replaceText + orig.substr(orig.length-o.maxChars);
		el.html( txt );
		break;
	    case 'back':
		el.html( orig.substr(0,o.maxChars) + o.replaceText );
		break;
	    case 'sides':
		var t = (orig.length - o.maxChars)/2;
		el.html( o.replaceText + orig.substr(t,o.maxChars) + o.replaceText );
		break;
	    case 'middle':
		var t = o.maxChars/2;
		el.html( orig.substr(0,t) + o.replaceText + orig.substr(orig.length-t) );
		break;
	    default:
		console.log('yallipsis: Invalid insertion location: ' + o.where);
		return;
	    } // eo switch

	    // set the title if we can:
	    if (!el.attr('title')) {
		el.attr('title', orig);
	    }
	}); // eo return this.each
    }; //eo $.fn.yallipsis
})(jQuery);