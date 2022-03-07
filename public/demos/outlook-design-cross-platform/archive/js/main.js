$(document).ready(function() {
    "use strict";

    $.get("topbar.html", function (data) {
        $("body").prepend(data);
        init();
    });

    function init() {
        var $menu = $('#menuContainer'),
		    $menuBtn = $('#menuBtn'),
		    $menuItem = $('#menu').find('li');

        $menuBtn.mouseup(function (e) {
            $menu.toggleClass('open');
            e.stopPropagation();
        });

        $menuItem.on('click', function () {
            $menu.removeClass('open');
        });

        // HIDE MENU WHEN CLICKED ELSEWHERE
        $('body').not($menuBtn).mouseup(function (e) {
            if ($menu.hasClass('open')) {
                $menu.removeClass('open');
                e.stopPropagation();
            }
        });

        // SCROLL TO ANCHOR
        $(function () {
            $('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                    var target = $(this.hash);

                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 45
                        }, 500);
                        return false;
                    }
                }
            });
        });

        // CHANGE TITLE ON SCROLL POSITION
        var $title = $('#title'),
		    $modules = $('.module-subtitle'),
		    $topbar = $('#topbar'),
            titlePositions = [0],
            currentTitleIndex = 0,
            firstModuleColor = $('.module-subtitle:first').css('background-color'),
            firstModuleTitle = $('.module-subtitle:first').find('h1').text();

        getTitlePositions();
        $(window).on("resize", function () {
            getTitlePositions();
        });
        function getTitlePositions() {
            $modules.each(function (index, module) {
                var $module = $(module);
                titlePositions[index + 1] = $module.offset().top - 51;
            });
        }

        $topbar.css('background-color', firstModuleColor);
        //$title.html(firstModuleTitle);
        $menu.css('background-color', firstModuleColor);

        $(window).on("scroll resize", function () {

            var currentScrollPosition = $("body").scrollTop(),
	    	    tempTitleIndex = -1;

            //console.log(currentScrollPosition);
            for (var i = 0; i < titlePositions.length; i++) {
                if (currentScrollPosition >= titlePositions[i] && currentScrollPosition < titlePositions[i + 1] && i != (titlePositions.length - 1)) {
                    tempTitleIndex = i;
                } else if (i == (titlePositions.length - 1) && currentScrollPosition >= titlePositions[i]) {
                    tempTitleIndex = i;
                }
            }

            if (tempTitleIndex != currentTitleIndex) {
                currentTitleIndex = tempTitleIndex;

                var moduleColor = $modules.eq(currentTitleIndex - 1).css('background-color'),
        		    moduleName = $modules.eq(currentTitleIndex - 1).find($('h1')).text();

                if (currentTitleIndex == 0) {
                    moduleName = "";
                    moduleColor = $('.module-title').css('background-color');
                }

                if ($menu.hasClass('open')) {
                    $menu.doAnimation('ms-u-slideLeftOut40', false, function () {
                        $menu.css('background-color', moduleColor);
                        setTimeout(function () {
                            $menu.doAnimation('ms-u-slideRightIn40', true);
                        }, 0)
                    });
                } else {
                    $menu.css('background-color', moduleColor);
                }

                $topbar.doAnimation("ms-u-slideUpOut20", false, function () {
                    $topbar.css('background-color', moduleColor);
                    $title.html(moduleName);
                    setTimeout(function () {
                        $topbar.doAnimation("ms-u-slideDownIn20", true);
                    }, 0)
                });
            }
        });

        // // FLOWTYPE INIT AND CONFIG
        // $('body').flowtype({
        //    minFont   : 12,
        //    maxFont   : 25,
        //    fontRatio : 30
        // });
    }

});