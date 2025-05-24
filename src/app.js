const express=require("express")
const app=express();
const cors=require("cors")
const route=require("./routes/schoolROute")
const db=require("./config/db")

app.use(express.json());
app.use(cors());
app.use("/api",route);


module.exports=app;