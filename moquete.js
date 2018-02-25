//API Casperjs - http://docs.casperjs.org/en/latest/modules/index.html

var require = patchRequire(require);
var casper = require('casper');
var Casper = casper.Casper;
var xpath = casper.selectXPath;
var utils  = require('utils');
var fs      = require('fs');


function Moquete() {
    Moquete.super_.apply(this, arguments);
};
utils.inherits(Moquete, Casper);

Moquete.prototype._start = function(url, comment, status_code) {
    this.start(function() {
        this.open(url);
        this.test.assertHttpStatus(status_code | 200);
        this.test.comment(comment | (url + ' starts!'));
        this.test.info('[moquete] start');
    });
};

Moquete.prototype.thenOpenAndExistXpath = function(url, path, status_code) {
    this.thenOpen(url, function(){
        this.test.assertHttpStatus(status_code | 200);
        this.test.comment('[moquete] Open the page ('+ this.getTitle() + ')');
        this.test.info('[moquete] Current location is ' + this.getCurrentUrl());
        this.test.assertExist(xpath(path), path + ' exists!');
    });
};

Moquete.prototype.thenClickAndWaitFor = function(path, check, then, timeout) {
    this.thenClick(xpath(path), function() {
        this.waitFor(check, then, timeout);
    });
};

Moquete.prototype.thenClickAndWaitForUrl = function(path, url, then, timeout) {
    this.thenClick(xpath(path), function() {
        this.waitForUrl(url, then, timeout);
    });
};

Moquete.prototype.thenClickAndWaitForSelector = function(path, selector, success, fail) {
    this.thenClick(xpath(path), function() {
        this.waitForSelector(xpath(selector), success, fail);
    });
};

Moquete.prototype._waitForSelector = function(path, success, fail) {
    this.waitForSelector(xpath(path), success, fail);
};

Moquete.prototype.printTitle = function() {
    this.echo('### ' + casper.getTitle() + ' ###', 'INFO_BAR');
};

Moquete.prototype.clearCookies = function() {
    this.test.info("Clear cookies");
    this.page.clearCookies();
};

Moquete.prototype.captures_counter = 0;

Moquete.prototype.capturePage = function (debug_name) {
    var directory = 'captures/' + this.test.currentSuite.name;
    if (this.captures_counter > 0) {
        var previous = directory + '/step-' + (this.captures_counter-1) + '.png';
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
            casper.log('Capture removed because same as previous', 'warning');
        }
    } else {
        // We remove the directory to cleanup
        fs.removeTree(directory);
    }
    this.captures_counter++;
};

exports.Moquete = Moquete;