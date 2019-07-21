const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
 //子路由
let home = new Router();
home.get('/RS',async(ctx)=>{
    ctx.body="Home RS";
}).get('/todo',async(ctx)=>{
    ctx.body ='Home ToDo';
})
 
let page = new Router();
page.get('/RS',async(ctx)=>{
    ctx.body="Page RS";
}).get('/todo',async(ctx)=>{
    ctx.body ='Page ToDo';
})
 
//装载所有子路由
let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());
 
 
//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());
 
 
 
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});