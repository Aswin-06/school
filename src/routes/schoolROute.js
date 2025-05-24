const express=require("express")
const route=express.Router();
const {getSchools,postSchools}=require("../controllers/schoolcontroller")

route.get("/listSchools",getSchools);
route.post("/addSchool",postSchools);

module.exports=route;