'use strict';




function intro() {

    let answer = prompt('Are you hungry for ice cream?');
    if (answer === 'yes') {
        document.write('You have come to the right place if so');
    } else {
        document.write('Guess you dont like ice cream');
    }
}

function getName() {

    let userName = prompt ('What is your name?');
    return userName
}
