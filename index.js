const express=require("express");
const PORT =8002;
const app=express();


const path=require("path");
const {connectMongodb}=require("./connectDatabase")
const router=require("./routes/user")


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json({extended:false}));      
app.use(express.urlencoded({extended: false}));

//Connection
connectMongodb("mongodb://127.0.0.1:27017/userDatabase")
    .then(()=> console.log("MongoDb Connected")
);

//Routes
app.use("/",router)



app.listen(PORT, ()=>console.log("Server Started!!"));
