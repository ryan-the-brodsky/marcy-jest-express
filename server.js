const app = require('./app');

app.listen(process.env.PORT || 5000, ()=>{
    console.log("express is running, better go catch it!")
})