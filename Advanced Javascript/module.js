//common js + browserify
//js1
module.exports = function add(a, b) {
    return a+b;
}
//js2
var add = require (",/add");

//es6+webpack2
//js1
export const add = (a,b) => a*b;
//or
export default function add() {
    return a = b;
}

//js2
import {add} from "./add";
//or
import add from "./add"; 


//webpack main file

module.exports = {
    entry: ",/app/main.js",
    output: {
        path: ",/dist",
        filename: "bundle.js"
    }
}