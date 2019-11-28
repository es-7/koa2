const Koa = require('koa2');
const Router = require('koa-router')
const views = require('koa-views')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const router = new Router(); // 实例化路由
const app = new Koa();
const path = require('path')
const {deleteUser, recharge} = require('./sql/c')

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(bodyParser())

router.get('/', async (ctx) => {
    await ctx.render('index')
});
router.get('/user', async (ctx) => {
    const query = ctx.query
    ctx.response.type='json';
    if(query.phone && query.groupID){
        const msg = await deleteUser(query.phone,query.groupID,query.cid,query.cardno);
        ctx.status = 200
        if(msg){
            ctx.response.body={ data:msg};
        }else{
            ctx.response.body={data : '注销成功'};
        }
        return
    }
    ctx.status = 500
    ctx.response.body={data : '注销失败'};
});

router.get('/recharge', async (ctx) => {
    const query = ctx.query
    ctx.response.type='json';
    if(query.phone && query.groupID){
        const msg = await recharge(query.phone,query.groupID);
        ctx.status = 200
        if(msg){
            ctx.response.body={ data:msg};
        }else{
            ctx.response.body={data : '充值成功'};
        }
        return
    }
    ctx.status = 500
    ctx.response.body={data : '充值失败'};
});


app.use(router.routes());
app.use(static(__dirname+'/static'));

app.listen(3000);
console.log('app started at port 3000...');
