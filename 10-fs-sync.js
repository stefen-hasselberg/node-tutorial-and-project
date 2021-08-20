const path = require('path');
const { readFileSync, writeFileSync, read } = require('fs');

const first = readFileSync(
  path.resolve(__dirname, 'content', 'first.txt'),
  'utf-8'
);

console.log(first);

const second = writeFileSync(
  path.resolve(__dirname, 'content', 'second.txt'),
  'Hello world second file',
  { flag: 'a' } //appends text to file
);
