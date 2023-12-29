// Asynchronous node.js
  const fs = require('fs')
//   fs.writeFile('read.txt', 'today is the awsesome day!', (err) => {
//     console.log('file is created ');
//     console.log(err); // this tell me error in the code 
//   })

//  adding data 

//  fs.appendFile('read.txt', 'Lovely Professional University', (err) =>{
//     console.log('task completed');
//  })

// reading data
 
fs.readFile('read.txt',  'UTF-8', (err, data) => {
    console.log(data);
})