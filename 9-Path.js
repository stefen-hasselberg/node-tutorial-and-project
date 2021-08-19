const path = require("path");
const { fileURLToPath } = require("url");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt");

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const abasolute = path.resolve(__dirname, "content", "subfolder", "text.txt");

console.log(abasolute);
