import chalk from 'chalk';
import greet from './greet.js';
import figlet from 'figlet';
//var figlet = require("figlet");

figlet(greet("Avile"), {
    horizontalLayout: "fitted"
    },
    function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
//console.log(styledMessage);