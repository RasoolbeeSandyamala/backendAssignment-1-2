
const ex = require ('express')
const app = ex();

app.use(ex.json())

app.get('/',(req,res)=>{
    res.send('hello express')
})

app.get('/home',(req,res)=>{
    res.send('hello home page')
})

app.get('/about',(req,res)=>{
    res.send('hello about page')
})
 
app.post('/home',(req,res)=>{
    res.send('hello home page in post')
    console.log(req.body);

})

app.get('/*',(req,res)=>{
    res.send('page not found')
})
app.listen(3000,()=>{console.log('server started at 3000')})