const http = require('http');
const { uptime } = require('process');
const server  = http.createServer((req, res)=>{
    console.log(req)
    // res.write("Welcome to our server,  this is the server we've hosted in node")
    // res.end()
    if(res){
        res.end("This is the home pahe")
    }

})
server.listen(5000)

