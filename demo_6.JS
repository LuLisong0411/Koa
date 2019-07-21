const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
router.get('/',function(ctx,next){
    ctx.body = "hello Koa-router";
})
//多页面配置
.get('/todo',(ctx,next)=>{
    ctx.body = "todo page"
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('server is starting in port 3000')
})