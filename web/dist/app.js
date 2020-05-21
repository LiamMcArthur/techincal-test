webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(14);
module.exports = __webpack_require__(15);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, __webpack_provided_window_dot_$) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lazyloading__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lazyloading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lazyloading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__matrix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracking__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracking___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tracking__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__alert__);
__webpack_provided_window_dot_$ = __webpack_provided_window_dot_jQuery = __webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

window.Cookies = __webpack_require__(5);












/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ieVersion = function () {
    if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) {
        return parseFloat(RegExp.$1);
    }

    return false;
}();

// CSRF fix
var csrfInputName = $('meta[name="csrfTokenName"]').attr('content'),
    csrfInputValue = $('meta[name="csrfTokenValue"]').attr('content');

window.csrfTokenData = function () {
    return _defineProperty({}, csrfInputName, csrfInputValue);
};

$(function () {
    $('input[name="' + csrfInputName + '"]').val(csrfInputValue);

    // IE Notice
    if (ieVersion !== false && ieVersion <= 10) {
        $('div#ienotice').show();
    }

    // Scroll to first form error on page load
    if ($('ul.errors').length) {
        $('html, body').animate({
            scrollTop: $('ul.errors').first().offset().top + 'px'
        }, 'fast');
    }

    // Homepage
    var $banner = $('#banner').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        rows: 0
    });

    // Accessibility panel

    var className = "high-contrast-body";
    if (Cookies.get("contrast") === undefined) {
        $('body').removeClass(className);
    } else {
        $('body').addClass(className);
    }

    $('.high-contrast').click(function (e) {
        e.preventDefault();
        $('body').addClass('high-contrast-body');
        Cookies.set('contrast', 'high-contrast');
    });

    $('.normal').click(function (e) {
        e.preventDefault();
        $('body').removeClass('high-contrast-body');
        Cookies.remove('contrast');
    });

    function changeFontSize(option, tag, value) {
        var element = $(tag);
        if (element) {
            var fontSize = element.css('font-size').slice(0, -2);
            var updatedFontSize = void 0;
            if (option === 'increase') {
                updatedFontSize = parseInt(fontSize) + value + 'px';
            } else if (option === 'decrease') {
                updatedFontSize = parseInt(fontSize) - value + 'px';
            }
            element.css('font-size', updatedFontSize);
        }
    }

    function changeFontSizes(option, tags, size) {
        for (var i = 0; i < tags.length; i++) {
            changeFontSize(option, tags[i], size);
        }
    }

    function loadFontSize() {
        if (Cookies.get("text-size") === 'small') {
            changeFontSizes('decrease', ['body', 'h1', 'p', 'a.small', 'a.medium', 'a.large', '#overlay-menu li a', '#info li a', '#contact-details p', '#breadcrumb li'], 5);
        } else if (Cookies.get("text-size") === 'large') {
            changeFontSizes('increase', ['body', 'h1', 'p', 'a.small', 'a.medium', 'a.large', '#overlay-menu li a', '#info li a', '#contact-details p', '#breadcrumb li'], 5);
        }
    }

    loadFontSize();

    $('a.large').click(function (e) {
        e.preventDefault();
        if (Cookies.get("text-size") === 'large') {
            return;
        }
        changeFontSizes('increase', ['body', 'h1', 'p', 'a.small', 'a.medium', 'a.large', '#overlay-menu li a', '#info li a', '#contact-details p', '#breadcrumb li'], Cookies.get("text-size") === 'small' ? 10 : 5);

        if (Cookies.get("text-size") === undefined) {
            Cookies.set('text-size', 'large');
        } else if (Cookies.get("text-size") === 'small') {
            Cookies.remove('text-size');
            Cookies.set('text-size', 'large');
        }
    });

    $('a.small').click(function (e) {
        e.preventDefault();
        if (Cookies.get("text-size") === 'small') {
            return;
        }
        changeFontSizes('decrease', ['body', 'h1', 'p', 'a.small', 'a.medium', 'a.large', '#overlay-menu li a', '#info li a', '#contact-details p', '#breadcrumb li'], Cookies.get("text-size") === 'large' ? 10 : 5);

        if (Cookies.get("text-size") === undefined) {
            Cookies.set('text-size', 'small');
        } else if (Cookies.get("text-size") === 'large') {
            Cookies.remove('text-size');
            Cookies.set('text-size', 'small');
        }
    });

    $('a.medium').click(function (e) {
        e.preventDefault();
        Cookies.remove('text-size');
        location.reload();
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $loadContainer = $('div#ajax-container'),
    $lastChild = $('div#ajax-container .list-card-item').last(),
    section = $loadContainer.data('section'),
    offset = parseInt($loadContainer.data('limit'), 10),
    limit = parseInt($loadContainer.data('limit'), 10),
    order = $loadContainer.data('order'),
    sort = $loadContainer.data('sort'),
    year = $loadContainer.data('year'),
    month = $loadContainer.data('month'),
    loading = false,
    shouldLoad = $loadContainer.length > 0;

// isOnScreen - http://stackoverflow.com/a/23222523
$.fn.isOnScreen = function () {
    var win = $(window),
        bounds = this.offset(),
        viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
};

$.fn.isEmpty = function () {
    return !this.children().length && !this.text().match(/\S/);
};

function getUrl() {
    var url = '/ajax/' + section + '/' + offset + '/' + limit + '/' + order + '/' + sort + '/';

    if (year && month) {
        url += '/' + year + '/' + month;
    }

    return url;
}

function load() {
    if (loading) {
        return false;
    }

    loading = true;

    $.post(getUrl(), csrfTokenData(), function (data) {
        data = $.trim(data);

        if (!$(data).isEmpty()) {
            // Add new children
            $loadContainer.append(data);

            // Reset last child
            $lastChild = $('div#ajax-container').children().last();

            // Update the offset
            offset += limit;
        } else {
            // Set to not try load anymore
            shouldLoad = false;
        }

        // Reset loading state
        loading = false;
    });
}

$(function () {
    $(window).on('scroll', function () {
        if (shouldLoad && !loading && $lastChild.length > 0 && $lastChild.isOnScreen()) {
            load();
        }
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Accordions
$('div.accordions h3.accordion').on('click', function () {
    var isOpen = $(this).hasClass('open');

    if (isOpen) {
        $(this).removeClass('open');
    } else {
        $(this).parent().find('h3.accordion').removeClass('open');
        $(this).addClass('open');
    }
});

$(function () {
    $('div.accordions h3.accordion').first().addClass('open');

    // Galleries
    $('.gallery-slider').not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        rows: 0,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });

    // Image popups
    $('.gallery-pinterest, .gallery-grid, .gallery-slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        gallery: {
            enabled: true,
            navigateByImgClick: true
        },
        callbacks: {
            beforeOpen: function beforeOpen() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $('.gallery-slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery-slider-bottom'
    });
    $('.gallery-slider-bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider-top',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    gridify.init();

    // Callouts slider
    $('.callouts-slider').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        rows: 0,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Open/close overlay
var $body = $(document.body),
    $overlayBar = $('div#overlay-bar'),
    $overlayMenu = $('div#overlay-menu'),
    $mobileBar = $('nav#overlay-bar'),
    lastScrollTop = 0;

$('.open-overlay').on('click', function (e) {
    e.preventDefault();
    $body.addClass('overlay-open');

    $body.keyup(function (event) {
        if (event.keyCode === 27) {
            $('.close-overlay').trigger('click');
        }
    });

    $overlayMenu.fadeIn();
});

$('.close-overlay').on('click', function (e) {
    e.preventDefault();

    $body.off('keyup');
    $body.removeClass('overlay-open');
    $overlayMenu.fadeOut();
});

// Expand/contract inside overlay
$('div#overlay-menu nav > ul > li > a span').on('click', function (e) {
    e.preventDefault();

    // Toggle sub menu visibility.
    $(this).parents('li').first().children('ul').toggle();

    // Toggle icon for dropdown.
    $(this).find('[data-fa-processed]').toggleClass('fa-minus').toggleClass('fa-plus');
});

$(window).on('scroll', function () {
    var st = $(this).scrollTop();

    if (st < 50) {
        $overlayBar.removeClass('offscreen');
    } else if (st > lastScrollTop) {
        $overlayBar.addClass('offscreen');
    } else {
        $overlayBar.removeClass('offscreen');
    }

    lastScrollTop = st;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    phoneRegex = /((0|\+44\s?\(0\)|\+44)\s?\d+\s?\d+\s?\d+)/; // https://regex101.com/r/Xd6lZX

window.replacePhoneNumbersWithLinks = function () {
    $('body *').contents().filter(function () {
        return this.nodeType === Node.TEXT_NODE;
    }).each(function () {
        $(this).replaceWith(this.textContent.replace(phoneRegex, '<a href="tel:$&">$&</a>'));
    });
};

window.recordEvent = function (category, action, label) {
    if (typeof window['ga'] === 'undefined') {
        console.error('Attempting to track event with GA not installed, please check before go-live!');
        console.error('Event:', category + ', ' + action + ', ' + label);

        return;
    }

    ga('send', 'event', category, action, label);
};

// Link tracking
$.expr[':'].external = function (obj) {
    if (obj.tagName.toLowerCase() !== 'a') {
        return false;
    }

    return obj.href && !obj.href.match(/^mailto:/) && !obj.href.match(/^javascript:/) && obj.hostname.replace(/^www\./i, '') !== document.location.hostname.replace(/^www\./i, '');
};

$.expr[':'].email = function (obj) {
    if (obj.tagName.toLowerCase() !== 'a') {
        return false;
    }

    return obj.href && obj.href.match(/^mailto:/);
};

$.expr[':'].tel = function (obj) {
    if (obj.tagName.toLowerCase() !== 'a') {
        return false;
    }

    return obj.href && obj.href.match(/^tel:/);
};

$('a:external').on('click', function () {
    recordEvent('External Link', 'Click', this.hostname.replace(/http(s)?:\/\//i));
});

$('a:email').on('click', function () {
    recordEvent('Mailto', 'Click', $(this).attr('href').substring(7));
});

$('a:tel').on('click', function () {
    recordEvent('Phone Number', 'Click', $(this).attr('href').substring(4));
});

$(function () {
    $('a:external, a:email').attr({
        target: '_blank',
        rel: 'external'
    });

    // Convert phone numbers
    if (isMobileDevice) {
        replacePhoneNumbersWithLinks();
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $alert = $('div#site-alert'),
    $alertClose = $alert.find('#site-alert-close');

$alertClose.on('click', function (e) {
    e.preventDefault();
    Cookies.set('alert', $alert.data('expiry'));
    $alert.slideUp();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[6]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9sYXp5bG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC90cmFja2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2ZvbnRhd2Vzb21lLnNjc3MiXSwibmFtZXMiOlsid2luZG93IiwicmVxdWlyZSIsIkNvb2tpZXMiLCJpZVZlcnNpb24iLCJSZWdFeHAiLCJleGVjIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwicGFyc2VGbG9hdCIsIiQxIiwiY3NyZklucHV0TmFtZSIsIiQiLCJhdHRyIiwiY3NyZklucHV0VmFsdWUiLCJjc3JmVG9rZW5EYXRhIiwidmFsIiwic2hvdyIsImxlbmd0aCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJmaXJzdCIsIm9mZnNldCIsInRvcCIsIiRiYW5uZXIiLCJub3QiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZG90cyIsImFycm93cyIsInJvd3MiLCJjbGFzc05hbWUiLCJnZXQiLCJ1bmRlZmluZWQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXQiLCJyZW1vdmUiLCJjaGFuZ2VGb250U2l6ZSIsIm9wdGlvbiIsInRhZyIsInZhbHVlIiwiZWxlbWVudCIsImZvbnRTaXplIiwiY3NzIiwic2xpY2UiLCJ1cGRhdGVkRm9udFNpemUiLCJwYXJzZUludCIsImNoYW5nZUZvbnRTaXplcyIsInRhZ3MiLCJzaXplIiwiaSIsImxvYWRGb250U2l6ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiJGxvYWRDb250YWluZXIiLCIkbGFzdENoaWxkIiwibGFzdCIsInNlY3Rpb24iLCJkYXRhIiwibGltaXQiLCJvcmRlciIsInNvcnQiLCJ5ZWFyIiwibW9udGgiLCJsb2FkaW5nIiwic2hvdWxkTG9hZCIsImZuIiwiaXNPblNjcmVlbiIsIndpbiIsImJvdW5kcyIsInZpZXdwb3J0IiwibGVmdCIsInNjcm9sbExlZnQiLCJyaWdodCIsIndpZHRoIiwiYm90dG9tIiwiaGVpZ2h0Iiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwiaXNFbXB0eSIsImNoaWxkcmVuIiwidGV4dCIsIm1hdGNoIiwiZ2V0VXJsIiwidXJsIiwibG9hZCIsInBvc3QiLCJ0cmltIiwiYXBwZW5kIiwib24iLCJpc09wZW4iLCJoYXNDbGFzcyIsInBhcmVudCIsImZpbmQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwibWFnbmlmaWNQb3B1cCIsImRlbGVnYXRlIiwidHlwZSIsInJlbW92YWxEZWxheSIsImdhbGxlcnkiLCJlbmFibGVkIiwibmF2aWdhdGVCeUltZ0NsaWNrIiwiY2FsbGJhY2tzIiwiYmVmb3JlT3BlbiIsInN0IiwiaW1hZ2UiLCJtYXJrdXAiLCJyZXBsYWNlIiwibWFpbkNsYXNzIiwiZWwiLCJjbG9zZU9uQ29udGVudENsaWNrIiwibWlkQ2xpY2siLCJmYWRlIiwiYXNOYXZGb3IiLCJjZW50ZXJNb2RlIiwiZm9jdXNPblNlbGVjdCIsImdyaWRpZnkiLCJpbml0IiwiJGJvZHkiLCJkb2N1bWVudCIsImJvZHkiLCIkb3ZlcmxheUJhciIsIiRvdmVybGF5TWVudSIsIiRtb2JpbGVCYXIiLCJsYXN0U2Nyb2xsVG9wIiwia2V5dXAiLCJldmVudCIsImtleUNvZGUiLCJ0cmlnZ2VyIiwiZmFkZUluIiwib2ZmIiwiZmFkZU91dCIsInBhcmVudHMiLCJ0b2dnbGUiLCJ0b2dnbGVDbGFzcyIsImlzTW9iaWxlRGV2aWNlIiwidGVzdCIsInBob25lUmVnZXgiLCJyZXBsYWNlUGhvbmVOdW1iZXJzV2l0aExpbmtzIiwiY29udGVudHMiLCJmaWx0ZXIiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJlYWNoIiwicmVwbGFjZVdpdGgiLCJ0ZXh0Q29udGVudCIsInJlY29yZEV2ZW50IiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsYWJlbCIsImNvbnNvbGUiLCJlcnJvciIsImdhIiwiZXhwciIsImV4dGVybmFsIiwib2JqIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaHJlZiIsImhvc3RuYW1lIiwiZW1haWwiLCJ0ZWwiLCJzdWJzdHJpbmciLCJ0YXJnZXQiLCJyZWwiLCIkYWxlcnQiLCIkYWxlcnRDbG9zZSIsInNsaWRlVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLCtCQUFBLEdBQVdBLG9DQUFBLEdBQWdCQyxtQkFBT0EsQ0FBQyxDQUFSLENBQTNCOztBQUVBQSxtQkFBT0EsQ0FBQyxDQUFSOztBQUVBQSxtQkFBT0EsQ0FBQyxDQUFSOztBQUVBQSxtQkFBT0EsQ0FBQyxDQUFSOztBQUVBQSxtQkFBT0EsQ0FBQyxDQUFSOztBQUVBRCxPQUFPRSxPQUFQLEdBQWlCRCxtQkFBT0EsQ0FBQyxDQUFSLENBQWpCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQ3BCQSxJQUFNRSxZQUFhLFlBQVk7QUFDM0IsUUFBSSxJQUFJQyxNQUFKLENBQVcsNkJBQVgsRUFBMENDLElBQTFDLENBQStDQyxVQUFVQyxTQUF6RCxLQUF1RSxJQUEzRSxFQUFpRjtBQUM3RSxlQUFPQyxXQUFXSixPQUFPSyxFQUFsQixDQUFQO0FBQ0g7O0FBRUQsV0FBTyxLQUFQO0FBQ0gsQ0FOaUIsRUFBbEI7O0FB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QixPQUE1QixFQUFxQzlJLEVBQUUsSUFBRixFQUFRQyxJQUFSLENBQWEsTUFBYixFQUFxQjZKLFNBQXJCLENBQStCLENBQS9CLENBQXJDO0FBQ0gsQ0FGRDs7QUFJQTlKLEVBQUUsWUFBWTtBQUNWQSxNQUFFLHFCQUFGLEVBQXlCQyxJQUF6QixDQUE4QjtBQUMxQjhKLGdCQUFRLFFBRGtCO0FBRTFCQyxhQUFLO0FBRnFCLEtBQTlCOztBQUtBO0FBQ0EsUUFBSTlCLGNBQUosRUFBb0I7QUFDaEJHO0FBQ0g7QUFDSixDQVZELEU7Ozs7Ozs7QUMzREEsNkNBQUk0QixTQUFTakssRUFBRSxnQkFBRixDQUFiO0FBQUEsSUFDSWtLLGNBQWNELE9BQU8zRSxJQUFQLENBQVksbUJBQVosQ0FEbEI7O0FBR0E0RSxZQUFZaEYsRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBVXhELENBQVYsRUFBYTtBQUNqQ0EsTUFBRUMsY0FBRjtBQUNBcEMsWUFBUXFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCcUksT0FBTzlHLElBQVAsQ0FBWSxRQUFaLENBQXJCO0FBQ0E4RyxXQUFPRSxPQUFQO0FBQ0gsQ0FKRCxFOzs7Ozs7O0FDSEEseUM7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6IlxcZGlzdFxcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5yZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xyXG5cclxucmVxdWlyZSgnc2xpY2stY2Fyb3VzZWwnKTtcclxuXHJcbnJlcXVpcmUoJ2pxdWVyeS1tYXRjaC1oZWlnaHQnKTtcclxuXHJcbnJlcXVpcmUoJ21hZ25pZmljLXBvcHVwJyk7XHJcblxyXG53aW5kb3cuQ29va2llcyA9IHJlcXVpcmUoJ2pzLWNvb2tpZScpO1xyXG5cclxuaW1wb3J0IFNjcmlwdHMgZnJvbSAnLi9zY3JpcHRzJztcclxuXHJcbmltcG9ydCBMYXp5TG9hZGluZyBmcm9tICcuL2xhenlsb2FkaW5nJztcclxuXHJcbmltcG9ydCBNYXRyaXggZnJvbSAnLi9tYXRyaXgnO1xyXG5cclxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9vdmVybGF5JztcclxuXHJcbmltcG9ydCBUcmFja2luZyBmcm9tICcuL3RyYWNraW5nJztcclxuXHJcbmltcG9ydCBBbGVydCBmcm9tICcuL2FsZXJ0JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvamF2YXNjcmlwdC9hcHAuanMiLCJjb25zdCBpZVZlcnNpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKG5ldyBSZWdFeHAoXCJNU0lFIChbMC05XXsxLH1bXFwuMC05XXswLH0pXCIpLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgIT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KFJlZ0V4cC4kMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KSgpO1xyXG5cclxuLy8gQ1NSRiBmaXhcclxuY29uc3QgY3NyZklucHV0TmFtZSA9ICQoJ21ldGFbbmFtZT1cImNzcmZUb2tlbk5hbWVcIl0nKS5hdHRyKCdjb250ZW50JyksXHJcbiAgICBjc3JmSW5wdXRWYWx1ZSA9ICQoJ21ldGFbbmFtZT1cImNzcmZUb2tlblZhbHVlXCJdJykuYXR0cignY29udGVudCcpO1xyXG5cclxud2luZG93LmNzcmZUb2tlbkRhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFtjc3JmSW5wdXROYW1lXTogY3NyZklucHV0VmFsdWVcclxuICAgIH07XHJcbn07XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2lucHV0W25hbWU9XCInICsgY3NyZklucHV0TmFtZSArICdcIl0nKS52YWwoY3NyZklucHV0VmFsdWUpO1xyXG5cclxuICAgIC8vIElFIE5vdGljZVxyXG4gICAgaWYgKGllVmVyc2lvbiAhPT0gZmFsc2UgJiYgaWVWZXJzaW9uIDw9IDEwKSB7XHJcbiAgICAgICAgJCgnZGl2I2llbm90aWNlJykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNjcm9sbCB0byBmaXJzdCBmb3JtIGVycm9yIG9uIHBhZ2UgbG9hZFxyXG4gICAgaWYgKCQoJ3VsLmVycm9ycycpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCd1bC5lcnJvcnMnKS5maXJzdCgpLm9mZnNldCgpLnRvcCArICdweCdcclxuICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhvbWVwYWdlXHJcbiAgICBsZXQgJGJhbm5lciA9ICQoJyNiYW5uZXInKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgcm93czogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWNjZXNzaWJpbGl0eSBwYW5lbFxyXG5cclxuICAgIHZhciBjbGFzc05hbWUgPSBcImhpZ2gtY29udHJhc3QtYm9keVwiO1xyXG4gICAgaWYgKENvb2tpZXMuZ2V0KFwiY29udHJhc3RcIikgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuaGlnaC1jb250cmFzdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGlnaC1jb250cmFzdC1ib2R5Jyk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2NvbnRyYXN0JywgJ2hpZ2gtY29udHJhc3QnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5ub3JtYWwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hpZ2gtY29udHJhc3QtYm9keScpO1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCdjb250cmFzdCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlRm9udFNpemUob3B0aW9uLCB0YWcsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRhZyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0IGZvbnRTaXplID0gZWxlbWVudC5jc3MoJ2ZvbnQtc2l6ZScpLnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRGb250U2l6ZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ2luY3JlYXNlJykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEZvbnRTaXplID0gcGFyc2VJbnQoZm9udFNpemUpICsgdmFsdWUgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gJ2RlY3JlYXNlJykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEZvbnRTaXplID0gcGFyc2VJbnQoZm9udFNpemUpIC0gdmFsdWUgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdmb250LXNpemUnLCB1cGRhdGVkRm9udFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VGb250U2l6ZXMob3B0aW9uLCB0YWdzLCBzaXplKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZUZvbnRTaXplKG9wdGlvbiwgdGFnc1tpXSwgc2l6ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEZvbnRTaXplKCkge1xyXG4gICAgICAgIGlmIChDb29raWVzLmdldChcInRleHQtc2l6ZVwiKSA9PT0gJ3NtYWxsJykge1xyXG4gICAgICAgICAgICBjaGFuZ2VGb250U2l6ZXMoJ2RlY3JlYXNlJywgWydib2R5JywgJ2gxJywgJ3AnLCAnYS5zbWFsbCcsICdhLm1lZGl1bScsICdhLmxhcmdlJywgJyNvdmVybGF5LW1lbnUgbGkgYScsICcjaW5mbyBsaSBhJywgJyNjb250YWN0LWRldGFpbHMgcCcsICcjYnJlYWRjcnVtYiBsaSddLCA1KTtcclxuICAgICAgICB9IGVsc2UgaWYgKENvb2tpZXMuZ2V0KFwidGV4dC1zaXplXCIpID09PSAnbGFyZ2UnKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZUZvbnRTaXplcygnaW5jcmVhc2UnLCBbJ2JvZHknLCAnaDEnLCAncCcsICdhLnNtYWxsJywgJ2EubWVkaXVtJywgJ2EubGFyZ2UnLCAnI292ZXJsYXktbWVudSBsaSBhJywgJyNpbmZvIGxpIGEnLCAnI2NvbnRhY3QtZGV0YWlscyBwJywgJyNicmVhZGNydW1iIGxpJ10sIDUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkRm9udFNpemUoKTtcclxuXHJcbiAgICAkKCdhLmxhcmdlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwidGV4dC1zaXplXCIpID09PSAnbGFyZ2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlRm9udFNpemVzKCdpbmNyZWFzZScsIFsnYm9keScsICdoMScsICdwJywgJ2Euc21hbGwnLCAnYS5tZWRpdW0nLCAnYS5sYXJnZScsICcjb3ZlcmxheS1tZW51IGxpIGEnLCAnI2luZm8gbGkgYScsICcjY29udGFjdC1kZXRhaWxzIHAnLCAnI2JyZWFkY3J1bWIgbGknXSwgQ29va2llcy5nZXQoXCJ0ZXh0LXNpemVcIikgPT09ICdzbWFsbCcgPyAxMCA6IDUpO1xyXG5cclxuICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJ0ZXh0LXNpemVcIikgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBDb29raWVzLnNldCgndGV4dC1zaXplJywgJ2xhcmdlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChDb29raWVzLmdldChcInRleHQtc2l6ZVwiKSA9PT0gJ3NtYWxsJykge1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZSgndGV4dC1zaXplJyk7XHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KCd0ZXh0LXNpemUnLCAnbGFyZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdhLnNtYWxsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwidGV4dC1zaXplXCIpID09PSAnc21hbGwnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlRm9udFNpemVzKCdkZWNyZWFzZScsIFsnYm9keScsICdoMScsICdwJywgJ2Euc21hbGwnLCAnYS5tZWRpdW0nLCAnYS5sYXJnZScsICcjb3ZlcmxheS1tZW51IGxpIGEnLCAnI2luZm8gbGkgYScsICcjY29udGFjdC1kZXRhaWxzIHAnLCAnI2JyZWFkY3J1bWIgbGknXSwgQ29va2llcy5nZXQoXCJ0ZXh0LXNpemVcIikgPT09ICdsYXJnZScgPyAxMCA6IDUpO1xyXG5cclxuICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJ0ZXh0LXNpemVcIikgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBDb29raWVzLnNldCgndGV4dC1zaXplJywgJ3NtYWxsJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChDb29raWVzLmdldChcInRleHQtc2l6ZVwiKSA9PT0gJ2xhcmdlJykge1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZSgndGV4dC1zaXplJyk7XHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KCd0ZXh0LXNpemUnLCAnc21hbGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdhLm1lZGl1bScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCd0ZXh0LXNpemUnKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0L3NjcmlwdHMuanMiLCJsZXQgJGxvYWRDb250YWluZXIgPSAkKCdkaXYjYWpheC1jb250YWluZXInKSxcclxuICAgICRsYXN0Q2hpbGQgPSAkKCdkaXYjYWpheC1jb250YWluZXIgLmxpc3QtY2FyZC1pdGVtJykubGFzdCgpLFxyXG4gICAgc2VjdGlvbiA9ICRsb2FkQ29udGFpbmVyLmRhdGEoJ3NlY3Rpb24nKSxcclxuICAgIG9mZnNldCA9IHBhcnNlSW50KCRsb2FkQ29udGFpbmVyLmRhdGEoJ2xpbWl0JyksIDEwKSxcclxuICAgIGxpbWl0ID0gcGFyc2VJbnQoJGxvYWRDb250YWluZXIuZGF0YSgnbGltaXQnKSwgMTApLFxyXG4gICAgb3JkZXIgPSAkbG9hZENvbnRhaW5lci5kYXRhKCdvcmRlcicpLFxyXG4gICAgc29ydCA9ICRsb2FkQ29udGFpbmVyLmRhdGEoJ3NvcnQnKSxcclxuICAgIHllYXIgPSAkbG9hZENvbnRhaW5lci5kYXRhKCd5ZWFyJyksXHJcbiAgICBtb250aCA9ICRsb2FkQ29udGFpbmVyLmRhdGEoJ21vbnRoJyksXHJcbiAgICBsb2FkaW5nID0gZmFsc2UsXHJcbiAgICBzaG91bGRMb2FkID0gJGxvYWRDb250YWluZXIubGVuZ3RoID4gMDtcclxuXHJcbi8vIGlzT25TY3JlZW4gLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzIyMjUyM1xyXG4kLmZuLmlzT25TY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgd2luID0gJCh3aW5kb3cpLFxyXG4gICAgICAgIGJvdW5kcyA9IHRoaXMub2Zmc2V0KCksXHJcbiAgICAgICAgdmlld3BvcnQgPSB7XHJcbiAgICAgICAgICAgIHRvcDogd2luLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICBsZWZ0OiB3aW4uc2Nyb2xsTGVmdCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB2aWV3cG9ydC5yaWdodCA9IHZpZXdwb3J0LmxlZnQgKyB3aW4ud2lkdGgoKTtcclxuICAgIHZpZXdwb3J0LmJvdHRvbSA9IHZpZXdwb3J0LnRvcCArIHdpbi5oZWlnaHQoKTtcclxuXHJcbiAgICBib3VuZHMucmlnaHQgPSBib3VuZHMubGVmdCArIHRoaXMub3V0ZXJXaWR0aCgpO1xyXG4gICAgYm91bmRzLmJvdHRvbSA9IGJvdW5kcy50b3AgKyB0aGlzLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgcmV0dXJuICghKHZpZXdwb3J0LnJpZ2h0IDwgYm91bmRzLmxlZnQgfHwgdmlld3BvcnQubGVmdCA+IGJvdW5kcy5yaWdodCB8fCB2aWV3cG9ydC5ib3R0b20gPCBib3VuZHMudG9wIHx8IHZpZXdwb3J0LnRvcCA+IGJvdW5kcy5ib3R0b20pKTtcclxufTtcclxuXHJcbiQuZm4uaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAhdGhpcy5jaGlsZHJlbigpLmxlbmd0aCAmJiAhdGhpcy50ZXh0KCkubWF0Y2goL1xcUy8pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKCkge1xyXG4gICAgbGV0IHVybCA9ICcvYWpheC8nICsgc2VjdGlvbiArICcvJyArIG9mZnNldCArICcvJyArIGxpbWl0ICsgJy8nICsgb3JkZXIgKyAnLycgKyBzb3J0ICsgJy8nO1xyXG5cclxuICAgIGlmICh5ZWFyICYmIG1vbnRoKSB7XHJcbiAgICAgICAgdXJsICs9ICcvJyArIHllYXIgKyAnLycgKyBtb250aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkKCkge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgJC5wb3N0KGdldFVybCgpLCBjc3JmVG9rZW5EYXRhKCksIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YSA9ICQudHJpbShkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKCEkKGRhdGEpLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICAvLyBBZGQgbmV3IGNoaWxkcmVuXHJcbiAgICAgICAgICAgICRsb2FkQ29udGFpbmVyLmFwcGVuZChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlc2V0IGxhc3QgY2hpbGRcclxuICAgICAgICAgICAgJGxhc3RDaGlsZCA9ICQoJ2RpdiNhamF4LWNvbnRhaW5lcicpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBvZmZzZXRcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGxpbWl0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB0byBub3QgdHJ5IGxvYWQgYW55bW9yZVxyXG4gICAgICAgICAgICBzaG91bGRMb2FkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXNldCBsb2FkaW5nIHN0YXRlXHJcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNob3VsZExvYWQgJiYgIWxvYWRpbmcgJiYgJGxhc3RDaGlsZC5sZW5ndGggPiAwICYmICRsYXN0Q2hpbGQuaXNPblNjcmVlbigpKSB7XHJcbiAgICAgICAgICAgIGxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2phdmFzY3JpcHQvbGF6eWxvYWRpbmcuanMiLCIvLyBBY2NvcmRpb25zXHJcbiQoJ2Rpdi5hY2NvcmRpb25zIGgzLmFjY29yZGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpc09wZW4gPSAkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJyk7XHJcblxyXG4gICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdoMy5hY2NvcmRpb24nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2Rpdi5hY2NvcmRpb25zIGgzLmFjY29yZGlvbicpLmZpcnN0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAvLyBHYWxsZXJpZXNcclxuICAgICQoJy5nYWxsZXJ5LXNsaWRlcicpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICByb3dzOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSW1hZ2UgcG9wdXBzXHJcbiAgICAkKCcuZ2FsbGVyeS1waW50ZXJlc3QsIC5nYWxsZXJ5LWdyaWQsIC5nYWxsZXJ5LXNsaWRlcicpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgIGRlbGVnYXRlOiAnYScsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICByZW1vdmFsRGVsYXk6IDUwMCwgLy9kZWxheSByZW1vdmFsIGJ5IFggdG8gYWxsb3cgb3V0LWFuaW1hdGlvblxyXG4gICAgICAgIGdhbGxlcnk6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGp1c3QgYSBoYWNrIHRoYXQgYWRkcyBtZnAtYW5pbSBjbGFzcyB0byBtYXJrdXBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3QuaW1hZ2UubWFya3VwID0gdGhpcy5zdC5pbWFnZS5tYXJrdXAucmVwbGFjZSgnbWZwLWZpZ3VyZScsICdtZnAtZmlndXJlIG1mcC13aXRoLWFuaW0nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3QubWFpbkNsYXNzID0gdGhpcy5zdC5lbC5hdHRyKCdkYXRhLWVmZmVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxyXG4gICAgICAgIG1pZENsaWNrOiB0cnVlIC8vIGFsbG93IG9wZW5pbmcgcG9wdXAgb24gbWlkZGxlIG1vdXNlIGNsaWNrLiBBbHdheXMgc2V0IGl0IHRvIHRydWUgaWYgeW91IGRvbid0IHByb3ZpZGUgYWx0ZXJuYXRpdmUgc291cmNlLlxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5nYWxsZXJ5LXNsaWRlci10b3AnKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBhc05hdkZvcjogJy5nYWxsZXJ5LXNsaWRlci1ib3R0b20nXHJcbiAgICB9KTtcclxuICAgICQoJy5nYWxsZXJ5LXNsaWRlci1ib3R0b20nKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFzTmF2Rm9yOiAnLmdhbGxlcnktc2xpZGVyLXRvcCcsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGdyaWRpZnkuaW5pdCgpO1xyXG5cclxuICAgIC8vIENhbGxvdXRzIHNsaWRlclxyXG4gICAgJCgnLmNhbGxvdXRzLXNsaWRlcicpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICByb3dzOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0L21hdHJpeC5qcyIsIi8vIE9wZW4vY2xvc2Ugb3ZlcmxheVxyXG5sZXQgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpLFxyXG4gICAgJG92ZXJsYXlCYXIgPSAkKCdkaXYjb3ZlcmxheS1iYXInKSxcclxuICAgICRvdmVybGF5TWVudSA9ICQoJ2RpdiNvdmVybGF5LW1lbnUnKSxcclxuICAgICRtb2JpbGVCYXIgPSAkKCduYXYjb3ZlcmxheS1iYXInKSxcclxuICAgIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuJCgnLm9wZW4tb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkYm9keS5hZGRDbGFzcygnb3ZlcmxheS1vcGVuJyk7XHJcblxyXG4gICAgJGJvZHkua2V5dXAoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICQoJy5jbG9zZS1vdmVybGF5JykudHJpZ2dlcignY2xpY2snKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRvdmVybGF5TWVudS5mYWRlSW4oKTtcclxufSk7XHJcblxyXG4kKCcuY2xvc2Utb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJGJvZHkub2ZmKCdrZXl1cCcpO1xyXG4gICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ292ZXJsYXktb3BlbicpO1xyXG4gICAgJG92ZXJsYXlNZW51LmZhZGVPdXQoKTtcclxufSk7XHJcblxyXG4vLyBFeHBhbmQvY29udHJhY3QgaW5zaWRlIG92ZXJsYXlcclxuJCgnZGl2I292ZXJsYXktbWVudSBuYXYgPiB1bCA+IGxpID4gYSBzcGFuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgc3ViIG1lbnUgdmlzaWJpbGl0eS5cclxuICAgICQodGhpcykucGFyZW50cygnbGknKVxyXG4gICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgLmNoaWxkcmVuKCd1bCcpXHJcbiAgICAgICAgLnRvZ2dsZSgpO1xyXG5cclxuICAgIC8vIFRvZ2dsZSBpY29uIGZvciBkcm9wZG93bi5cclxuICAgICQodGhpcykuZmluZCgnW2RhdGEtZmEtcHJvY2Vzc2VkXScpXHJcbiAgICAgICAgLnRvZ2dsZUNsYXNzKCdmYS1taW51cycpXHJcbiAgICAgICAgLnRvZ2dsZUNsYXNzKCdmYS1wbHVzJyk7XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmIChzdCA8IDUwKSB7XHJcbiAgICAgICAgJG92ZXJsYXlCYXIucmVtb3ZlQ2xhc3MoJ29mZnNjcmVlbicpO1xyXG4gICAgfSBlbHNlIGlmIChzdCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgICAkb3ZlcmxheUJhci5hZGRDbGFzcygnb2Zmc2NyZWVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRvdmVybGF5QmFyLnJlbW92ZUNsYXNzKCdvZmZzY3JlZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0U2Nyb2xsVG9wID0gc3Q7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvamF2YXNjcmlwdC9vdmVybGF5LmpzIiwibGV0IGlzTW9iaWxlRGV2aWNlID0gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLFxyXG4gICAgcGhvbmVSZWdleCA9IC8oKDB8XFwrNDRcXHM/XFwoMFxcKXxcXCs0NClcXHM/XFxkK1xccz9cXGQrXFxzP1xcZCspLzsgLy8gaHR0cHM6Ly9yZWdleDEwMS5jb20vci9YZDZsWlhcclxuXHJcbndpbmRvdy5yZXBsYWNlUGhvbmVOdW1iZXJzV2l0aExpbmtzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnYm9keSAqJykuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERTtcclxuICAgIH0pLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVwbGFjZVdpdGgodGhpcy50ZXh0Q29udGVudC5yZXBsYWNlKHBob25lUmVnZXgsICc8YSBocmVmPVwidGVsOiQmXCI+JCY8L2E+JykpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG53aW5kb3cucmVjb3JkRXZlbnQgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93WydnYSddID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F0dGVtcHRpbmcgdG8gdHJhY2sgZXZlbnQgd2l0aCBHQSBub3QgaW5zdGFsbGVkLCBwbGVhc2UgY2hlY2sgYmVmb3JlIGdvLWxpdmUhJyk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXZlbnQ6JywgY2F0ZWdvcnkgKyAnLCAnICsgYWN0aW9uICsgJywgJyArIGxhYmVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpO1xyXG59O1xyXG5cclxuLy8gTGluayB0cmFja2luZ1xyXG4kLmV4cHJbJzonXS5leHRlcm5hbCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIGlmIChvYmoudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnYScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iai5ocmVmICYmICFvYmouaHJlZi5tYXRjaCgvXm1haWx0bzovKSAmJiAhb2JqLmhyZWYubWF0Y2goL15qYXZhc2NyaXB0Oi8pICYmIChvYmouaG9zdG5hbWUucmVwbGFjZSgvXnd3d1xcLi9pLCAnJykgIT09IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLnJlcGxhY2UoL153d3dcXC4vaSwgJycpKTtcclxufTtcclxuXHJcbiQuZXhwclsnOiddLmVtYWlsID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgaWYgKG9iai50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdhJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqLmhyZWYgJiYgb2JqLmhyZWYubWF0Y2goL15tYWlsdG86Lyk7XHJcbn07XHJcblxyXG4kLmV4cHJbJzonXS50ZWwgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICBpZiAob2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2EnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvYmouaHJlZiAmJiBvYmouaHJlZi5tYXRjaCgvXnRlbDovKTtcclxufTtcclxuXHJcbiQoJ2E6ZXh0ZXJuYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZWNvcmRFdmVudCgnRXh0ZXJuYWwgTGluaycsICdDbGljaycsIHRoaXMuaG9zdG5hbWUucmVwbGFjZSgvaHR0cChzKT86XFwvXFwvL2kpKTtcclxufSk7XHJcblxyXG4kKCdhOmVtYWlsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVjb3JkRXZlbnQoJ01haWx0bycsICdDbGljaycsICQodGhpcykuYXR0cignaHJlZicpLnN1YnN0cmluZyg3KSk7XHJcbn0pO1xyXG5cclxuJCgnYTp0ZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZWNvcmRFdmVudCgnUGhvbmUgTnVtYmVyJywgJ0NsaWNrJywgJCh0aGlzKS5hdHRyKCdocmVmJykuc3Vic3RyaW5nKDQpKTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2E6ZXh0ZXJuYWwsIGE6ZW1haWwnKS5hdHRyKHtcclxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgICAgIHJlbDogJ2V4dGVybmFsJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29udmVydCBwaG9uZSBudW1iZXJzXHJcbiAgICBpZiAoaXNNb2JpbGVEZXZpY2UpIHtcclxuICAgICAgICByZXBsYWNlUGhvbmVOdW1iZXJzV2l0aExpbmtzKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvamF2YXNjcmlwdC90cmFja2luZy5qcyIsImxldCAkYWxlcnQgPSAkKCdkaXYjc2l0ZS1hbGVydCcpLFxyXG4gICAgJGFsZXJ0Q2xvc2UgPSAkYWxlcnQuZmluZCgnI3NpdGUtYWxlcnQtY2xvc2UnKTtcclxuXHJcbiRhbGVydENsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBDb29raWVzLnNldCgnYWxlcnQnLCAkYWxlcnQuZGF0YSgnZXhwaXJ5JykpO1xyXG4gICAgJGFsZXJ0LnNsaWRlVXAoKTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0L2FsZXJ0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS9mb250YXdlc29tZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9