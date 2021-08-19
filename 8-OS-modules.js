const os = require("os");

// info about the current user
console.log(os.userInfo());

// method return the system update in seconds
console.log(`System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
