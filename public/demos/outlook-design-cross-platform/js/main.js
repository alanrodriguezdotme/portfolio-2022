$(document).ready(function() {
    "use strict";

    // TABS
    var $sections = $('.section'),
        sectionPosition = [0],
        sectionPositionIndex = 0,
        scrollPos = 0;

    // IE 11 FIX... THANKS MATHIEU!!!!!
    $('body').on("mousewheel", function () {
        event.preventDefault();
        
        var wheelDelta = event.wheelDelta / 1.4;

        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });

    function getSectionPositions() {
        $sections.each(function (index, section) {
            var $section = $(section);
            sectionPosition[index++] = $section.offset().top - 1;
        });
    }
    function changeTabs() {
        //var currentScrollPosition = $('body').scrollTop();
        var currentScrollPosition = window.pageYOffset;

        for (var i = 0; i < sectionPosition.length; i++) {
            if (currentScrollPosition >= sectionPosition[i]
                && currentScrollPosition < sectionPosition[i + 1]
                && i != (sectionPosition.length - 1)
                ) {

                $('.tab').removeClass('selected');
                $('#tab' + (i + 1)).addClass('selected');
                sectionPositionIndex = i;

            } else if (currentScrollPosition >= sectionPosition[5]) {

                $('.tab').removeClass('selected');
                $('#tab6').addClass('selected');
                sectionPositionIndex = 5;
            }
        }
    }

    function videoInView() {
        var videoWidth = $(window).width(),
            videoHeight = videoWidth / 1.7778;

        // change video height
        $('#video').height(videoHeight);

        // change z-index
        $('#video-wrapper:in-viewport').css('z-index', '50');
        $('#video-wrapper:above-the-top').css('z-index', '20');
        $('#video-wrapper:below-the-fold').css('z-index', '20');

        // pause when video not in viewport
        // $('#video:above-the-top').vimeo('pause');
        // $('#video:below-the-fold').vimeo('pause');
    }

    $(function() {
        var changeZ = function(e) {
            if (e.type == 'enterviewport') {
                $('.voice-textbox').css('z-index','50');
            } else {
                $('.voice-textbox').css('z-index','30');                
            }
        }

        $('.hide-textbox')
            .bind('enterviewport', changeZ)
            .bind('leaveviewport', changeZ)
            .bullseye();
    });

    getSectionPositions();

    changeTabs();

    $('.tab').on('click', function () {
        getSectionPositions();
        changeTabs();
    });

    $('.title-link').on('click', function () {
        console.log('click');
        getSectionPositions();
        changeTabs();
    });

    $(window).on("scroll resize", function () {

        getSectionPositions();
        changeTabs();
        videoInView();
    });

    function adjustHeight() {
        // MAKE SIZE OF LAST SPACER SAME AS LAST SECTION
        var resourceHeight = $('.last-section').outerHeight(true);
        $('.last-spacer').outerHeight(resourceHeight);

        // MAKE TOP SPACE OF CROSS PLATFORM IMAGES EQUAL TO TAB SPACER HEIGHT
        var tabHeight = $('.tab-spacer').height();
        $('.z-46').css("top", tabHeight);
        $('.z-49').css("top", tabHeight);
    }

    adjustHeight();
    
    $(window).resize(function () {
        adjustHeight();
    });

});