const http = require("http");
const server = http.createServer((req , res)=>{
    const {url ,method} = req ;
    console.log(method , url);
    if(url === "/add"){   
    res.end("2+3"); 
    }

    res.end("Hello");
}
)
server.listen(3000);