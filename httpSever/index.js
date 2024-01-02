const http =  require('http')
const fs = require('fs')
 const server =  http.createServer((req, res) => {
    //  console.log(req.url)
    if(req.url == '/'){
     res.end('hello frm the others side ')
    } else if (req.url == '/about'){
        res.end('Hello from the AboutUs sides');
    } else if (req.url == '/Userapi'){
        
        fs.readFile(`${__dirname}/userApi/Userapi.json`,'utf-8', (err, data) =>{
       console.log(data)
    //    res.end(data)
       const objData = JSON.parse(data)
       res.end(objData[2].thumbnail)
        });
        // res.end('Hello from the userApi sides')
    } else {
         res.writeHead(404,{'content-type': 'text/html'});
        res.end('<h1>404 error page doesnot exits</h1>')
    }
 });
 server.listen(8000, '127.0.0.1', () => {
    console.log('listening to the port 8000')
 })