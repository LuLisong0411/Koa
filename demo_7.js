const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
    prefix:'/RS'
});
router.get('/',function(ctx,next){
    ctx.body = "<h1>hello Koa-router</h1>";
})
//多页面配置
.get('/todo',(ctx,next)=>{
    ctx.body = "<h1>todo page</h1>"
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('server is starting in port 3000')
})