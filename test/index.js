var Moquete = require('../build/index').Moquete;
console.log(JSON.stringify(Moquete));

casper.test.begin('#moquete should has a constructor', 1, {
    test: function(test) {
        test.assertTruthy(Moquete);
        test.done();
    }
});

casper.test.begin('#moquete should has _start', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._start);
        test.done();
    }
});

casper.test.begin('#moquete should has thenOpenAndExistXpath', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._thenOpenAndExistXpath);
        test.done();
    }
});

casper.test.begin('#moquete should has thenClickAndWaitFor', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._thenClickAndWaitFor);
        test.done();
    }
});

casper.test.begin('#moquete should has thenClickAndWaitForUrl', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._thenClickAndWaitForUrl);
        test.done();
    }
});

casper.test.begin('#moquete should has thenClickAndWaitForSelector', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._thenClickAndWaitForSelector);
        test.done();
    }
});

casper.test.begin('#moquete should has _waitForSelector', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._waitForSelector);
        test.done();
    }
});

casper.test.begin('#moquete should has _run', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._run);
        test.done();
    }
});

casper.test.begin('#moquete should has printTitle', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._printTitle);
        test.done();
    }
});

casper.test.begin('#moquete should has clearCookies', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._clearCookies);
        test.done();
    }
});

casper.test.begin('#moquete should has capturePage', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete._capturePage);
        test.done();
    }
});