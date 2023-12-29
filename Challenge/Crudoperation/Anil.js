const fs = require('fs')
// creating a new file 
// fs.mkdirSync('Anil.js')

// creating a new file bi.txt
fs.writeFileSync('bio.txt', 'Hello! How are you!')
 // adding the data end of the last line 
fs.appendFileSync('bio.txt', 'I am fine Thank you so much!')

//  printing data without getting the buffer data at first using file encoding: 
const readData = fs.readFileSync("./bio.txt", "utf8");
console.log(readData);
 
 // rename the file 
  
  fs.renameSync('bio.txt', 'mybio.txt');

   // delete the file nad the folder 
    
    fs.rmdirSync('mybio.txt');
