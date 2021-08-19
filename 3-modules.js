// COMMONJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minumum)

const names = require("./4-name");
const sayHi = require("./5-utils");
require("./7-mind-grenade");

const { john, peter } = names;

sayHi("susan");
sayHi(john);
sayHi(peter);
