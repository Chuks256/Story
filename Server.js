
let express=require("express")
let app=express();
let port=4000 || process.env.PORT;
let path=require("path");

app.use(express.static('public'))
app.use(express.json);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.listen(port,()=>{
    console.log("frontend server listening @", port)
})