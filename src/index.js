const _require = patchRequire(require);
const casper  = _require('casper');
const Casper  = casper.Casper;
const x       = casper.selectXPath;
const utils   = _require('utils');
const fs      = _require('fs');

class Moquete extends Casper {

    constructor() {
        super();
        this.captures_counter = 0;
    }

    _start(url, comment, status_code) {
        this.start(() => {
            this.open(url);
            this.test.assertHttpStatus(status_code | 200);
            this.test.comment(comment | (url + ' starts!'));
            this.test.info('[moquete] start');
        });
    }

    _thenOpenAndExistXpath(url, path, status_code) {
        this.thenOpen(url, () => {
            this.test.assertHttpStatus(status_code | 200);
            this.test.comment('[moquete] Open the page ('+ this.getTitle() + ')');
            this.test.info('[moquete] Current location is ' + this.getCurrentUrl());
            this.test.assertExist(x(path), path + ' exists!');
        });
    }

    _thenClickAndWaitFor(path, check, then, timeout) {
        this.thenClick(x(path), () => {
            this.waitFor(check, then, timeout);
        });
    }

    _thenClickAndWaitForUrl(path, url, then, timeout) {
        this.thenClick(x(path), () => {
            this.waitForUrl(url, then, timeout);
        });
    };
    
    _thenClickAndWaitForSelector(path, selector, success, fail) {
        this.thenClick(x(path), () => {
            this.waitForSelector(x(selector), success, fail);
        });
    };
    
    _waitForSelector(path, success, fail) {
        this.waitForSelector(x(path), success, fail);
    };
    
    _printTitle() {
        this.echo('### ' + this.getTitle() + ' ###', 'INFO_BAR');
    };
    
    _clearCookies() {
        this.test.info("Clear cookies");
        this.page.clearCookies();
    };
        
    _capturePage (debug_name) {
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
                this.log('Capture removed because same as previous', 'warning');
            }
        } else {
            // We remove the directory to cleanup
            fs.removeTree(directory);
        }
        this.captures_counter++;
    };
}

exports.Moquete = Moquete;