const os = require('os')
console.log(os.arch()); // tell me architecture of the operating system
 
 // free memory 

  const freeMemory = os.freemem();
  console.log(freeMemory);
