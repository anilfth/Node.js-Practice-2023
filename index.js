  // In REPL  we can perform some task like that 
   //1: Javascrit expression
   // 2: use variables 
   // 3: multiline code 
    // 4: use(_)  to get the last result 
    // 5: we can use editor mode  

     
    const fs = require('fs') ;  // creatibng the first module fs: file system 
     // creating the first new file  
    fs.writeFileSync('read.txt', 'Welcome to my heart');
  // updating the value on the file 
   fs.writeFileSync('read.txt', 'Lovely Professional University, Welcme to my heart');

//  add other content on the same file   using -- appendFileSync
  fs.appendFileSync('read.txt', 'How are you, I am fine  Thank you so much ');

    // reading the file data using readFileSync() 
     const buf_data = fs.readFileSync('read.txt');
     console.log(buf_data); 
      // output  ; <Buffer 4c 6f 76 65 6c 79 20 50 72 6f 66 65 73 73 69 6f 6e 61 6c 20 55 6e 69 76 65 72 73 69 74 79 2c 20 57 65 6c 63 6d 65 20 74 6f 20 6d 79 20 68 65 61 72 74 ... 42 more bytes>
    
      // Node.js includes an additional data called buffer  
      // buffer is not available in the browser's javascript
      // buffer is mainly used to store binary data
      // while rading from a file or receiving packets over the network

       
       // conver buffer data into original data
        org_data = buf_data.toString();
        console.log(org_data);
 

        // to rename the file
         
        fs.renameSync('read.txt', 'readwritetxt');
 
      