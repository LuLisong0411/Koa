// async function testAsync(){
    //     return 'hello Async'
    // }
    // const result = testAsync();
//     console.log(result)     //Promise { ‘Hello async’ }，返回的是Promise。
// async/await同时使用
// async function testAsync(){
//     return 'hello Async'
// }
// function getSomething(){
//     return 'hello await'
// }
// // 

// // await:async wait

// async function test(){
//     const v1 = await getSomething();
//     const v2 = await testAsync();
//     console.log(v1,v2)
// }
// test(); 
//模拟async和await等待,请求数据
// function takeLongTime(){
//     return new Promise(resolve=>{
//         setTimeout(() => resolve("long_time_value"), 2000)
//     });
// }
// async function test(){
//     const v = await takeLongTime();
//     console.log(v)
// }
// test();

