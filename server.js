const jsonServer = requie('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

//server.listen(port);
server.listen(port, function(){
    console.log(`Application is listening on port ${port}!`)
});