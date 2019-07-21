// Cookie选项

// 比如我们要存储用户名，保留用户登录状态时，你可以选择7天内不用登录，
// 也可以选择30天内不用登录。需要在写入是配置一些选项：

// domain：写入cookie所在的域名
// path：写入cookie所在的路径
// maxAge：Cookie最大有效时长
// expires：cookie失效时间
// httpOnly:是否只用http请求中获得
// overwirte：是否允许重写
const Koa  = require('koa');
const app = new Koa();
 
app.use(async(ctx)=>{
    if(ctx.url=== '/index'){
        ctx.cookies.set(
            'userName','RS',{
                domain:'127.0.0.1', // 写cookie所在的域名
                path:'/index',       // 写cookie所在的路径
                maxAge:1000*60*60*24,   // cookie有效时长
                expires:new Date('2020-12-31'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        );
        ctx.body = 'cookie is ok';
    }else{
        if(ctx.cookies.get('userName')){
            ctx.body = ctx.cookies.get('userName');
        }else{
            ctx.body = 'cookies is none'
        }
    }
});
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})