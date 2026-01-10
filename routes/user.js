const express=require("express");
const {
    handleCreateNewUser,
}=require("../controllers");

const router=express.Router();

router.post("/", handleCreateNewUser);
router.get("/signup",(req,res)=>{
    res.render("signup", { error: null })
});

module.exports=router;