'use strict';

module.exports = {
    'FirstState': {
        'HelloWorldIntent': function() {
            this.followUpState('SecondState')
                .ask('Hello World! What\'s your name?', 'Please tell me your name.');
        },

        'Unhandled': function() {
            this.toIntent('HelloWorldIntent');
        },
    },
};
