(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("error-trapper", [], factory);
	else if(typeof exports === 'object')
		exports["error-trapper"] = factory();
	else
		root["error-trapper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _jsonStringifySafe) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = normalizeForStringify;

    var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Normalize context for stringify
     * @param {Object} context
     * @return {Object}
     */
    function normalizeForStringify(context) {
        var normalizedContext = {};
        Object.keys(context).forEach(function (variable) {
            normalizedContext[variable] = normalizeVariableForStringify(context[variable]);
        });
        return normalizedContext;
    }

    /**
     * Modify value for stringify (remove circular references)
     * @param {*} variableValue
     * @return {*}
     */
    function normalizeVariableForStringify(variableValue) {
        try {
            JSON.stringify(variableValue);
            return variableValue;
        } catch (e) {
            return JSON.parse((0, _jsonStringifySafe2.default)(variableValue));
        }
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ub3JtYWxpemVycy9mb3Itc3RyaW5naWZ5LmpzIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZUZvclN0cmluZ2lmeSIsImNvbnRleHQiLCJub3JtYWxpemVkQ29udGV4dCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwidmFyaWFibGUiLCJub3JtYWxpemVWYXJpYWJsZUZvclN0cmluZ2lmeSIsInZhcmlhYmxlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7c0JBT3dCQSxxQjs7Ozs7Ozs7OztBQUx4Qjs7Ozs7QUFLZSxhQUFTQSxxQkFBVCxDQUFnQ0MsT0FBaEMsRUFBMEM7QUFDckQsWUFBTUMsb0JBQW9CLEVBQTFCO0FBQ0FDLGVBQ0tDLElBREwsQ0FDV0gsT0FEWCxFQUVLSSxPQUZMLENBRWMsb0JBQVk7QUFDbEJILDhCQUFtQkksUUFBbkIsSUFBZ0NDLDhCQUErQk4sUUFBU0ssUUFBVCxDQUEvQixDQUFoQztBQUNILFNBSkw7QUFNQSxlQUFPSixpQkFBUDtBQUNIOztBQUVEOzs7OztBQUtBLGFBQVNLLDZCQUFULENBQXdDQyxhQUF4QyxFQUF3RDtBQUNwRCxZQUFJO0FBQ0FDLGlCQUFLQyxTQUFMLENBQWdCRixhQUFoQjtBQUNBLG1CQUFPQSxhQUFQO0FBQ0gsU0FIRCxDQUdFLE9BQVFHLENBQVIsRUFBWTtBQUNWLG1CQUFPRixLQUFLRyxLQUFMLENBQVksaUNBQVdKLGFBQVgsQ0FBWixDQUFQO0FBQ0g7QUFDSiIsImZpbGUiOiJmb3Itc3RyaW5naWZ5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoYW0vd29yay9lcnJvci10cmFwcGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0cmluZ2lmeSBmcm9tICdqc29uLXN0cmluZ2lmeS1zYWZlJztcblxuLyoqXG4gKiBOb3JtYWxpemUgY29udGV4dCBmb3Igc3RyaW5naWZ5XG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVGb3JTdHJpbmdpZnkoIGNvbnRleHQgKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZENvbnRleHQgPSB7fTtcbiAgICBPYmplY3RcbiAgICAgICAgLmtleXMoIGNvbnRleHQgKVxuICAgICAgICAuZm9yRWFjaCggdmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgbm9ybWFsaXplZENvbnRleHRbIHZhcmlhYmxlIF0gPSBub3JtYWxpemVWYXJpYWJsZUZvclN0cmluZ2lmeSggY29udGV4dFsgdmFyaWFibGUgXSApO1xuICAgICAgICB9IClcbiAgICA7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRDb250ZXh0O1xufVxuXG4vKipcbiAqIE1vZGlmeSB2YWx1ZSBmb3Igc3RyaW5naWZ5IChyZW1vdmUgY2lyY3VsYXIgcmVmZXJlbmNlcylcbiAqIEBwYXJhbSB7Kn0gdmFyaWFibGVWYWx1ZVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVmFyaWFibGVGb3JTdHJpbmdpZnkoIHZhcmlhYmxlVmFsdWUgKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoIHZhcmlhYmxlVmFsdWUgKTtcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlVmFsdWU7XG4gICAgfSBjYXRjaCAoIGUgKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKCBzdHJpbmdpZnkoIHZhcmlhYmxlVmFsdWUgKSApO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(0), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _error, _forStringify, _printContext) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SETTINGS = undefined;
    exports.default = initialize;

    var _error2 = _interopRequireDefault(_error);

    var _forStringify2 = _interopRequireDefault(_forStringify);

    var _printContext2 = _interopRequireDefault(_printContext);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var SETTINGS = exports.SETTINGS = {
        ESPRIMA_BUNDLE_URL: ''
    };

    function ErrorTrapper() {
        Object.defineProperties(this, {
            parseError: {
                value: _error2.default,
                writable: false,
                enumerable: false,
                configurable: false
            },
            normalizeForStringify: {
                value: _forStringify2.default,
                writable: false,
                enumerable: false,
                configurable: false
            },
            printContext: {
                value: _printContext2.default,
                writable: false,
                enumerable: false,
                configurable: false
            }
        });
        Object.preventExtensions(this);
    }

    /**
     * Initialize error trapper
     * @param {String} esprimaBundleUrl url for esprima-bundle
     */
    function initialize(esprimaBundleUrl) {
        SETTINGS.ESPRIMA_BUNDLE_URL = esprimaBundleUrl;
        if (!window.ErrorTrapper) {
            Object.defineProperty(window, 'ErrorTrapper', {
                value: new ErrorTrapper(),
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lcnJvci10cmFwcGVyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxpemUiLCJTRVRUSU5HUyIsIkVTUFJJTUFfQlVORExFX1VSTCIsIkVycm9yVHJhcHBlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJwYXJzZUVycm9yIiwidmFsdWUiLCJ3cml0YWJsZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJub3JtYWxpemVGb3JTdHJpbmdpZnkiLCJwcmludENvbnRleHQiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsImVzcHJpbWFCdW5kbGVVcmwiLCJ3aW5kb3ciLCJkZWZpbmVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztzQkFvQ3dCQSxVOzs7Ozs7Ozs7Ozs7OztBQWhDakIsUUFBTUMsOEJBQVc7QUFDcEJDLDRCQUFvQjtBQURBLEtBQWpCOztBQUlQLGFBQVNDLFlBQVQsR0FBd0I7QUFDcEJDLGVBQU9DLGdCQUFQLENBQXlCLElBQXpCLEVBQStCO0FBQzNCQyx3QkFBWTtBQUNSQyxzQ0FEUTtBQUVSQywwQkFBVSxLQUZGO0FBR1JDLDRCQUFZLEtBSEo7QUFJUkMsOEJBQWM7QUFKTixhQURlO0FBTzNCQyxtQ0FBdUI7QUFDbkJKLDZDQURtQjtBQUVuQkMsMEJBQVUsS0FGUztBQUduQkMsNEJBQVksS0FITztBQUluQkMsOEJBQWM7QUFKSyxhQVBJO0FBYTNCRSwwQkFBYztBQUNWTCw2Q0FEVTtBQUVWQywwQkFBVSxLQUZBO0FBR1ZDLDRCQUFZLEtBSEY7QUFJVkMsOEJBQWM7QUFKSjtBQWJhLFNBQS9CO0FBb0JBTixlQUFPUyxpQkFBUCxDQUEwQixJQUExQjtBQUNIOztBQUVEOzs7O0FBSWUsYUFBU2IsVUFBVCxDQUFxQmMsZ0JBQXJCLEVBQXdDO0FBQ25EYixpQkFBU0Msa0JBQVQsR0FBOEJZLGdCQUE5QjtBQUNBLFlBQUssQ0FBQ0MsT0FBT1osWUFBYixFQUE0QjtBQUN4QkMsbUJBQU9ZLGNBQVAsQ0FBdUJELE1BQXZCLEVBQStCLGNBQS9CLEVBQStDO0FBQzNDUix1QkFBTyxJQUFJSixZQUFKLEVBRG9DO0FBRTNDSywwQkFBVSxLQUZpQztBQUczQ0MsNEJBQVksS0FIK0I7QUFJM0NDLDhCQUFjO0FBSjZCLGFBQS9DO0FBTUg7QUFDSiIsImZpbGUiOiJlcnJvci10cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoYW0vd29yay9lcnJvci10cmFwcGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhcnNlRXJyb3IgZnJvbSAnLi9wYXJzZXJzL2Vycm9yJztcbmltcG9ydCBub3JtYWxpemVGb3JTdHJpbmdpZnkgZnJvbSAnLi9ub3JtYWxpemVycy9mb3Itc3RyaW5naWZ5JztcbmltcG9ydCBwcmludENvbnRleHQgZnJvbSAnLi91dGlscy9wcmludC1jb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IFNFVFRJTkdTID0ge1xuICAgIEVTUFJJTUFfQlVORExFX1VSTDogJydcbn07XG5cbmZ1bmN0aW9uIEVycm9yVHJhcHBlcigpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggdGhpcywge1xuICAgICAgICBwYXJzZUVycm9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VFcnJvcixcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBub3JtYWxpemVGb3JTdHJpbmdpZnk6IHtcbiAgICAgICAgICAgIHZhbHVlOiBub3JtYWxpemVGb3JTdHJpbmdpZnksXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcHJpbnRDb250ZXh0OiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJpbnRDb250ZXh0LFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9ICk7XG4gICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKCB0aGlzICk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlcnJvciB0cmFwcGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXNwcmltYUJ1bmRsZVVybCB1cmwgZm9yIGVzcHJpbWEtYnVuZGxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoIGVzcHJpbWFCdW5kbGVVcmwgKSB7XG4gICAgU0VUVElOR1MuRVNQUklNQV9CVU5ETEVfVVJMID0gZXNwcmltYUJ1bmRsZVVybDtcbiAgICBpZiAoICF3aW5kb3cuRXJyb3JUcmFwcGVyICkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHdpbmRvdywgJ0Vycm9yVHJhcHBlcicsIHtcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRXJyb3JUcmFwcGVyLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICAgIH0gKTtcbiAgICB9XG59XG4iXX0=

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Loader = function () {
        function Loader() {
            _classCallCheck(this, Loader);

            this._cache = {};
        }

        /**
         * @param {String} file
         * @param {Function} callback
         * @param {Function} failback
         */


        _createClass(Loader, [{
            key: 'load',
            value: function load(file, callback, failback) {
                if (this._cache[file]) {
                    callback(this._cache[file]);
                } else {
                    this._makeRequest(file, callback, failback);
                }
            }
        }, {
            key: '_makeRequest',
            value: function _makeRequest(file, callback, failback) {
                var _this = this;

                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    _this._onLoaded(request, file, callback, failback);
                };
                request.open('GET', file, true);
                request.send();
            }
        }, {
            key: '_onLoaded',
            value: function _onLoaded(request, file, callback, failback) {
                if (XMLHttpRequest.DONE === request.readyState) {
                    if (200 === request.status) {
                        this._cache[file] = request.responseText;
                        callback(this._cache[file]);
                    } else {
                        failback(request);
                    }
                }
            }
        }]);

        return Loader;
    }();

    exports.default = new Loader();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2FkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiX2NhY2hlIiwiZmlsZSIsImNhbGxiYWNrIiwiZmFpbGJhY2siLCJfbWFrZVJlcXVlc3QiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfb25Mb2FkZWQiLCJvcGVuIiwic2VuZCIsIkRPTkUiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQU1BLE07QUFDRiwwQkFBYztBQUFBOztBQUNWLGlCQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNIOztBQUVEOzs7Ozs7Ozs7aUNBS01DLEksRUFBTUMsUSxFQUFVQyxRLEVBQVc7QUFDN0Isb0JBQUssS0FBS0gsTUFBTCxDQUFhQyxJQUFiLENBQUwsRUFBMkI7QUFDdkJDLDZCQUFVLEtBQUtGLE1BQUwsQ0FBYUMsSUFBYixDQUFWO0FBQ0gsaUJBRkQsTUFFTztBQUNILHlCQUFLRyxZQUFMLENBQW1CSCxJQUFuQixFQUF5QkMsUUFBekIsRUFBbUNDLFFBQW5DO0FBQ0g7QUFDSjs7O3lDQVFhRixJLEVBQU1DLFEsRUFBVUMsUSxFQUFXO0FBQUE7O0FBQ3JDLG9CQUFNRSxVQUFVLElBQUlDLGNBQUosRUFBaEI7QUFDQUQsd0JBQVFFLGtCQUFSLEdBQTZCLFlBQU07QUFDL0IsMEJBQUtDLFNBQUwsQ0FBZ0JILE9BQWhCLEVBQXlCSixJQUF6QixFQUErQkMsUUFBL0IsRUFBeUNDLFFBQXpDO0FBQ0gsaUJBRkQ7QUFHQUUsd0JBQVFJLElBQVIsQ0FBYyxLQUFkLEVBQXFCUixJQUFyQixFQUEyQixJQUEzQjtBQUNBSSx3QkFBUUssSUFBUjtBQUNIOzs7c0NBU1VMLE8sRUFBU0osSSxFQUFNQyxRLEVBQVVDLFEsRUFBVztBQUMzQyxvQkFBS0csZUFBZUssSUFBZixLQUF3Qk4sUUFBUU8sVUFBckMsRUFBa0Q7QUFDOUMsd0JBQUssUUFBUVAsUUFBUVEsTUFBckIsRUFBOEI7QUFDMUIsNkJBQUtiLE1BQUwsQ0FBYUMsSUFBYixJQUFzQkksUUFBUVMsWUFBOUI7QUFDQVosaUNBQVUsS0FBS0YsTUFBTCxDQUFhQyxJQUFiLENBQVY7QUFDSCxxQkFIRCxNQUdPO0FBQ0hFLGlDQUFVRSxPQUFWO0FBQ0g7QUFDSjtBQUNKOzs7Ozs7c0JBR1UsSUFBSU4sTUFBSixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoYW0vd29yay9lcnJvci10cmFwcGVyIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZmFpbGJhY2tcbiAgICAgKi9cbiAgICBsb2FkKCBmaWxlLCBjYWxsYmFjaywgZmFpbGJhY2sgKSB7XG4gICAgICAgIGlmICggdGhpcy5fY2FjaGVbIGZpbGUgXSApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCB0aGlzLl9jYWNoZVsgZmlsZSBdICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tYWtlUmVxdWVzdCggZmlsZSwgY2FsbGJhY2ssIGZhaWxiYWNrICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmYWlsYmFja1xuICAgICAqL1xuICAgIF9tYWtlUmVxdWVzdCggZmlsZSwgY2FsbGJhY2ssIGZhaWxiYWNrICkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25Mb2FkZWQoIHJlcXVlc3QsIGZpbGUsIGNhbGxiYWNrLCBmYWlsYmFjayApO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9wZW4oICdHRVQnLCBmaWxlLCB0cnVlICk7XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0gcmVxdWVzdFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmYWlsYmFja1xuICAgICAqL1xuICAgIF9vbkxvYWRlZCggcmVxdWVzdCwgZmlsZSwgY2FsbGJhY2ssIGZhaWxiYWNrICkge1xuICAgICAgICBpZiAoIFhNTEh0dHBSZXF1ZXN0LkRPTkUgPT09IHJlcXVlc3QucmVhZHlTdGF0ZSApIHtcbiAgICAgICAgICAgIGlmICggMjAwID09PSByZXF1ZXN0LnN0YXR1cyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVsgZmlsZSBdID0gcmVxdWVzdC5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soIHRoaXMuX2NhY2hlWyBmaWxlIF0gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmFpbGJhY2soIHJlcXVlc3QgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IExvYWRlcigpOyJdfQ==

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6), __webpack_require__(8), __webpack_require__(7), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _esprimaBundle, _stack, _scope, _errorTrapper) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = parseError;

    var _esprimaBundle2 = _interopRequireDefault(_esprimaBundle);

    var _stack2 = _interopRequireDefault(_stack);

    var _scope2 = _interopRequireDefault(_scope);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Parse error scope
     * @param {Error} e
     * @param {Function} callback
     * @return {*}
     */
    function parseError(e, callback) {
        function failback() {
            callback({ success: false, code: null });
        }

        var firstFile = (0, _stack2.default)(e.stack);

        if (firstFile === null) {
            return failback();
        }

        return firstFile.loadFileContent(function (fileContent) {
            return parseFileContent(fileContent, firstFile, callback, failback);
        }, failback);
    }

    /**
     * @param {String} fileContent
     * @param {StackLine} stackLine
     * @param {Function} callback
     * @param {Function} failback
     */
    function parseFileContent(fileContent, stackLine, callback, failback) {
        (0, _esprimaBundle2.default)(_errorTrapper.SETTINGS.ESPRIMA_BUNDLE_URL, function (esprimaBundle) {
            var code = parseCode(fileContent, stackLine, esprimaBundle);
            callback({
                code: code,
                success: true
            });
        }, failback);
    }

    /**
     * @param {String} code
     * @param {StackLine} stackLine
     * @param {Function} parse Function parse from esprima
     * @param {Function} scopeAnalyze Function analyze from escope
     * @return {string} code for eval
     */
    function parseCode(code, stackLine, _ref) {
        var parse = _ref.parse,
            scopeAnalyze = _ref.scopeAnalyze;

        var ast = parse(code, {
            loc: true,
            comment: true
        });
        var scopeVariables = (0, _scope2.default)(ast, stackLine, scopeAnalyze);
        var scopeMapping = scopeVariables.map(function (variable) {
            return '\'' + variable + '\':' + variable;
        });
        var scopeContext = '{' + scopeMapping.join(',') + '}';
        return '(function(){return' + scopeContext + '})()';
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYXJzZXJzL2Vycm9yLmpzIl0sIm5hbWVzIjpbInBhcnNlRXJyb3IiLCJlIiwiY2FsbGJhY2siLCJmYWlsYmFjayIsInN1Y2Nlc3MiLCJjb2RlIiwiZmlyc3RGaWxlIiwic3RhY2siLCJsb2FkRmlsZUNvbnRlbnQiLCJmaWxlQ29udGVudCIsInBhcnNlRmlsZUNvbnRlbnQiLCJzdGFja0xpbmUiLCJFU1BSSU1BX0JVTkRMRV9VUkwiLCJlc3ByaW1hQnVuZGxlIiwicGFyc2VDb2RlIiwicGFyc2UiLCJzY29wZUFuYWx5emUiLCJhc3QiLCJsb2MiLCJjb21tZW50Iiwic2NvcGVWYXJpYWJsZXMiLCJzY29wZU1hcHBpbmciLCJtYXAiLCJ2YXJpYWJsZSIsInNjb3BlQ29udGV4dCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7OztzQkFXd0JBLFU7Ozs7Ozs7Ozs7Ozs7O0FBTnhCOzs7Ozs7QUFNZSxhQUFTQSxVQUFULENBQXFCQyxDQUFyQixFQUF3QkMsUUFBeEIsRUFBbUM7QUFDOUMsaUJBQVNDLFFBQVQsR0FBb0I7QUFDaEJELHFCQUFVLEVBQUVFLFNBQVMsS0FBWCxFQUFrQkMsTUFBTSxJQUF4QixFQUFWO0FBQ0g7O0FBRUQsWUFBTUMsWUFBWSxxQkFBbUJMLEVBQUVNLEtBQXJCLENBQWxCOztBQUVBLFlBQUtELGNBQWMsSUFBbkIsRUFBMEI7QUFDdEIsbUJBQU9ILFVBQVA7QUFDSDs7QUFFRCxlQUFPRyxVQUFVRSxlQUFWLENBQ0gsVUFBRUMsV0FBRjtBQUFBLG1CQUFtQkMsaUJBQWtCRCxXQUFsQixFQUErQkgsU0FBL0IsRUFBMENKLFFBQTFDLEVBQW9EQyxRQUFwRCxDQUFuQjtBQUFBLFNBREcsRUFFSEEsUUFGRyxDQUFQO0FBSUg7O0FBRUQ7Ozs7OztBQU1BLGFBQVNPLGdCQUFULENBQTJCRCxXQUEzQixFQUF3Q0UsU0FBeEMsRUFBbURULFFBQW5ELEVBQTZEQyxRQUE3RCxFQUF3RTtBQUNwRSxxQ0FDSSx1QkFBU1Msa0JBRGIsRUFFSSxVQUFFQyxhQUFGLEVBQXFCO0FBQ2pCLGdCQUFNUixPQUFPUyxVQUFXTCxXQUFYLEVBQXdCRSxTQUF4QixFQUFtQ0UsYUFBbkMsQ0FBYjtBQUNBWCxxQkFBVTtBQUNORywwQkFETTtBQUVORCx5QkFBUztBQUZILGFBQVY7QUFJSCxTQVJMLEVBU0lELFFBVEo7QUFXSDs7QUFFRDs7Ozs7OztBQU9BLGFBQVNXLFNBQVQsQ0FBb0JULElBQXBCLEVBQTBCTSxTQUExQixRQUErRDtBQUFBLFlBQXhCSSxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxZQUFqQkMsWUFBaUIsUUFBakJBLFlBQWlCOztBQUMzRCxZQUFNQyxNQUFNRixNQUFPVixJQUFQLEVBQWE7QUFDckJhLGlCQUFLLElBRGdCO0FBRXJCQyxxQkFBUztBQUZZLFNBQWIsQ0FBWjtBQUlBLFlBQU1DLGlCQUFpQixxQkFBWUgsR0FBWixFQUFpQk4sU0FBakIsRUFBNEJLLFlBQTVCLENBQXZCO0FBQ0EsWUFBTUssZUFBZUQsZUFBZUUsR0FBZixDQUFvQjtBQUFBLDBCQUFnQkMsUUFBaEIsV0FBNkJBLFFBQTdCO0FBQUEsU0FBcEIsQ0FBckI7QUFDQSxZQUFNQyxxQkFBbUJILGFBQWFJLElBQWIsQ0FBbUIsR0FBbkIsQ0FBbkIsTUFBTjtBQUNBLHNDQUE0QkQsWUFBNUI7QUFDSCIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGFtL3dvcmsvZXJyb3ItdHJhcHBlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkRXNwcmltYUJ1bmRsZSBmcm9tICcuLi9sb2FkZXIvZXNwcmltYS1idW5kbGUnO1xuaW1wb3J0IGV4dHJhY3RFcnJvclBsYWNlIGZyb20gJy4vc3RhY2snO1xuaW1wb3J0IHBhcnNlU2NvcGUgZnJvbSAnLi9zY29wZSc7XG5pbXBvcnQgeyBTRVRUSU5HUyB9IGZyb20gJy4uL2Vycm9yLXRyYXBwZXInO1xuXG4vKipcbiAqIFBhcnNlIGVycm9yIHNjb3BlXG4gKiBAcGFyYW0ge0Vycm9yfSBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VFcnJvciggZSwgY2FsbGJhY2sgKSB7XG4gICAgZnVuY3Rpb24gZmFpbGJhY2soKSB7XG4gICAgICAgIGNhbGxiYWNrKCB7IHN1Y2Nlc3M6IGZhbHNlLCBjb2RlOiBudWxsIH0gKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdEZpbGUgPSBleHRyYWN0RXJyb3JQbGFjZSggZS5zdGFjayApO1xuXG4gICAgaWYgKCBmaXJzdEZpbGUgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybiBmYWlsYmFjaygpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEZpbGUubG9hZEZpbGVDb250ZW50KFxuICAgICAgICAoIGZpbGVDb250ZW50ICkgPT4gcGFyc2VGaWxlQ29udGVudCggZmlsZUNvbnRlbnQsIGZpcnN0RmlsZSwgY2FsbGJhY2ssIGZhaWxiYWNrICksXG4gICAgICAgIGZhaWxiYWNrXG4gICAgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZUNvbnRlbnRcbiAqIEBwYXJhbSB7U3RhY2tMaW5lfSBzdGFja0xpbmVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmYWlsYmFja1xuICovXG5mdW5jdGlvbiBwYXJzZUZpbGVDb250ZW50KCBmaWxlQ29udGVudCwgc3RhY2tMaW5lLCBjYWxsYmFjaywgZmFpbGJhY2sgKSB7XG4gICAgbG9hZEVzcHJpbWFCdW5kbGUoXG4gICAgICAgIFNFVFRJTkdTLkVTUFJJTUFfQlVORExFX1VSTCxcbiAgICAgICAgKCBlc3ByaW1hQnVuZGxlICkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHBhcnNlQ29kZSggZmlsZUNvbnRlbnQsIHN0YWNrTGluZSwgZXNwcmltYUJ1bmRsZSApO1xuICAgICAgICAgICAgY2FsbGJhY2soIHtcbiAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWxiYWNrXG4gICAgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gY29kZVxuICogQHBhcmFtIHtTdGFja0xpbmV9IHN0YWNrTGluZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyc2UgRnVuY3Rpb24gcGFyc2UgZnJvbSBlc3ByaW1hXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzY29wZUFuYWx5emUgRnVuY3Rpb24gYW5hbHl6ZSBmcm9tIGVzY29wZVxuICogQHJldHVybiB7c3RyaW5nfSBjb2RlIGZvciBldmFsXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQ29kZSggY29kZSwgc3RhY2tMaW5lLCB7IHBhcnNlLCBzY29wZUFuYWx5emUgfSApIHtcbiAgICBjb25zdCBhc3QgPSBwYXJzZSggY29kZSwge1xuICAgICAgICBsb2M6IHRydWUsXG4gICAgICAgIGNvbW1lbnQ6IHRydWVcbiAgICB9ICk7XG4gICAgY29uc3Qgc2NvcGVWYXJpYWJsZXMgPSBwYXJzZVNjb3BlKCBhc3QsIHN0YWNrTGluZSwgc2NvcGVBbmFseXplICk7XG4gICAgY29uc3Qgc2NvcGVNYXBwaW5nID0gc2NvcGVWYXJpYWJsZXMubWFwKCB2YXJpYWJsZSA9PiBgJyR7dmFyaWFibGV9Jzoke3ZhcmlhYmxlfWAgKTtcbiAgICBjb25zdCBzY29wZUNvbnRleHQgPSBgeyR7c2NvcGVNYXBwaW5nLmpvaW4oICcsJyApfX1gO1xuICAgIHJldHVybiBgKGZ1bmN0aW9uKCl7cmV0dXJuJHtzY29wZUNvbnRleHR9fSkoKWBcbn0iXX0=

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _forStringify) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = printContext;

    var _forStringify2 = _interopRequireDefault(_forStringify);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Print context
     * @param {Object} context
     */
    function printContext(context) {
        console.group('Runtime context');
        var normalizedContext = (0, _forStringify2.default)(context);
        for (var variable in normalizedContext) {
            if (!normalizedContext.hasOwnProperty(variable)) {
                continue;
            }
            console.group(variable);
            console.dir(normalizedContext[variable]);
            console.groupEnd();
        }
        console.groupEnd();
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9wcmludC1jb250ZXh0LmpzIl0sIm5hbWVzIjpbInByaW50Q29udGV4dCIsImNvbnRleHQiLCJjb25zb2xlIiwiZ3JvdXAiLCJub3JtYWxpemVkQ29udGV4dCIsInZhcmlhYmxlIiwiaGFzT3duUHJvcGVydHkiLCJkaXIiLCJncm91cEVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3NCQU13QkEsWTs7Ozs7Ozs7OztBQUp4Qjs7OztBQUllLGFBQVNBLFlBQVQsQ0FBdUJDLE9BQXZCLEVBQWlDO0FBQzVDQyxnQkFBUUMsS0FBUixDQUFlLGlCQUFmO0FBQ0EsWUFBTUMsb0JBQW9CLDRCQUF1QkgsT0FBdkIsQ0FBMUI7QUFDQSxhQUFNLElBQUlJLFFBQVYsSUFBc0JELGlCQUF0QixFQUEwQztBQUN0QyxnQkFBSyxDQUFDQSxrQkFBa0JFLGNBQWxCLENBQWtDRCxRQUFsQyxDQUFOLEVBQXFEO0FBQ2pEO0FBQ0g7QUFDREgsb0JBQVFDLEtBQVIsQ0FBZUUsUUFBZjtBQUNBSCxvQkFBUUssR0FBUixDQUFhSCxrQkFBbUJDLFFBQW5CLENBQWI7QUFDQUgsb0JBQVFNLFFBQVI7QUFDSDtBQUNETixnQkFBUU0sUUFBUjtBQUNIIiwiZmlsZSI6InByaW50LWNvbnRleHQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hhbS93b3JrL2Vycm9yLXRyYXBwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9ybWFsaXplRm9yU3RyaW5naWZ5IGZyb20gJy4uL25vcm1hbGl6ZXJzL2Zvci1zdHJpbmdpZnknO1xuXG4vKipcbiAqIFByaW50IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50Q29udGV4dCggY29udGV4dCApIHtcbiAgICBjb25zb2xlLmdyb3VwKCAnUnVudGltZSBjb250ZXh0JyApO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRDb250ZXh0ID0gbm9ybWFsaXplRm9yU3RyaW5naWZ5KCBjb250ZXh0ICk7XG4gICAgZm9yICggbGV0IHZhcmlhYmxlIGluIG5vcm1hbGl6ZWRDb250ZXh0ICkge1xuICAgICAgICBpZiAoICFub3JtYWxpemVkQ29udGV4dC5oYXNPd25Qcm9wZXJ0eSggdmFyaWFibGUgKSApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoIHZhcmlhYmxlICk7XG4gICAgICAgIGNvbnNvbGUuZGlyKCBub3JtYWxpemVkQ29udGV4dFsgdmFyaWFibGUgXSApO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgfVxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbn1cbiJdfQ==

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_RESULT__ = function (module) {
    'use strict';

    module.exports = {
        SCOPE_CLOSURE_VARIABLE: '___SCOPE_CLOSURE_VARIABLE___'
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY3Jvcy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlNDT1BFX0NMT1NVUkVfVkFSSUFCTEUiXSwibWFwcGluZ3MiOiI7OztBQUFBQSxXQUFPQyxPQUFQLEdBQWlCO0FBQ2JDLGdDQUF3QjtBQURYLEtBQWpCIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGFtL3dvcmsvZXJyb3ItdHJhcHBlciIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFNDT1BFX0NMT1NVUkVfVkFSSUFCTEU6ICdfX19TQ09QRV9DTE9TVVJFX1ZBUklBQkxFX19fJ1xufTsiXX0=

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (module, exports, _index) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function (url, callback, failback) {
        if (CACHE !== null) {
            return callback(CACHE);
        }
        _index2.default.load(url, function (code) {
            return evaluteBundle(code, callback, failback);
        }, failback);
    };

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Cached bundle
     * @type {null|String}
     */
    var CACHE = null;

    /**
     * @param {String} code
     * @param {Function} callback
     * @param {Function} failback
     */
    function evaluteBundle(code, callback, failback) {
        try {
            eval(code);
            CACHE = module.exports;
            callback(CACHE);
        } catch (e) {
            failback(e);
        }
    }

    /**
     * @param {String} url
     * @param {Function} callback
     * @param {Function} failback
     */
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2FkZXIvZXNwcmltYS1idW5kbGUuanMiXSwibmFtZXMiOlsidXJsIiwiY2FsbGJhY2siLCJmYWlsYmFjayIsIkNBQ0hFIiwibG9hZCIsImNvZGUiLCJldmFsdXRlQnVuZGxlIiwiZXZhbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3NCQTRCZSxVQUFVQSxHQUFWLEVBQWVDLFFBQWYsRUFBeUJDLFFBQXpCLEVBQW9DO0FBQy9DLFlBQUtDLFVBQVUsSUFBZixFQUFzQjtBQUNsQixtQkFBT0YsU0FBVUUsS0FBVixDQUFQO0FBQ0g7QUFDRCx3QkFBT0MsSUFBUCxDQUNJSixHQURKLEVBRUksVUFBRUssSUFBRjtBQUFBLG1CQUFZQyxjQUFlRCxJQUFmLEVBQXFCSixRQUFyQixFQUErQkMsUUFBL0IsQ0FBWjtBQUFBLFNBRkosRUFHSUEsUUFISjtBQUtILEs7Ozs7Ozs7Ozs7QUFuQ0Q7Ozs7QUFJQSxRQUFJQyxRQUFRLElBQVo7O0FBRUE7Ozs7O0FBS0EsYUFBU0csYUFBVCxDQUF3QkQsSUFBeEIsRUFBOEJKLFFBQTlCLEVBQXdDQyxRQUF4QyxFQUFtRDtBQUMvQyxZQUFJO0FBQ0FLLGlCQUFNRixJQUFOO0FBQ0FGLG9CQUFRSyxPQUFPQyxPQUFmO0FBQ0FSLHFCQUFVRSxLQUFWO0FBQ0gsU0FKRCxDQUlFLE9BQVFPLENBQVIsRUFBWTtBQUNWUixxQkFBVVEsQ0FBVjtBQUNIO0FBQ0o7O0FBRUQiLCJmaWxlIjoiZXNwcmltYS1idW5kbGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hhbS93b3JrL2Vycm9yLXRyYXBwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZGVyIGZyb20gJy4vaW5kZXgnO1xuXG4vKipcbiAqIENhY2hlZCBidW5kbGVcbiAqIEB0eXBlIHtudWxsfFN0cmluZ31cbiAqL1xubGV0IENBQ0hFID0gbnVsbDtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gY29kZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZhaWxiYWNrXG4gKi9cbmZ1bmN0aW9uIGV2YWx1dGVCdW5kbGUoIGNvZGUsIGNhbGxiYWNrLCBmYWlsYmFjayApIHtcbiAgICB0cnkge1xuICAgICAgICBldmFsKCBjb2RlICk7XG4gICAgICAgIENBQ0hFID0gbW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIGNhbGxiYWNrKCBDQUNIRSApO1xuICAgIH0gY2F0Y2ggKCBlICkge1xuICAgICAgICBmYWlsYmFjayggZSApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZmFpbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oIHVybCwgY2FsbGJhY2ssIGZhaWxiYWNrICkge1xuICAgIGlmICggQ0FDSEUgIT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayggQ0FDSEUgKTtcbiAgICB9XG4gICAgbG9hZGVyLmxvYWQoXG4gICAgICAgIHVybCxcbiAgICAgICAgKCBjb2RlICkgPT4gZXZhbHV0ZUJ1bmRsZSggY29kZSwgY2FsbGJhY2ssIGZhaWxiYWNrICksXG4gICAgICAgIGZhaWxiYWNrXG4gICAgKTtcbn0iXX0=

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = parseScope;


    // TODO: dynamic load escope

    var IGNORE_VARIABLES = ['arguments', _constants.SCOPE_CLOSURE_VARIABLE];

    /**
     * @param value
     * @return {Boolean}
     */
    function isNumber(value) {
        return typeof value === 'number';
    }

    /**
     * @param {Object} node
     * @param {Number} line
     * @param {Number|*} column
     */
    function isNodeOnPosition(node, line, column) {
        var start = node.loc.start;
        return start.line === line && (!isNumber(column) || !isNumber(start.column) || start.column === column);
    }

    /**
     * @param {Object} node
     * @param {Number} line
     * @param {Number|*} column
     */
    function nodeSiblingAfter(node, line, column) {
        var start = node.loc.start;
        return start.line > line || start.line === line && isNumber(start.column) && isNumber(column) && start.column > column;
    }

    /**
     * Find node by passing line number
     * @param {Object} ast
     * @param {Number} line
     * @param {Number} column
     * @return {Object|null}
     */
    function findNodeByLineAndAddParent(ast, line, column) {
        var stack = [ast];
        var lastWalkedNodeAtLine = null;
        for (var i = 0; i < stack.length; i++) {
            var node = stack[i];
            var start = node.loc.start;
            if (isNodeOnPosition(node, line, column)) {
                return node;
            }
            if (null !== lastWalkedNodeAtLine && nodeSiblingAfter(node, line, column)) {
                return lastWalkedNodeAtLine;
            }
            if (start.line === line && start.column < column) {
                lastWalkedNodeAtLine = node;
            }

            for (var key in node) {
                if (node.hasOwnProperty(key) && key !== 'parent') {
                    var child = node[key];
                    if (child instanceof Array) {
                        for (var j = 0, len = child.length; j < len; j++) {
                            var subChild = child[j];
                            subChild.parent = node;
                            stack.push(subChild);
                        }
                    } else if (child !== undefined && child !== null && typeof child.type === 'string') {
                        child.parent = node;
                        stack.push(child);
                    }
                }
            }
        }
        return null;
    }

    /**
     * Get scope for node
     * @param {Object} node
     * @return {Object}
     */
    function findScopeForNode(node) {
        var parent = node;
        while ('FunctionDeclaration' !== parent.type && 'FunctionExpression' !== parent.type && 'Program' !== node.type) {
            parent = parent.parent;
        }
        return parent;
    }

    /**
     * Collect all variable names for scope
     * @param {Object} ast
     * @param {Object} scopeNode
     * @param {Function} scopeAnalyze analyze function from 'escope'
     * @return {Array.<String>}
     */
    function collectVariableNames(ast, scopeNode, scopeAnalyze) {
        var scopeManager = scopeAnalyze(ast);
        var currentScope = scopeManager.acquire(scopeNode);
        var variables = currentScope.variables.map(function (variable) {
            return variable.name;
        });
        currentScope.references.forEach(function (reference) {
            var variableName = reference.identifier.name;
            if (-1 === variables.indexOf(variableName)) {
                variables.push(variableName);
            }
        });
        return variables.filter(function (variable) {
            return -1 === IGNORE_VARIABLES.indexOf(variable);
        });
    }

    /**
     * @param {Object} ast
     * @param {StackLine} stackLine
     * @param {Function} scopeAnalyze
     * @return {Array.<String>}
     */
    function parseScope(ast, stackLine, scopeAnalyze) {
        var node = findNodeByLineAndAddParent(ast, stackLine.line, stackLine.column);
        if (null === node) {
            return [];
        }
        var scopeNode = findScopeForNode(node);
        return collectVariableNames(ast, scopeNode, scopeAnalyze);
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYXJzZXJzL3Njb3BlLmpzIl0sIm5hbWVzIjpbInBhcnNlU2NvcGUiLCJJR05PUkVfVkFSSUFCTEVTIiwiaXNOdW1iZXIiLCJ2YWx1ZSIsImlzTm9kZU9uUG9zaXRpb24iLCJub2RlIiwibGluZSIsImNvbHVtbiIsInN0YXJ0IiwibG9jIiwibm9kZVNpYmxpbmdBZnRlciIsImZpbmROb2RlQnlMaW5lQW5kQWRkUGFyZW50IiwiYXN0Iiwic3RhY2siLCJsYXN0V2Fsa2VkTm9kZUF0TGluZSIsImkiLCJsZW5ndGgiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImNoaWxkIiwiQXJyYXkiLCJqIiwibGVuIiwic3ViQ2hpbGQiLCJwYXJlbnQiLCJwdXNoIiwidW5kZWZpbmVkIiwidHlwZSIsImZpbmRTY29wZUZvck5vZGUiLCJjb2xsZWN0VmFyaWFibGVOYW1lcyIsInNjb3BlTm9kZSIsInNjb3BlQW5hbHl6ZSIsInNjb3BlTWFuYWdlciIsImN1cnJlbnRTY29wZSIsImFjcXVpcmUiLCJ2YXJpYWJsZXMiLCJtYXAiLCJ2YXJpYWJsZSIsIm5hbWUiLCJyZWZlcmVuY2VzIiwiZm9yRWFjaCIsInZhcmlhYmxlTmFtZSIsInJlZmVyZW5jZSIsImlkZW50aWZpZXIiLCJpbmRleE9mIiwiZmlsdGVyIiwic3RhY2tMaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7c0JBMEl3QkEsVTs7O0FBeEl4Qjs7QUFFQSxRQUFNQyxtQkFBbUIsQ0FDckIsV0FEcUIsb0NBQXpCOztBQUtBOzs7O0FBSUEsYUFBU0MsUUFBVCxDQUFtQkMsS0FBbkIsRUFBMkI7QUFDdkIsZUFBTyxPQUFPQSxLQUFQLEtBQWlCLFFBQXhCO0FBQ0g7O0FBRUQ7Ozs7O0FBS0EsYUFBU0MsZ0JBQVQsQ0FBMkJDLElBQTNCLEVBQWlDQyxJQUFqQyxFQUF1Q0MsTUFBdkMsRUFBZ0Q7QUFDNUMsWUFBTUMsUUFBUUgsS0FBS0ksR0FBTCxDQUFTRCxLQUF2QjtBQUNBLGVBQU9BLE1BQU1GLElBQU4sS0FBZUEsSUFB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LFlBQU1xQixlQUFlRCxhQUFhRSxPQUFiLENBQXNCSixTQUF0QixDQUFyQjtBQUNBLFlBQU1LLFlBQVlGLGFBQ2JFLFNBRGEsQ0FFYkMsR0FGYSxDQUVSO0FBQUEsbUJBQVlDLFNBQVNDLElBQXJCO0FBQUEsU0FGUSxDQUFsQjtBQUdBTCxxQkFBYU0sVUFBYixDQUF3QkMsT0FBeEIsQ0FBaUMscUJBQWE7QUFDMUMsZ0JBQU1DLGVBQWVDLFVBQVVDLFVBQVYsQ0FBcUJMLElBQTFDO0FBQ0EsZ0JBQUssQ0FBQyxDQUFELEtBQU9ILFVBQVVTLE9BQVYsQ0FBbUJILFlBQW5CLENBQVosRUFBZ0Q7QUFDNUNOLDBCQUFVVixJQUFWLENBQWdCZ0IsWUFBaEI7QUFDSDtBQUNKLFNBTEQ7QUFNQSxlQUFPTixVQUFVVSxNQUFWLENBQWtCO0FBQUEsbUJBQVksQ0FBQyxDQUFELEtBQU81QyxpQkFBaUIyQyxPQUFqQixDQUEwQlAsUUFBMUIsQ0FBbkI7QUFBQSxTQUFsQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7OztBQU1lLGFBQVNyQyxVQUFULENBQXFCWSxHQUFyQixFQUEwQmtDLFNBQTFCLEVBQXFDZixZQUFyQyxFQUFvRDtBQUMvRCxZQUFNMUIsT0FBT00sMkJBQTRCQyxHQUE1QixFQUFpQ2tDLFVBQVV4QyxJQUEzQyxFQUFpRHdDLFVBQVV2QyxNQUEzRCxDQUFiO0FBQ0EsWUFBSyxTQUFTRixJQUFkLEVBQXFCO0FBQ2pCLG1CQUFPLEVBQVA7QUFDSDtBQUNELFlBQU15QixZQUFZRixpQkFBa0J2QixJQUFsQixDQUFsQjtBQUNBLGVBQU93QixxQkFBc0JqQixHQUF0QixFQUEyQmtCLFNBQTNCLEVBQXNDQyxZQUF0QyxDQUFQO0FBQ0giLCJmaWxlIjoic2NvcGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hhbS93b3JrL2Vycm9yLXRyYXBwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTQ09QRV9DTE9TVVJFX1ZBUklBQkxFIH0gZnJvbSAnLi4vLi4vbWFjcm9zL2NvbnN0YW50cyc7XG5cbi8vIFRPRE86IGR5bmFtaWMgbG9hZCBlc2NvcGVcblxuY29uc3QgSUdOT1JFX1ZBUklBQkxFUyA9IFtcbiAgICAnYXJndW1lbnRzJyxcbiAgICBTQ09QRV9DTE9TVVJFX1ZBUklBQkxFXG5dO1xuXG4vKipcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIoIHZhbHVlICkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gKiBAcGFyYW0ge051bWJlcn0gbGluZVxuICogQHBhcmFtIHtOdW1iZXJ8Kn0gY29sdW1uXG4gKi9cbmZ1bmN0aW9uIGlzTm9kZU9uUG9zaXRpb24oIG5vZGUsIGxpbmUsIGNvbHVtbiApIHtcbiAgICBjb25zdCBzdGFydCA9IG5vZGUubG9jLnN0YXJ0O1xuICAgIHJldHVybiBzdGFydC5saW5lID09PSBsaW5lICYmIChcbiAgICAgICAgIWlzTnVtYmVyKCBjb2x1bW4gKSB8fFxuICAgICAgICAhaXNOdW1iZXIoIHN0YXJ0LmNvbHVtbiApIHx8XG4gICAgICAgIHN0YXJ0LmNvbHVtbiA9PT0gY29sdW1uXG4gICAgKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gKiBAcGFyYW0ge051bWJlcn0gbGluZVxuICogQHBhcmFtIHtOdW1iZXJ8Kn0gY29sdW1uXG4gKi9cbmZ1bmN0aW9uIG5vZGVTaWJsaW5nQWZ0ZXIoIG5vZGUsIGxpbmUsIGNvbHVtbiApIHtcbiAgICBjb25zdCBzdGFydCA9IG5vZGUubG9jLnN0YXJ0O1xuICAgIHJldHVybiBzdGFydC5saW5lID4gbGluZSB8fCAoXG4gICAgICAgIHN0YXJ0LmxpbmUgPT09IGxpbmUgJiZcbiAgICAgICAgaXNOdW1iZXIoIHN0YXJ0LmNvbHVtbiApICYmXG4gICAgICAgIGlzTnVtYmVyKCBjb2x1bW4gKSAgJiZcbiAgICAgICAgc3RhcnQuY29sdW1uID4gY29sdW1uXG4gICAgKTtcbn1cblxuLyoqXG4gKiBGaW5kIG5vZGUgYnkgcGFzc2luZyBsaW5lIG51bWJlclxuICogQHBhcmFtIHtPYmplY3R9IGFzdFxuICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5cbiAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICovXG5mdW5jdGlvbiBmaW5kTm9kZUJ5TGluZUFuZEFkZFBhcmVudCggYXN0LCBsaW5lLCBjb2x1bW4gKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbIGFzdCBdO1xuICAgIGxldCBsYXN0V2Fsa2VkTm9kZUF0TGluZSA9IG51bGw7XG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBzdGFja1sgaSBdO1xuICAgICAgICBjb25zdCBzdGFydCA9IG5vZGUubG9jLnN0YXJ0O1xuICAgICAgICBpZiAoIGlzTm9kZU9uUG9zaXRpb24oIG5vZGUsIGxpbmUsIGNvbHVtbiApICkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBudWxsICE9PSBsYXN0V2Fsa2VkTm9kZUF0TGluZSAmJiBub2RlU2libGluZ0FmdGVyKCBub2RlLCBsaW5lLCBjb2x1bW4gKSApIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0V2Fsa2VkTm9kZUF0TGluZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHN0YXJ0LmxpbmUgPT09IGxpbmUgJiYgc3RhcnQuY29sdW1uIDwgY29sdW1uICkge1xuICAgICAgICAgICAgbGFzdFdhbGtlZE5vZGVBdExpbmUgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbGV0IGtleSBpbiBub2RlICkge1xuICAgICAgICAgICAgaWYgKCBub2RlLmhhc093blByb3BlcnR5KCBrZXkgKSAmJiBrZXkgIT09ICdwYXJlbnQnICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZVsga2V5IF07XG4gICAgICAgICAgICAgICAgaWYgKCBjaGlsZCBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaiA9IDAsIGxlbiA9IGNoaWxkLmxlbmd0aDsgaiA8IGxlbjsgaisrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViQ2hpbGQgPSBjaGlsZFsgaiBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQucGFyZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goIHN1YkNoaWxkIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goIGNoaWxkIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgc2NvcGUgZm9yIG5vZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGZpbmRTY29wZUZvck5vZGUoIG5vZGUgKSB7XG4gICAgbGV0IHBhcmVudCA9IG5vZGU7XG4gICAgd2hpbGUgKFxuICAgICAgICAnRnVuY3Rpb25EZWNsYXJhdGlvbicgIT09IHBhcmVudC50eXBlICYmXG4gICAgICAgICdGdW5jdGlvbkV4cHJlc3Npb24nICE9PSBwYXJlbnQudHlwZSAmJlxuICAgICAgICAnUHJvZ3JhbScgIT09IG5vZGUudHlwZVxuICAgICkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50O1xufVxuXG4vKipcbiAqIENvbGxlY3QgYWxsIHZhcmlhYmxlIG5hbWVzIGZvciBzY29wZVxuICogQHBhcmFtIHtPYmplY3R9IGFzdFxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlTm9kZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2NvcGVBbmFseXplIGFuYWx5emUgZnVuY3Rpb24gZnJvbSAnZXNjb3BlJ1xuICogQHJldHVybiB7QXJyYXkuPFN0cmluZz59XG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RWYXJpYWJsZU5hbWVzKCBhc3QsIHNjb3BlTm9kZSwgc2NvcGVBbmFseXplICkge1xuICAgIGNvbnN0IHNjb3BlTWFuYWdlciA9IHNjb3BlQW5hbHl6ZSggYXN0ICk7XG4gICAgY29uc3QgY3VycmVudFNjb3BlID0gc2NvcGVNYW5hZ2VyLmFjcXVpcmUoIHNjb3BlTm9kZSApO1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IGN1cnJlbnRTY29wZVxuICAgICAgICAudmFyaWFibGVzXG4gICAgICAgIC5tYXAoIHZhcmlhYmxlID0+IHZhcmlhYmxlLm5hbWUgKTtcbiAgICBjdXJyZW50U2NvcGUucmVmZXJlbmNlcy5mb3JFYWNoKCByZWZlcmVuY2UgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuaWRlbnRpZmllci5uYW1lO1xuICAgICAgICBpZiAoIC0xID09PSB2YXJpYWJsZXMuaW5kZXhPZiggdmFyaWFibGVOYW1lICkgKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMucHVzaCggdmFyaWFibGVOYW1lICk7XG4gICAgICAgIH1cbiAgICB9ICk7XG4gICAgcmV0dXJuIHZhcmlhYmxlcy5maWx0ZXIoIHZhcmlhYmxlID0+IC0xID09PSBJR05PUkVfVkFSSUFCTEVTLmluZGV4T2YoIHZhcmlhYmxlICkgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXN0XG4gKiBAcGFyYW0ge1N0YWNrTGluZX0gc3RhY2tMaW5lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzY29wZUFuYWx5emVcbiAqIEByZXR1cm4ge0FycmF5LjxTdHJpbmc+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVNjb3BlKCBhc3QsIHN0YWNrTGluZSwgc2NvcGVBbmFseXplICkge1xuICAgIGNvbnN0IG5vZGUgPSBmaW5kTm9kZUJ5TGluZUFuZEFkZFBhcmVudCggYXN0LCBzdGFja0xpbmUubGluZSwgc3RhY2tMaW5lLmNvbHVtbiApO1xuICAgIGlmICggbnVsbCA9PT0gbm9kZSApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBzY29wZU5vZGUgPSBmaW5kU2NvcGVGb3JOb2RlKCBub2RlICk7XG4gICAgcmV0dXJuIGNvbGxlY3RWYXJpYWJsZU5hbWVzKCBhc3QsIHNjb3BlTm9kZSwgc2NvcGVBbmFseXplICk7XG59Il19

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _loader) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = extractErrorPlace;

    var _loader2 = _interopRequireDefault(_loader);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var StackLine = function () {
        function StackLine(file, line, column) {
            _classCallCheck(this, StackLine);

            this.file = file;
            this.line = parseInt(line);
            this.column = parseInt(column);
        }

        /**
         * Load content for `this.file`
         * @param {Function} callback
         * @param {Function} failback
         */


        _createClass(StackLine, [{
            key: 'loadFileContent',
            value: function loadFileContent(callback, failback) {
                _loader2.default.load(this.file, callback, failback);
            }
        }]);

        return StackLine;
    }();

    /**
     * Parse error stack for extract file's name & position
     * @param stackMessage
     * @return {StackLine}
     */
    function extractErrorPlace(stackMessage) {
        var JS_FILE_REGEX = /(https?:\/\/.+\.js):(\d+):(\d+)?/i;

        var messages = stackMessage.split('\n');
        for (var i = 0; i < messages.length; i++) {
            var trimmedLine = messages[i].trim();
            var matches = trimmedLine.match(JS_FILE_REGEX);
            if (null !== matches) {
                var _matches$slice = matches.slice(1),
                    _matches$slice2 = _slicedToArray(_matches$slice, 3),
                    file = _matches$slice2[0],
                    line = _matches$slice2[1],
                    column = _matches$slice2[2];

                return new StackLine(file, line, column);
            }
        }

        return null;
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYXJzZXJzL3N0YWNrLmpzIl0sIm5hbWVzIjpbImV4dHJhY3RFcnJvclBsYWNlIiwiU3RhY2tMaW5lIiwiZmlsZSIsImxpbmUiLCJjb2x1bW4iLCJwYXJzZUludCIsImNhbGxiYWNrIiwiZmFpbGJhY2siLCJsb2FkIiwic3RhY2tNZXNzYWdlIiwiSlNfRklMRV9SRUdFWCIsIm1lc3NhZ2VzIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwidHJpbW1lZExpbmUiLCJ0cmltIiwibWF0Y2hlcyIsIm1hdGNoIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztzQkFnQ3dCQSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBdEJsQkMsUztBQUNGLDJCQUFhQyxJQUFiLEVBQW1CQyxJQUFuQixFQUF5QkMsTUFBekIsRUFBa0M7QUFBQTs7QUFDOUIsaUJBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLGlCQUFLQyxJQUFMLEdBQVlFLFNBQVVGLElBQVYsQ0FBWjtBQUNBLGlCQUFLQyxNQUFMLEdBQWNDLFNBQVVELE1BQVYsQ0FBZDtBQUNIOztBQUVEOzs7Ozs7Ozs7NENBS2lCRSxRLEVBQVVDLFEsRUFBVztBQUNsQyxpQ0FBT0MsSUFBUCxDQUFhLEtBQUtOLElBQWxCLEVBQXdCSSxRQUF4QixFQUFrQ0MsUUFBbEM7QUFDSDs7Ozs7O0FBR0w7Ozs7O0FBS2UsYUFBU1AsaUJBQVQsQ0FBNEJTLFlBQTVCLEVBQTJDO0FBQ3RELFlBQU1DLGdCQUFnQixtQ0FBdEI7O0FBRUEsWUFBTUMsV0FBV0YsYUFBYUcsS0FBYixDQUFvQixJQUFwQixDQUFqQjtBQUNBLGFBQU0sSUFBSUMsSUFBSSxDQUFkLEVBQWlCQSxJQUFJRixTQUFTRyxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBNEM7QUFDeEMsZ0JBQU1FLGNBQWNKLFNBQVVFLENBQVYsRUFBY0csSUFBZCxFQUFwQjtBQUNBLGdCQUFNQyxVQUFVRixZQUFZRyxLQUFaLENBQW1CUixhQUFuQixDQUFoQjtBQUNBLGdCQUFLLFNBQVNPLE9BQWQsRUFBd0I7QUFBQSxxQ0FDV0EsUUFBUUUsS0FBUixDQUFlLENBQWYsQ0FEWDtBQUFBO0FBQUEsb0JBQ1pqQixJQURZO0FBQUEsb0JBQ05DLElBRE07QUFBQSxvQkFDQUMsTUFEQTs7QUFFcEIsdUJBQU8sSUFBSUgsU0FBSixDQUFlQyxJQUFmLEVBQXFCQyxJQUFyQixFQUEyQkMsTUFBM0IsQ0FBUDtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxJQUFQO0FBQ0giLCJmaWxlIjoic3RhY2suanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hhbS93b3JrL2Vycm9yLXRyYXBwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZGVyIGZyb20gJy4uL2xvYWRlcic7XG5cbi8qKlxuICogUGFyc2VkIHN0YWNrIGxpbmVcbiAqXG4gKiBAY2xhc3MgU3RhY2tMaW5lXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZmlsZSBmaWxlJ3MgbmFtZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGxpbmVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjb2x1bW5cbiAqL1xuY2xhc3MgU3RhY2tMaW5lIHtcbiAgICBjb25zdHJ1Y3RvciggZmlsZSwgbGluZSwgY29sdW1uICkge1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICB0aGlzLmxpbmUgPSBwYXJzZUludCggbGluZSApO1xuICAgICAgICB0aGlzLmNvbHVtbiA9IHBhcnNlSW50KCBjb2x1bW4gKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGNvbnRlbnQgZm9yIGB0aGlzLmZpbGVgXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmYWlsYmFja1xuICAgICAqL1xuICAgIGxvYWRGaWxlQ29udGVudCggY2FsbGJhY2ssIGZhaWxiYWNrICkge1xuICAgICAgICBsb2FkZXIubG9hZCggdGhpcy5maWxlLCBjYWxsYmFjaywgZmFpbGJhY2sgKTtcbiAgICB9XG59XG5cbi8qKlxuICogUGFyc2UgZXJyb3Igc3RhY2sgZm9yIGV4dHJhY3QgZmlsZSdzIG5hbWUgJiBwb3NpdGlvblxuICogQHBhcmFtIHN0YWNrTWVzc2FnZVxuICogQHJldHVybiB7U3RhY2tMaW5lfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRyYWN0RXJyb3JQbGFjZSggc3RhY2tNZXNzYWdlICkge1xuICAgIGNvbnN0IEpTX0ZJTEVfUkVHRVggPSAvKGh0dHBzPzpcXC9cXC8uK1xcLmpzKTooXFxkKyk6KFxcZCspPy9pO1xuXG4gICAgY29uc3QgbWVzc2FnZXMgPSBzdGFja01lc3NhZ2Uuc3BsaXQoICdcXG4nICk7XG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgbWVzc2FnZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGNvbnN0IHRyaW1tZWRMaW5lID0gbWVzc2FnZXNbIGkgXS50cmltKCk7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0cmltbWVkTGluZS5tYXRjaCggSlNfRklMRV9SRUdFWCApO1xuICAgICAgICBpZiAoIG51bGwgIT09IG1hdGNoZXMgKSB7XG4gICAgICAgICAgICBjb25zdCBbIGZpbGUsIGxpbmUsIGNvbHVtbiBdID0gbWF0Y2hlcy5zbGljZSggMSApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0xpbmUoIGZpbGUsIGxpbmUsIGNvbHVtbiApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG4iXX0=

/***/ }),
/* 9 */
/***/ (function(module, exports) {

exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map