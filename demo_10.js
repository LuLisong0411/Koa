const Koa = require('koa');

const app = new Koa();

app.use(async(ctx)=>{
    if(ctx.url === '/index'){
        ctx.cookies.set(
            'userName','RS'
        );
        ctx.body = 'cookies is ok'
    }else{
        ctx.body = 'cookies is null'
    }
});

app.listen(3000,()=>{
    console.log('server is starting in port 3000');
})
