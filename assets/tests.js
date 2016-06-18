define('ember-collapsible-layout-demo/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/controllers/cats.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/cats.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/cats.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    server.shutdown();
  }
});
define('ember-collapsible-layout-demo/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-collapsible-layout-demo/tests/helpers/start-app', 'ember-collapsible-layout-demo/tests/helpers/destroy-app'], function (exports, _qunit, _emberCollapsibleLayoutDemoTestsHelpersStartApp, _emberCollapsibleLayoutDemoTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberCollapsibleLayoutDemoTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberCollapsibleLayoutDemoTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ember-collapsible-layout-demo/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/helpers/resolver', ['exports', 'ember-collapsible-layout-demo/resolver', 'ember-collapsible-layout-demo/config/environment'], function (exports, _emberCollapsibleLayoutDemoResolver, _emberCollapsibleLayoutDemoConfigEnvironment) {

  var resolver = _emberCollapsibleLayoutDemoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberCollapsibleLayoutDemoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberCollapsibleLayoutDemoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-collapsible-layout-demo/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/helpers/start-app', ['exports', 'ember', 'ember-collapsible-layout-demo/app', 'ember-collapsible-layout-demo/config/environment'], function (exports, _ember, _emberCollapsibleLayoutDemoApp, _emberCollapsibleLayoutDemoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberCollapsibleLayoutDemoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberCollapsibleLayoutDemoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-collapsible-layout-demo/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/models/cat.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/cat.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/cat.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/routes/application/cat.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application/cat.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application/cat.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/routes/cats/cat.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/cats/cat.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cats/cat.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/routes/cats/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/cats/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cats/index.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/routes/cats.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/cats.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cats.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/test-helper', ['exports', 'ember-collapsible-layout-demo/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberCollapsibleLayoutDemoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberCollapsibleLayoutDemoTestsHelpersResolver['default']);
});
define('ember-collapsible-layout-demo/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/unit/controllers/cats-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:cats', 'Unit | Controller | cats', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-collapsible-layout-demo/tests/unit/controllers/cats-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/cats-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cats-test.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/unit/models/cat-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('cat', 'Unit | Model | cat', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-collapsible-layout-demo/tests/unit/models/cat-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/cat-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/cat-test.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/application/cat-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application/cat', 'Unit | Route | application/cat', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/application/cat-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application/cat-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application/cat-test.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/cats/cat-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cats/cat', 'Unit | Route | cats/cat', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/cats/cat-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/cats/cat-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cats/cat-test.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/cats/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cats/index', 'Unit | Route | cats/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/cats/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/cats/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cats/index-test.js should pass jshint.');
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/cats-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cats', 'Unit | Route | cats', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-collapsible-layout-demo/tests/unit/routes/cats-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/cats-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cats-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-collapsible-layout-demo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map