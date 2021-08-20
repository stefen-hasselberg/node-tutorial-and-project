const path = require('path');
const { readFile, writeFile } = require('fs');

readFile(
  path.resolve(__dirname, 'content', 'first.txt'),
  'utf8',
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const first = result;
    console.log(first);

    readFile(
      path.resolve(__dirname, 'content', 'second.txt'),
      'utf8',
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        const second = result;
        console.log(second);

        writeFile(
          path.resolve(__dirname, 'content', 'subfolder', 'test2.txt'),
          `Here is output ${first} ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(result);
          }
        );
      }
    );
  }
);
