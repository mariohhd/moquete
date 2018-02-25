var Moquete = require('./moquete2').Moquete;



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
        test.assertTruthy(this.moquete.thenOpenAndExistXpath);
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
        test.assertTruthy(this.moquete.thenClickAndWaitFor);
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
        test.assertTruthy(this.moquete.thenClickAndWaitForUrl);
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
        test.assertTruthy(this.moquete.thenClickAndWaitForSelector);
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

casper.test.begin('#moquete should has printTitle', 1, {
    setUp: function(test) {
        this.moquete = new Moquete();
    },

    tearDown: function(test) {
        this.moquete = null;
        delete this.moquete;
    },
    test: function(test) {
        test.assertTruthy(this.moquete.printTitle);
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
        test.assertTruthy(this.moquete.clearCookies);
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
        test.assertTruthy(this.moquete.capturePage);
        test.done();
    }
});


/*
describe('moquete', function() {
  describe('moquete api', function() {
    it('#moquete should has start', function() {
      should.exist(moquete.start);
    });

    it('#moquete should has open', function() {
        should.exist(moquete.open);
    });

    it('#moquete should has thenClickAndWaitFor', function() {
        should.exist(moquete.thenClickAndWaitFor);
    });

    it('#moquete should has thenClickAndWaitForUrl', function() {
        should.exist(moquete.thenClickAndWaitForUrl);
    });

    it('#moquete should has thenClickAndWaitForSelector', function() {
        should.exist(moquete.thenClickAndWaitForSelector);
    });

    it('#moquete should has waitForSelector', function() {
        should.exist(moquete.waitForSelector);
    });
  });
});*/