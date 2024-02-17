const express = require('express')
const PORT = 4000;

const app =express();


app.get('',((req,res)=>{
    res.send('<h1> Cloudneary Image for MERN Technology </h1>')
}))

app.get('*',(req,res)=>{
    res.status('Somthing Error in Backend')
})

app.listen(PORT,()=>{
    console.log(`Express Server Running at ${PORT}`)
})