# Moquete

Moquete is an extension from Casperjs that includes more interesting functionality for your functional testing.

## Show me some code :P

```javascript
var Moquete = require('./moquete').Moquete;
var moquete = new Moquete();
var xpath   = require('casper').selectXPath;

moquete.test.begin('simple test on github', 2, function (test) {
    moquete._start('https://github.com', '[moquete] Open github page');
    moquete.thenOpenAndExistXpath('https://github.com', '//a[text()="Sign in"]');
    moquete.thenClickAndWaitForSelector ('//a[@class="text-bold text-white no-underline"][contains(@href,"login")]', '//input[@class="btn btn-primary btn-block"]', 
        function() {
            this.test.assertExist(xpath('//*[@id="login_field"]'), 'Login field is present');
            this.test.assertExist(xpath('//*[@id="password"]'), 'Password field is present');
        },
        function() {
            this.echo('Element does not exists', 'ERROR');
        }
    );
    moquete.run(function() {
            this.test.done();
    });
});
```
### Prerequisites

- PhantomJS 1.9.1 or greater. Please read the installation instructions for PhantomJS
- Python 2.6 or greater for casperjs in the bin/ directory

## Running the tests

```shell
    casperjs test test.js
``` 

## Authors

* **Mario Herreros Díaz** (https://github.com/mariohhd)
* **Marta Dorado Gonjar** (https://github.com/martaDorado)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
