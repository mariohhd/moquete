# Moquete

Moquete is an extension from Casperjs that includes more interesting functionality for your functional testing.

## Show me some code :P

```javascript
var Moquete = require('./moquete').Moquete;
var moquete = new Moquete();
moquete.test.begin('a twitter bootstrap dropdown can be opened', 2, function(test) {
    moquete._start('http://getbootstrap.com/2.3.2/javascript.html#dropdowns');
    moquete.thenClickAndWaitForSelector ('//div[@class="minicart-header js-show-minicart"]', '//a[@class="button _primary minicart-buy_cart js-go-to-full-cart"]', 
        function() {
            this.test.assertExist(xpath('//a[@class="button _primary minicart-buy_cart js-go-to-full-cart"]'), 'Exists button');
        },
        function() {
            this.echo('No exists element', 'ERROR');
        }
    );
    }).run(function() {
        test.done();
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