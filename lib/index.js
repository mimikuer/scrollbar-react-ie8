(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactScrollbarIE8"] = factory(require("react"));
	else
		root["ReactScrollbarIE8"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/* The following list is defined in React's core */
	var IS_UNITLESS = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	module.exports = function(name, value) {
	  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
	    return value + 'px';
	  } else {
	    return value;
	  }
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _domCss = __webpack_require__(5);

	var _domCss2 = _interopRequireDefault(_domCss);

	__webpack_require__(6);

	var _util = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var disableSelectStyle = {
	    userSelect: 'none'
	};

	var disableSelectStyleReset = {
	    userSelect: ''
	};

	var containerStyleAutoHeight = {
	    height: 'auto'
	};

	var viewStyleAutoHeight = {
	    position: 'relative',
	    top: undefined,
	    left: undefined,
	    right: undefined,
	    bottom: undefined
	};

	function returnFalse() {
	    return false;
	}

	function getScrollbarSize() {
	    var outer = document.createElement('div');
	    document.body.appendChild(outer);
	    var outerStyle = outer.style;
	    outerStyle.position = 'absolute';
	    outerStyle.width = '100px';
	    outerStyle.height = '100px';
	    outerStyle.overflow = 'scroll';
	    outerStyle.top = '-99999px';
	    var scrollbarWidth = outer.offsetWidth - outer.clientWidth;
	    var scrollbarHeight = outer.offsetHeight - outer.clientHeight;
	    document.body.removeChild(outer);

	    if (!scrollbarWidth && window.navigator.platform.indexOf("Mac") < 0) {
	        scrollbarWidth = 17;
	        scrollbarHeight = 17;
	    }

	    return { scrollbarWidth: scrollbarWidth, scrollbarHeight: scrollbarHeight };
	}

	var _getScrollbarSize = getScrollbarSize(),
	    systemScrollBarWidth = _getScrollbarSize.scrollbarWidth,
	    systemScrollBarHeight = _getScrollbarSize.scrollbarHeight;

	var rAF = window.requestAnimationFrame;
	var cAF = window.cancelAnimationFrame;

	var _elementStyle = document.createElement('div').style;
	var _vendor = function () {
	    var i = void 0;
	    var transform = void 0;
	    var vendor = void 0;
	    var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
	    var _i = void 0;
	    var _len = void 0;
	    for (i = _i = 0, _len = vendors.length; _i < _len; i = ++_i) {
	        vendor = vendors[i];
	        transform = vendor + 'ransform';
	        if (transform in _elementStyle) {
	            return vendor.substr(0, vendor.length - 1);
	        }
	    }
	    return false;
	}();

	function _prefixStyle(style) {
	    if (_vendor === false) {
	        return false;
	    }
	    if (_vendor === '') {
	        return style;
	    }
	    return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	var transform = _prefixStyle('transform');
	var hasTransform = transform !== false;

	var Scrollbar = function (_Component) {
	    _inherits(Scrollbar, _Component);

	    function Scrollbar(props) {
	        _classCallCheck(this, Scrollbar);

	        var _this = _possibleConstructorReturn(this, (Scrollbar.__proto__ || Object.getPrototypeOf(Scrollbar)).call(this, props));

	        ['handleScroll', 'handleMousewheel', 'handleViewMouseEnter', 'handleViewMouseLeave', 'handleTrackMouseEnter', 'handleTrackMouseLeave', 'handleHorizontalTrackMouseDown', 'handleVerticalTrackMouseDown', 'handleHorizontalThumbMouseDown', 'handleVerticalThumbMouseDown', 'handleWindowResize', 'handleDrag', 'handleDragEnd'].forEach(function (element) {
	            if (this[element]) {
	                this[element] = this[element].bind(this);
	            }
	        }, _this);
	        return _this;
	    }

	    _createClass(Scrollbar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.addEventListener();
	            this.update();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.update();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.requestFrame && cAF && cAF(this.requestFrame);
	            this.removeEventListener();
	            clearTimeout(this.hideTracksTimeout);
	            clearInterval(this.detectScrollingInterval);
	        }
	    }, {
	        key: 'getContainer',
	        value: function getContainer() {
	            var container = this.refs.container;

	            return container;
	        }
	    }, {
	        key: 'getThumbHorizontalWidth',
	        value: function getThumbHorizontalWidth() {
	            var _props = this.props,
	                thumbSize = _props.thumbSize,
	                thumbMinSize = _props.thumbMinSize;
	            var _refs = this.refs,
	                view = _refs.view,
	                trackHorizontal = _refs.trackHorizontal;
	            var scrollWidth = view.scrollWidth,
	                clientWidth = view.clientWidth;

	            var trackWidth = (0, _util.getInnerWidth)(trackHorizontal);
	            var width = Math.ceil(clientWidth / scrollWidth * trackWidth) || 0;
	            if (trackWidth === width) return 0;
	            if (thumbSize) return thumbSize;
	            return Math.max(width, thumbMinSize);
	        }
	    }, {
	        key: 'getThumbVerticalHeight',
	        value: function getThumbVerticalHeight() {
	            var _props2 = this.props,
	                thumbSize = _props2.thumbSize,
	                thumbMinSize = _props2.thumbMinSize;
	            var _refs2 = this.refs,
	                view = _refs2.view,
	                trackVertical = _refs2.trackVertical;
	            var scrollHeight = view.scrollHeight,
	                clientHeight = view.clientHeight;

	            var trackHeight = (0, _util.getInnerHeight)(trackVertical);
	            var height = Math.ceil(clientHeight / scrollHeight * trackHeight) || 0;
	            if (trackHeight === height) return 0;
	            if (thumbSize) return thumbSize;
	            return Math.max(height, thumbMinSize);
	        }
	    }, {
	        key: 'getViewValue',
	        value: function getViewValue() {
	            var view = this.refs.view;
	            var scrollLeft = view.scrollLeft,
	                scrollTop = view.scrollTop,
	                scrollWidth = view.scrollWidth,
	                scrollHeight = view.scrollHeight,
	                clientWidth = view.clientWidth,
	                clientHeight = view.clientHeight;


	            return {
	                left: scrollLeft / (scrollWidth - clientWidth) || 0,
	                top: scrollTop / (scrollHeight - clientHeight) || 0,
	                scrollLeft: scrollLeft,
	                scrollTop: scrollTop,
	                scrollWidth: scrollWidth,
	                scrollHeight: scrollHeight,
	                clientWidth: clientWidth,
	                clientHeight: clientHeight
	            };
	        }
	    }, {
	        key: 'getScrollLeftForOffset',
	        value: function getScrollLeftForOffset(offset) {
	            var _refs3 = this.refs,
	                view = _refs3.view,
	                trackHorizontal = _refs3.trackHorizontal;
	            var scrollWidth = view.scrollWidth,
	                clientWidth = view.clientWidth;

	            var trackWidth = (0, _util.getInnerWidth)(trackHorizontal);
	            var thumbWidth = this.getThumbHorizontalWidth();
	            return (offset / (trackWidth - thumbWidth) || 0) * (scrollWidth - clientWidth);
	        }
	    }, {
	        key: 'getScrollTopForOffset',
	        value: function getScrollTopForOffset(offset) {
	            var _refs4 = this.refs,
	                view = _refs4.view,
	                trackVertical = _refs4.trackVertical;
	            var scrollHeight = view.scrollHeight,
	                clientHeight = view.clientHeight;

	            var trackHeight = (0, _util.getInnerHeight)(trackVertical);
	            var thumbHeight = this.getThumbVerticalHeight();
	            return (offset / (trackHeight - thumbHeight) || 0) * (scrollHeight - clientHeight);
	        }
	    }, {
	        key: 'getScrollLeft',
	        value: function getScrollLeft() {
	            var view = this.refs.view;

	            return view.scrollLeft;
	        }
	    }, {
	        key: 'getScrollTop',
	        value: function getScrollTop() {
	            var view = this.refs.view;

	            return view.scrollTop;
	        }
	    }, {
	        key: 'getScrollWidth',
	        value: function getScrollWidth() {
	            var view = this.refs.view;

	            return view.scrollWidth;
	        }
	    }, {
	        key: 'getScrollHeight',
	        value: function getScrollHeight() {
	            var view = this.refs.view;

	            return view.scrollHeight;
	        }
	    }, {
	        key: 'getClientWidth',
	        value: function getClientWidth() {
	            var view = this.refs.view;

	            return view.clientWidth;
	        }
	    }, {
	        key: 'getClientHeight',
	        value: function getClientHeight() {
	            var view = this.refs.view;

	            return view.clientHeight;
	        }
	    }, {
	        key: 'scrollLeft',
	        value: function scrollLeft() {
	            var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var view = this.refs.view;

	            view.scrollLeft = left;
	        }
	    }, {
	        key: 'scrollTop',
	        value: function scrollTop() {
	            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var view = this.refs.view;

	            view.scrollTop = top;
	        }
	    }, {
	        key: 'scrollToLeft',
	        value: function scrollToLeft() {
	            var view = this.refs.view;

	            view.scrollLeft = 0;
	        }
	    }, {
	        key: 'scrollToTop',
	        value: function scrollToTop() {
	            var view = this.refs.view;

	            view.scrollTop = 0;
	        }
	    }, {
	        key: 'scrollToRight',
	        value: function scrollToRight() {
	            var view = this.refs.view;

	            view.scrollLeft = view.scrollWidth;
	        }
	    }, {
	        key: 'scrollToBottom',
	        value: function scrollToBottom() {
	            var view = this.refs.view;

	            view.scrollTop = view.scrollHeight;
	        }
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener() {
	            var _refs5 = this.refs,
	                view = _refs5.view,
	                trackHorizontal = _refs5.trackHorizontal,
	                trackVertical = _refs5.trackVertical,
	                thumbHorizontal = _refs5.thumbHorizontal,
	                thumbVertical = _refs5.thumbVertical;

	            (0, _util.addListener)(view, 'scroll', this.handleScroll);
	            (0, _util.addListener)(view, 'mouseenter', this.handleViewMouseEnter);
	            (0, _util.addListener)(view, 'mouseleave', this.handleViewMouseLeave);

	            (0, _util.addListener)(trackHorizontal, 'mouseenter', this.handleTrackMouseEnter);
	            (0, _util.addListener)(trackHorizontal, 'mouseleave', this.handleTrackMouseLeave);
	            (0, _util.addListener)(trackHorizontal, 'mousedown', this.handleHorizontalTrackMouseDown);

	            (0, _util.addListener)(trackVertical, 'mouseenter', this.handleTrackMouseEnter);
	            (0, _util.addListener)(trackVertical, 'mouseleave', this.handleTrackMouseLeave);
	            (0, _util.addListener)(trackVertical, 'mousedown', this.handleVerticalTrackMouseDown);

	            (0, _util.addListener)(thumbHorizontal, 'mousedown', this.handleHorizontalThumbMouseDown);
	            (0, _util.addListener)(thumbVertical, 'mousedown', this.handleVerticalThumbMouseDown);

	            (0, _util.addListener)(window, 'resize', this.handleWindowResize);
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener() {
	            var _refs6 = this.refs,
	                view = _refs6.view,
	                trackHorizontal = _refs6.trackHorizontal,
	                trackVertical = _refs6.trackVertical,
	                thumbHorizontal = _refs6.thumbHorizontal;

	            (0, _util.removeListener)(view, 'scroll', this.handleScroll);

	            (0, _util.removeListener)(trackHorizontal, 'mouseenter', this.handleTrackMouseEnter);
	            (0, _util.removeListener)(trackHorizontal, 'mouseleave', this.handleTrackMouseLeave);
	            (0, _util.removeListener)(trackHorizontal, 'mousedown', this.handleHorizontalTrackMouseDown);

	            (0, _util.removeListener)(trackVertical, 'mouseenter', this.handleTrackMouseEnter);
	            (0, _util.removeListener)(trackVertical, 'mouseleave', this.handleTrackMouseLeave);
	            (0, _util.removeListener)(trackVertical, 'mousedown', this.handleVerticalTrackMouseDown);

	            (0, _util.removeListener)(thumbHorizontal, 'mousedown', this.handleHorizontalThumbMouseDown);
	            (0, _util.removeListener)(thumbHorizontal, 'mousedown', this.handleVerticalThumbMouseDown);

	            (0, _util.removeListener)(window, 'resize', this.handleWindowResize);

	            this.teardownDragging();
	        }
	    }, {
	        key: 'handleMousewheel',
	        value: function handleMousewheel(event) {
	            var _props3 = this.props,
	                onWheel = _props3.onWheel,
	                mouserwheelAlone = _props3.mouserwheelAlone;
	            var view = this.refs.view;

	            if (onWheel) onScroll(event);

	            if (mouserwheelAlone) {
	                var values = this.getViewValue();
	                var scrollTop = values.scrollTop,
	                    scrollHeight = values.scrollHeight,
	                    clientHeight = values.clientHeight;


	                var delta = -event.deltaY;
	                // 向上滚 || 向下滚
	                if (delta > 0 && scrollTop <= delta || delta < 0 && scrollHeight - clientHeight - scrollTop <= -1 * delta) {
	                    // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
	                    view.scrollTop = delta > 0 ? 0 : scrollHeight;
	                    event.preventDefault();
	                }
	            }

	            event.stopPropagation();
	        }
	    }, {
	        key: 'handleScroll',
	        value: function handleScroll(event) {
	            var _this2 = this;

	            var _props4 = this.props,
	                onScroll = _props4.onScroll,
	                onScrollFrame = _props4.onScrollFrame;

	            if (onScroll) onScroll(event);
	            this.update(function (values) {
	                var scrollLeft = values.scrollLeft,
	                    scrollTop = values.scrollTop;

	                _this2.viewScrollLeft = scrollLeft;
	                _this2.viewScrollTop = scrollTop;
	                if (onScrollFrame) onScrollFrame(values);
	            });
	            this.detectScrolling();
	        }
	    }, {
	        key: 'handleViewMouseEnter',
	        value: function handleViewMouseEnter() {
	            var autoHide = this.props.autoHide;

	            if (!autoHide) return;
	            this.showTracks();
	        }
	    }, {
	        key: 'handleViewMouseLeave',
	        value: function handleViewMouseLeave() {
	            var autoHide = this.props.autoHide;

	            if (!autoHide) return;
	            this.hideTracks();
	        }
	    }, {
	        key: 'handleScrollStart',
	        value: function handleScrollStart() {
	            var onScrollStart = this.props.onScrollStart;

	            if (onScrollStart) onScrollStart();
	            this.handleScrollStartAutoHide();
	        }
	    }, {
	        key: 'handleScrollStartAutoHide',
	        value: function handleScrollStartAutoHide() {
	            var autoHide = this.props.autoHide;

	            if (!autoHide) return;
	            this.showTracks();
	        }
	    }, {
	        key: 'handleScrollStop',
	        value: function handleScrollStop() {
	            var onScrollStop = this.props.onScrollStop;

	            if (onScrollStop) onScrollStop();
	            this.handleScrollStopAutoHide();
	        }
	    }, {
	        key: 'handleScrollStopAutoHide',
	        value: function handleScrollStopAutoHide() {
	            var autoHide = this.props.autoHide;

	            if (!autoHide) return;
	            this.hideTracks();
	        }
	    }, {
	        key: 'handleWindowResize',
	        value: function handleWindowResize() {
	            var _this3 = this;

	            clearTimeout(this.resizeTimerKey);
	            this.resizeTimerKey = setTimeout(function () {
	                _this3.update();
	            }, 100);
	        }
	    }, {
	        key: 'handleHorizontalTrackMouseDown',
	        value: function handleHorizontalTrackMouseDown(event) {
	            if (event.preventDefault) {
	                event.preventDefault();
	            } else {
	                event.returnValue = false;
	            }

	            var _refs7 = this.refs,
	                view = _refs7.view,
	                trackHorizontal = _refs7.trackHorizontal;
	            var clientX = event.clientX;

	            var _trackHorizontal$getB = trackHorizontal.getBoundingClientRect(),
	                targetLeft = _trackHorizontal$getB.left;

	            var thumbWidth = this.getThumbHorizontalWidth();
	            var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
	            view.scrollLeft = this.getScrollLeftForOffset(offset);
	        }
	    }, {
	        key: 'handleVerticalTrackMouseDown',
	        value: function handleVerticalTrackMouseDown(event) {
	            if (event.preventDefault) {
	                event.preventDefault();
	            } else {
	                event.returnValue = false;
	            }
	            var _refs8 = this.refs,
	                view = _refs8.view,
	                trackVertical = _refs8.trackVertical;
	            var clientY = event.clientY;

	            var _trackVertical$getBou = trackVertical.getBoundingClientRect(),
	                targetTop = _trackVertical$getBou.top;

	            var thumbHeight = this.getThumbVerticalHeight();
	            var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
	            view.scrollTop = this.getScrollTopForOffset(offset);
	        }
	    }, {
	        key: 'handleHorizontalThumbMouseDown',
	        value: function handleHorizontalThumbMouseDown(event) {
	            if (event.preventDefault) {
	                event.preventDefault();
	                event.stopPropagation();
	            } else {
	                event.returnValue = false;
	                event.cancelBabble = true;
	            }
	            this.handleDragStart(event);
	            var clientX = event.clientX;
	            var thumbHorizontal = this.refs.thumbHorizontal;
	            var offsetWidth = thumbHorizontal.offsetWidth;

	            var _thumbHorizontal$getB = thumbHorizontal.getBoundingClientRect(),
	                left = _thumbHorizontal$getB.left;

	            this.prevPageX = offsetWidth - (clientX - left);
	            return false;
	        }
	    }, {
	        key: 'handleVerticalThumbMouseDown',
	        value: function handleVerticalThumbMouseDown(event) {
	            if (event.preventDefault) {
	                event.preventDefault();
	                event.stopPropagation();
	            } else {
	                event.returnValue = false;
	                event.cancelBabble = true;
	            }
	            this.handleDragStart(event);
	            var clientY = event.clientY;
	            var thumbVertical = this.refs.thumbVertical;
	            var offsetHeight = thumbVertical.offsetHeight;

	            var _thumbVertical$getBou = thumbVertical.getBoundingClientRect(),
	                top = _thumbVertical$getBou.top;

	            this.prevPageY = offsetHeight - (clientY - top);
	            return false;
	        }
	    }, {
	        key: 'setupDragging',
	        value: function setupDragging() {
	            (0, _domCss2.default)(document.body, disableSelectStyle);
	            (0, _util.addListener)(document, 'mousemove', this.handleDrag);
	            (0, _util.addListener)(document, 'mouseup', this.handleDragEnd);
	            try {
	                document.onselectstart = returnFalse;
	            } catch (e) {}
	        }
	    }, {
	        key: 'teardownDragging',
	        value: function teardownDragging() {
	            (0, _domCss2.default)(document.body, disableSelectStyleReset);
	            (0, _util.removeListener)(document, 'mousemove', this.handleDrag);
	            (0, _util.removeListener)(document, 'mouseup', this.handleDragEnd);
	            try {
	                document.onselectstart = undefined;
	            } catch (e) {}
	        }
	    }, {
	        key: 'handleDragStart',
	        value: function handleDragStart(event) {
	            this.dragging = true;
	            if (event.stopImmediatePropagation) {
	                event.stopImmediatePropagation();
	            } else {
	                event.returnValue = false;
	            }

	            this.setupDragging();
	            return false;
	        }
	    }, {
	        key: 'handleDrag',
	        value: function handleDrag(event) {
	            if (this.prevPageX) {
	                var clientX = event.clientX;
	                var _refs9 = this.refs,
	                    view = _refs9.view,
	                    trackHorizontal = _refs9.trackHorizontal;

	                var _trackHorizontal$getB2 = trackHorizontal.getBoundingClientRect(),
	                    trackLeft = _trackHorizontal$getB2.left;

	                var thumbWidth = this.getThumbHorizontalWidth();
	                var clickPosition = thumbWidth - this.prevPageX;
	                var offset = -trackLeft + clientX - clickPosition;
	                view.scrollLeft = this.getScrollLeftForOffset(offset);
	            }
	            if (this.prevPageY) {
	                var clientY = event.clientY;
	                var _refs10 = this.refs,
	                    _view = _refs10.view,
	                    trackVertical = _refs10.trackVertical;

	                var _trackVertical$getBou2 = trackVertical.getBoundingClientRect(),
	                    trackTop = _trackVertical$getBou2.top;

	                var thumbHeight = this.getThumbVerticalHeight();
	                var _clickPosition = thumbHeight - this.prevPageY;
	                var _offset = -trackTop + clientY - _clickPosition;
	                _view.scrollTop = this.getScrollTopForOffset(_offset);
	            }
	            return false;
	        }
	    }, {
	        key: 'handleDragEnd',
	        value: function handleDragEnd() {
	            this.dragging = false;
	            this.prevPageX = this.prevPageY = 0;
	            this.teardownDragging();
	            this.handleDragEndAutoHide();
	        }
	    }, {
	        key: 'handleDragEndAutoHide',
	        value: function handleDragEndAutoHide() {
	            var autoHide = this.props.autoHide;

	            if (!autoHide) return;
	            this.hideTracks();
	        }
	    }, {
	        key: 'handleTrackMouseEnter',
	        value: function handleTrackMouseEnter() {
	            this.trackMouseOver = true;
	            this.handleTrackMouseEnterAutoHide();
	        }
	    }, {
	        key: 'handleTrackMouseEnterAutoHide',
	        value: function handleTrackMouseEnterAutoHide() {
	            var autoHide = this.props.autoHide;

	            if (!autoHide) return;
	            this.showTracks();
	        }
	    }, {
	        key: 'handleTrackMouseLeave',
	        value: function handleTrackMouseLeave() {
	            this.trackMouseOver = false;
	            this.handleTrackMouseLeaveAutoHide();
	        }
	    }, {
	        key: 'handleTrackMouseLeaveAutoHide',
	        value: function handleTrackMouseLeaveAutoHide() {
	            var autoHide = this.props.autoHide;

	            if (!autoHide) return;
	            this.hideTracks();
	        }
	    }, {
	        key: 'showTracks',
	        value: function showTracks() {
	            var _refs11 = this.refs,
	                trackHorizontal = _refs11.trackHorizontal,
	                trackVertical = _refs11.trackVertical;

	            clearTimeout(this.hideTracksTimeout);
	            (0, _domCss2.default)(trackHorizontal, { opacity: 1 });
	            (0, _domCss2.default)(trackVertical, { opacity: 1 });
	        }
	    }, {
	        key: 'hideTracks',
	        value: function hideTracks() {
	            if (this.dragging) return;
	            if (this.scrolling) return;
	            if (this.trackMouseOver) return;
	            var autoHideTimeout = this.props.autoHideTimeout;
	            var _refs12 = this.refs,
	                trackHorizontal = _refs12.trackHorizontal,
	                trackVertical = _refs12.trackVertical;

	            clearTimeout(this.hideTracksTimeout);
	            this.hideTracksTimeout = setTimeout(function () {
	                (0, _domCss2.default)(trackHorizontal, { opacity: 0 });
	                (0, _domCss2.default)(trackVertical, { opacity: 0 });
	            }, autoHideTimeout);
	        }
	    }, {
	        key: 'detectScrolling',
	        value: function detectScrolling() {
	            var _this4 = this;

	            if (this.scrolling) return;
	            this.scrolling = true;
	            this.handleScrollStart();
	            this.detectScrollingInterval = setInterval(function () {
	                if (_this4.lastViewScrollLeft === _this4.viewScrollLeft && _this4.lastViewScrollTop === _this4.viewScrollTop) {
	                    clearInterval(_this4.detectScrollingInterval);
	                    _this4.scrolling = false;
	                    _this4.handleScrollStop();
	                }
	                _this4.lastViewScrollLeft = _this4.viewScrollLeft;
	                _this4.lastViewScrollTop = _this4.viewScrollTop;
	            }, 100);
	        }
	    }, {
	        key: 'update',
	        value: function update(callback) {
	            var _this5 = this;

	            if (rAF) {
	                if (this.requestFrame && cAF) {
	                    cAF(this.requestFrame);
	                }
	                this.requestFrame = rAF(function () {
	                    _this5.requestFrame = undefined;
	                    _this5._update(callback);
	                });
	            } else {
	                this._update(callback);
	            }
	        }
	    }, {
	        key: '_update',
	        value: function _update(callback) {
	            var _props5 = this.props,
	                onUpdate = _props5.onUpdate,
	                hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded;

	            var values = this.getViewValue();
	            var _refs13 = this.refs,
	                thumbHorizontal = _refs13.thumbHorizontal,
	                thumbVertical = _refs13.thumbVertical,
	                trackHorizontal = _refs13.trackHorizontal,
	                trackVertical = _refs13.trackVertical;
	            var scrollLeft = values.scrollLeft,
	                clientWidth = values.clientWidth,
	                scrollWidth = values.scrollWidth;

	            var trackHorizontalWidth = (0, _util.getInnerWidth)(trackHorizontal);
	            var thumbHorizontalWidth = this.getThumbHorizontalWidth();
	            var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth) || 0;
	            var thumbHorizontalStyle = {
	                width: thumbHorizontalWidth
	            };

	            if (hasTransform) {
	                thumbHorizontalStyle[transform] = 'translateX(' + thumbHorizontalX + 'px)';
	            } else {
	                thumbHorizontalStyle.left = thumbHorizontalX;
	            }

	            var scrollTop = values.scrollTop,
	                clientHeight = values.clientHeight,
	                scrollHeight = values.scrollHeight;

	            var trackVerticalHeight = (0, _util.getInnerHeight)(trackVertical);
	            var thumbVerticalHeight = this.getThumbVerticalHeight();
	            var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight) || 0;
	            var thumbVerticalStyle = {
	                height: thumbVerticalHeight
	            };

	            if (hasTransform) {
	                thumbVerticalStyle[transform] = 'translateY(' + thumbVerticalY + 'px)';
	            } else {
	                thumbVerticalStyle.top = thumbVerticalY;
	            }

	            if (hideTracksWhenNotNeeded) {
	                var trackHorizontalStyle = {
	                    visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
	                };
	                var trackVerticalStyle = {
	                    visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
	                };

	                (0, _domCss2.default)(trackHorizontal, trackHorizontalStyle);
	                (0, _domCss2.default)(trackVertical, trackVerticalStyle);
	            }
	            (0, _domCss2.default)(thumbHorizontal, thumbHorizontalStyle);
	            (0, _domCss2.default)(thumbVertical, thumbVerticalStyle);

	            if (onUpdate) onUpdate(values);
	            if (typeof callback !== 'function') return;
	            callback(values);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props6 = this.props,
	                autoHide = _props6.autoHide,
	                autoHideDuration = _props6.autoHideDuration,
	                className = _props6.className,
	                onWheel = _props6.onWheel,
	                style = _props6.style,
	                trackStyle = _props6.trackStyle,
	                thumbStyle = _props6.thumbStyle,
	                tagName = _props6.tagName,
	                autoHeight = _props6.autoHeight,
	                autoHeightMin = _props6.autoHeightMin,
	                autoHeightMax = _props6.autoHeightMax,
	                children = _props6.children;


	            var containerStyle = _extends({}, autoHeight && _extends({}, containerStyleAutoHeight, {
	                minHeight: autoHeightMin,
	                maxHeight: autoHeightMax
	            }), style);

	            var viewStyle = {};
	            var trackHorizontalStyle = _extends({}, trackStyle);
	            if (!systemScrollBarWidth) {
	                trackHorizontalStyle.display = none;
	            }
	            var thumbHorizontalStyle = _extends({}, thumbStyle);
	            var trackVerticalStyle = _extends({}, trackStyle);
	            if (!systemScrollBarHeight) {
	                trackVerticalStyle.display = none;
	            }
	            var thumbVerticalStyle = _extends({}, thumbStyle);

	            viewStyle = _extends({
	                marginRight: -systemScrollBarWidth || 0,
	                marginBottom: -systemScrollBarHeight || 0
	            }, autoHeight && _extends({}, viewStyleAutoHeight, {
	                // Add scrollbarWidth to autoHeight in order to compensate negative margins
	                minHeight: isString(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + systemScrollBarWidth + 'px)' : autoHeightMin + systemScrollBarWidth,
	                maxHeight: isString(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + systemScrollBarHeight + 'px)' : autoHeightMax + systemScrollBarHeight
	            }));

	            if (autoHide) {
	                var trackAutoHideStyle = {
	                    transition: 'opacity ' + autoHideDuration + 'ms',
	                    opacity: 0
	                };
	                trackVerticalStyle = _extends({}, trackVerticalStyle, trackAutoHideStyle);
	                trackHorizontalStyle = _extends({}, trackHorizontalStyle, trackAutoHideStyle);
	            }

	            var Tag = tagName;

	            return _react2.default.createElement(
	                Tag,
	                {
	                    className: 'scrollbar-container  ' + (className || ''),
	                    ref: 'container',
	                    onWheel: this.handleMousewheel,
	                    style: containerStyle },
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: 'scrollbar-view',
	                        ref: 'view',
	                        style: viewStyle
	                    },
	                    children
	                ),
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: 'scrollbar-track scrollbar-track-horizontal',
	                        style: trackHorizontalStyle,
	                        ref: 'trackHorizontal' },
	                    _react2.default.createElement('div', {
	                        className: 'scrollbar-thumb scrollbar-thumb-horizontal',
	                        style: thumbHorizontalStyle,
	                        ref: 'thumbHorizontal' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: 'scrollbar-track scrollbar-track-vertical',
	                        style: trackVerticalStyle,
	                        ref: 'trackVertical' },
	                    _react2.default.createElement('div', {
	                        className: 'scrollbar-thumb scrollbar-thumb-vertical',
	                        style: thumbVerticalStyle,
	                        ref: 'thumbVertical' })
	                )
	            );
	        }
	    }]);

	    return Scrollbar;
	}(_react.Component);

	Scrollbar.propTypes = {
	    mouserwheelAlone: _react.PropTypes.bool, //set true when scroll to top or bottom prevent parent scroll
	    onScroll: _react.PropTypes.func,
	    onScrollFrame: _react.PropTypes.func,
	    onScrollStart: _react.PropTypes.func,
	    onScrollStop: _react.PropTypes.func,
	    onUpdate: _react.PropTypes.func,
	    onWheel: _react.PropTypes.func,
	    tagName: _react.PropTypes.string,
	    thumbSize: _react.PropTypes.number,
	    thumbMinSize: _react.PropTypes.number,
	    hideTracksWhenNotNeeded: _react.PropTypes.bool,
	    autoHide: _react.PropTypes.bool,
	    autoHideTimeout: _react.PropTypes.number,
	    autoHideDuration: _react.PropTypes.number,
	    autoHeight: _react.PropTypes.bool,
	    autoHeightMin: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    autoHeightMax: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    children: _react.PropTypes.node,
	    style: _react.PropTypes.object,
	    trackStyle: _react.PropTypes.object,
	    thumbStyle: _react.PropTypes.object,
	    className: _react.PropTypes.string
	};
	Scrollbar.defaultProps = {
	    tagName: 'div',
	    thumbMinSize: 30,
	    hideTracksWhenNotNeeded: true,
	    autoHide: true,
	    autoHideTimeout: 1000,
	    autoHideDuration: 200,
	    autoHeight: false,
	    autoHeightMin: 0,
	    autoHeightMax: 200,
	    universal: false,
	    style: null,
	    mouserwheelAlone: false
	};
	exports.default = Scrollbar;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Scrollbar = __webpack_require__(2);

	var _Scrollbar2 = _interopRequireDefault(_Scrollbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Scrollbar2.default;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getInnerWidth = getInnerWidth;
	exports.getInnerHeight = getInnerHeight;
	function getCurrentStyle(el) {
	    return el.currentStyle || window.getComputedStyle(el, null);
	}

	function getInnerWidth(el) {
	    var clientWidth = el.clientWidth;

	    var _getCurrentStyle = getCurrentStyle(el),
	        paddingLeft = _getCurrentStyle.paddingLeft,
	        paddingRight = _getCurrentStyle.paddingRight;

	    return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
	}

	function getInnerHeight(el) {
	    var clientHeight = el.clientHeight;

	    var _getCurrentStyle2 = getCurrentStyle(el),
	        paddingTop = _getCurrentStyle2.paddingTop,
	        paddingBottom = _getCurrentStyle2.paddingBottom;

	    return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
	}

	var isSupport = !!document.addEventListener;

	/**
	 * addEventlistener兼容函数
	 * ie9以上正常使用addEventlistener函数
	 * ie7、ie8用传递的function的function.prototype._bindFun储存经过处理的事件和对应的节点
	 * function.prototype._bindFun[index].type：绑定的事件类型
	 * function.prototype._bindFun[index].element：绑定的节点
	 * function.prototype._bindFun[index].handler：处理的事件
	 */

	/** addEventlistener **/
	var addListener = exports.addListener = function () {
	    if (isSupport) {
	        /* ie9以上正常使用addEventListener */
	        return function (element, type, fun, useCapture) {
	            element.addEventListener(type, fun, useCapture || false);
	        };
	    }
	    /* ie7、ie8使用attachEvent */
	    return function (element, type, fun) {
	        if (!fun.prototype._bindFun) {
	            fun.prototype._bindFun = [];
	        }
	        // 判断当前的element是否已经绑定过该事件
	        var s = true;
	        for (var i in fun.prototype._bindFun) {
	            if (fun.prototype._bindFun[i].type === type && fun.prototype._bindFun[i].element === element) {
	                s = false;
	                break;
	            }
	        }
	        // 没有绑定事件
	        if (s === true) {
	            var f = {
	                type: type,
	                element: element,
	                handler: function handler(event) {
	                    fun.call(element, event);
	                }
	            };
	            fun.prototype._bindFun.push(f);
	            element.attachEvent("on" + type, f.handler);
	        }
	    };
	}();

	/** removeEventlistener **/
	var removeListener = exports.removeListener = function () {
	    if (isSupport) {
	        /* ie9以上正常使用removeEventListener */
	        return function (element, type, fun) {
	            element.removeEventListener(type, fun);
	        };
	    }
	    /* ie7、ie8使用detachEvent */
	    return function (element, type, fun) {
	        for (var i in fun.prototype._bindFun) {
	            if (fun.prototype._bindFun[i].type === type && fun.prototype._bindFun[i].element === element) {
	                element.detachEvent("on" + type, fun.prototype._bindFun[i].handler);
	                fun.prototype._bindFun.splice(i, 1);
	                break;
	            }
	        }
	    };
	}();

	exports.default = {
	    getInnerHeight: getInnerHeight,
	    getInnerWidth: getInnerWidth,
	    addListener: addListener,
	    removeListener: removeListener
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var prefix = __webpack_require__(7)
	var toCamelCase = __webpack_require__(8)
	var cache = { 'float': 'cssFloat' }
	var addPxToStyle = __webpack_require__(1)

	function style (element, property, value) {
	  var camel = cache[property]
	  if (typeof camel === 'undefined') {
	    camel = detect(property)
	  }

	  // may be false if CSS prop is unsupported
	  if (camel) {
	    if (value === undefined) {
	      return element.style[camel]
	    }

	    element.style[camel] = addPxToStyle(camel, value)
	  }
	}

	function each (element, properties) {
	  for (var k in properties) {
	    if (properties.hasOwnProperty(k)) {
	      style(element, k, properties[k])
	    }
	  }
	}

	function detect (cssProp) {
	  var camel = toCamelCase(cssProp)
	  var result = prefix(camel)
	  cache[camel] = cache[cssProp] = cache[result] = result
	  return result
	}

	function set () {
	  if (arguments.length === 2) {
	    if (typeof arguments[1] === 'string') {
	      arguments[0].style.cssText = arguments[1]
	    } else {
	      each(arguments[0], arguments[1])
	    }
	  } else {
	    style(arguments[0], arguments[1], arguments[2])
	  }
	}

	module.exports = set
	module.exports.set = set

	module.exports.get = function (element, properties) {
	  if (Array.isArray(properties)) {
	    return properties.reduce(function (obj, prop) {
	      obj[prop] = style(element, prop || '')
	      return obj
	    }, {})
	  } else {
	    return style(element, properties || '')
	  }
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var div = null
	var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ]

	module.exports = function prefixStyle (prop) {
	  // re-use a dummy div
	  if (!div) {
	    div = document.createElement('div')
	  }

	  var style = div.style

	  // prop exists without prefix
	  if (prop in style) {
	    return prop
	  }

	  // borderRadius -> BorderRadius
	  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1)

	  // find the vendor-prefixed prop
	  for (var i = prefixes.length; i >= 0; i--) {
	    var name = prefixes[i] + titleCase
	    // e.g. WebkitBorderRadius or webkitBorderRadius
	    if (name in style) {
	      return name
	    }
	  }

	  return false
	}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	
	var space = __webpack_require__(10)

	/**
	 * Export.
	 */

	module.exports = toCamelCase

	/**
	 * Convert a `string` to camel case.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toCamelCase(string) {
	  return space(string).replace(/\s(\w)/g, function (matches, letter) {
	    return letter.toUpperCase()
	  })
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	
	/**
	 * Export.
	 */

	module.exports = toNoCase

	/**
	 * Test whether a string is camel-case.
	 */

	var hasSpace = /\s/
	var hasSeparator = /(_|-|\.|:)/
	var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

	/**
	 * Remove any starting case from a `string`, like camel or snake, but keep
	 * spaces and punctuation that may be important otherwise.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toNoCase(string) {
	  if (hasSpace.test(string)) return string.toLowerCase()
	  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
	  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
	  return string.toLowerCase()
	}

	/**
	 * Separator splitter.
	 */

	var separatorSplitter = /[\W_]+(.|$)/g

	/**
	 * Un-separate a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function unseparate(string) {
	  return string.replace(separatorSplitter, function (m, next) {
	    return next ? ' ' + next : ''
	  })
	}

	/**
	 * Camelcase splitter.
	 */

	var camelSplitter = /(.)([A-Z]+)/g

	/**
	 * Un-camelcase a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function uncamelize(string) {
	  return string.replace(camelSplitter, function (m, previous, uppers) {
	    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
	  })
	}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	
	var clean = __webpack_require__(9)

	/**
	 * Export.
	 */

	module.exports = toSpaceCase

	/**
	 * Convert a `string` to space case.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toSpaceCase(string) {
	  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
	    return match ? ' ' + match : ''
	  }).trim()
	}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ])
});
;