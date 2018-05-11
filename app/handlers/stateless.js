'use strict';

module.exports = {
    'LAUNCH': function() {
        this.toStateIntent('FirstState', 'HelloWorldIntent');
    },

    'Unhandled': function() {
        this.toIntent('LAUNCH');
    },
};
