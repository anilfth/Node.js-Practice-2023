const path = require('path')
 console.log(path.dirname('D:\Node.js-Practice-2023\Pathmodule'))
// extension name 
 console.log(path.extname('D:\Node.js-Practice-2023\Pathmodule'));

 // base name
  console.log(path.basename('D:\Node.js-Practice-2023\Pathmodule'))
   
  // parse -- return n object whose properties represnt significant elements of the path 
   
   const myPath = path.parse('D:\Node.js-Practice-2023\Pathmodule')
   console.log(myPath.name);
    console.log(myPath.root);