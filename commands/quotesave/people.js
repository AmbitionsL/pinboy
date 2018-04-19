const Flashfigure = require(../quotesave/brandon.js);
const Sticky_Note = require(../quotesave/jamey.js);

var people = {Flashfigure: [Flashfigure[Math.floor(Math.random() * Flashfigure.length)], Sticky_Note: [Sticky_Note[Math.floor(Math.random() * Sticky_Note.length)]};

module.exports = people;
