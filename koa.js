// const app = new Koa();
// app.use();
// app.listen();

const http = require('http');
// Application 
class Koa {
    middleware = ()=>{};
    constructor(){}

    listen(port, cb){
        const server = http.createServer((req, res)=>{
            this.middleware(req, res);
        });
        server.listen(port, cb);
    }

    use(middleware){
        this.middleware = middleware;
        return this;
    }
}

module.exports = Koa;