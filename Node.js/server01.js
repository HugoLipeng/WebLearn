const http = require('http');  //引入 node.js里面的一个http包。因为引入之后，我们不会去修改它，所以用常量来表示


// 创建一台服务器
var server =  http.createServer(function (){   //当有人来访问这台服务器时，就会执行 function 回调函数
    console.log('有人来访问我了');
    
});

server.listen(8080);   //要让服务器设置为监听状态，端口设置为8080