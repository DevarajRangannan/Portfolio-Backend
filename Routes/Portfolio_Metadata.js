const express = require("express")
const router = express.Router()
const DB = require("../DB/DB_Connection");


router.get("/metadata-skills", async(req, res)=>{
    try{
        let database = await DB.getDatabase()    ;
        const collections = database.collection("metaData")
        const cursor = collections.findOne({type:"skills"},{projection:{_id:0}});
        let data = await cursor
        res.send(data)
    }catch(e){
        console.log(e);
        res.status(505).send("Something went wrong")
    }
})

router.get("/metadata-resume", async(req, res)=>{
    try{
        let database = await DB.getDatabase()    ;
        const collections = database.collection("metaData")
        const cursor = collections.findOne({type:"resume"},{projection:{_id:0}});
        let data = await cursor
        res.send(data)
    }catch(e){
        console.log(e);
        res.status(505).send("Something went wrong")
    }
})



module.exports = router