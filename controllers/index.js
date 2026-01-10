const client= require("../model/user");

async function handleCreateNewUser (){
    const info=req.body;
    if(!info) return res.status(400).json({error: "details needed"});
        const username=info.name;
    await client.create({            
            name:info.name,
            email:info.email,
            password:info.password,
        });
    return res.render("home", {
        username:username,
    });

}


module.exports={
    handleCreateNewUser,
}