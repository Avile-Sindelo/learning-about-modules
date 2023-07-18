import chalk from 'chalk';
import greet from './greet.js';
import figlet from 'figlet';

//      chalk
const styledMessage = chalk.bgGreen.black(greet("Xola"));
console.log(styledMessage);


//      Figlet
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


