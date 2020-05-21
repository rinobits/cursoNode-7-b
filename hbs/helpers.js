const hbs = require('hbs');

//register helpers
/*
hbs.registerHelper('getSomething', () => {
    return something;
})
*/

hbs.registerHelper('capitalize', (text) => {
    let words =text.split(' ');
    words.forEach((word, id) => {
        word[id] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return words.join(' ');
})