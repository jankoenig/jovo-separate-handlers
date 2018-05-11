'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler(
    require('./handlers/stateless'),

    // Option 1: Require full object
    require('./handlers/firstState'),

    // Option 2: Require inside state object
    {
        'SecondState': require('./handlers/secondState'),
    }
);

module.exports.app = app;
