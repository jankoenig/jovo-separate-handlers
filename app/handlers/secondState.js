'use strict';

module.exports = {
    'MyNameIsIntent': function(name) {
        this.tell('Hey ' + name.value + ', nice to meet you!');
    },

    'Unhandled': function() {
        this.ask('What\'s your name?');
    },
};
