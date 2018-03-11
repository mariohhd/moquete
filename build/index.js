'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = patchRequire(require);
var casper = _require('casper');
var Casper = casper.Casper;
var x = casper.selectXPath;
var utils = _require('utils');
var fs = _require('fs');

var Moquete = function (_Casper) {
    _inherits(Moquete, _Casper);

    function Moquete() {
        _classCallCheck(this, Moquete);

        var _this = _possibleConstructorReturn(this, (Moquete.__proto__ || Object.getPrototypeOf(Moquete)).call(this));

        _this.captures_counter = 0;
        return _this;
    }

    _createClass(Moquete, [{
        key: '_start',
        value: function _start(url, comment, status_code) {
            var _this2 = this;

            this.start(function () {
                _this2.open(url);
                _this2.test.assertHttpStatus(status_code | 200);
                _this2.test.comment(comment | url + ' starts!');
                _this2.test.info('[moquete] start');
            });
        }
    }, {
        key: '_thenOpenAndExistXpath',
        value: function _thenOpenAndExistXpath(url, path, status_code) {
            var _this3 = this;

            this.thenOpen(url, function () {
                _this3.test.assertHttpStatus(status_code | 200);
                _this3.test.comment('[moquete] Open the page (' + _this3.getTitle() + ')');
                _this3.test.info('[moquete] Current location is ' + _this3.getCurrentUrl());
                _this3.test.assertExist(x(path), path + ' exists!');
            });
        }
    }, {
        key: '_thenClickAndWaitFor',
        value: function _thenClickAndWaitFor(path, check, then, timeout) {
            var _this4 = this;

            this.thenClick(x(path), function () {
                _this4.waitFor(check, then, timeout);
            });
        }
    }, {
        key: '_thenClickAndWaitForUrl',
        value: function _thenClickAndWaitForUrl(path, url, then, timeout) {
            var _this5 = this;

            this.thenClick(x(path), function () {
                _this5.waitForUrl(url, then, timeout);
            });
        }
    }, {
        key: '_thenClickAndWaitForSelector',
        value: function _thenClickAndWaitForSelector(path, selector, success, fail) {
            var _this6 = this;

            this.thenClick(x(path), function () {
                _this6.waitForSelector(x(selector), success, fail);
            });
        }
    }, {
        key: '_waitForSelector',
        value: function _waitForSelector(path, success, fail) {
            this.waitForSelector(x(path), success, fail);
        }
    }, {
        key: '_run',
        value: function _run() {
            var _this7 = this;

            this.run(function () {
                _this7.test.done();
            });
        }
    }, {
        key: '_printTitle',
        value: function _printTitle() {
            this.echo('### ' + this.getTitle() + ' ###', 'INFO_BAR');
        }
    }, {
        key: '_clearCookies',
        value: function _clearCookies() {
            this.test.info("Clear cookies");
            this.page.clearCookies();
        }
    }, {
        key: '_capturePage',
        value: function _capturePage(debug_name) {
            var directory = 'captures/' + this.test.currentSuite.name;
            if (this.captures_counter > 0) {
                var previous = directory + '/step-' + (this.captures_counter - 1) + '.png';
                if (debug_name && this.exists("body")) {
                    var current = directory + '/step-' + this.captures_counter + '-' + debug_name + '.png';
                } else {
                    var current = directory + '/step-' + this.captures_counter + '.png';
                }
                this.captureSelector(current, 'html');

                // If previous is same as current (and no debug_name), remove current
                if (!debug_name && fs.isFile(previous) && fs.read(current) === fs.read(previous) && fs.isFile(current)) {
                    fs.remove(current);
                    this.captures_counter--;
                    this.log('Capture removed because same as previous', 'warning');
                }
            } else {
                // We remove the directory to cleanup
                fs.removeTree(directory);
            }
            this.captures_counter++;
        }
    }]);

    return Moquete;
}(Casper);

exports.Moquete = Moquete;