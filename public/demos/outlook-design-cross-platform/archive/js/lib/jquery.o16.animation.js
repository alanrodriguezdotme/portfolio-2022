/*
    Plugin to handle CSS3 Anmiations and Transitions 
    Provides a callback funtion after the animation ends.
    Microsoft - 10/2013
    MA
*/


// Get vendor prefix for animation and transition
var animationEnd = "animationend", transitionEnd = "transitionend";
var prefix = (function () {
    var styles = window.getComputedStyle(document.documentElement, ''),
      pre = (Array.prototype.slice
        .call(styles)
        .join('')
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1],
      dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
        dom: dom,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre[0].toUpperCase() + pre.substr(1)
    };
})();
if (prefix.dom == "WebKit") {
    animationEnd = "webkitAnimationEnd";
    transitionEnd = "webkitTransitionEnd";
}
else if (prefix.dom == "MS") {
    animationEnd = "MSAnimationEnd animationend";
    transitionEnd = "MSTransitionEnd transitionend";
}
else if (prefix.dom == "O") {
    animationEnd = "oanimationend";
    transitionEnd = "otranstionend";
}



(function ($) {
    // Animation plugin
    $.fn.doAnimation = function (animClass, stayVisible, callback) {
        var _this = this;
        _this.removeClass("hidden");
        _this.addClass(animClass);
        _this.one(animationEnd, function () {
            //Animatin Complete
            //debugger;
            _this.removeClass(animClass);
            if (stayVisible == false) {
                _this.addClass("hidden");
            }
            if ($.isFunction(callback)) {
                // call user provided method
                callback();
            }
        });

        //return this;
    };

    // Transtion plugin
    $.fn.doTransition = function (animClass, callback) {
        var _this = this;
        _this.addClass(animClass);
        _this.one(transitionEnd, function () {
            // Transition Complete
            //_this.removeClass(animClass);
            if ($.isFunction(callback)) {
                // call user provided method
                callback();
            }
        });

        return this;
    };
})(jQuery)

