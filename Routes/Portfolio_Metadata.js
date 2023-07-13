const express = require("express")
const router = express.Router()
const DB = require("../DB/DB_Connection");

let database;

(async function(){
    try{
        database = await DB.getDatabase()
    }
    catch(e){
        console.log(e);
        res.status(505).send("Something went wrong")
    }
    
}())

router.get("/metadata-resume", async(req, res)=>{
    try{
        const collection = database.collection("metaData")
        const data = await collection.findOne({type:"resume"},{projection:{_id:0}});
        res.send(data)
    }catch(e){
        console.log(e);
        res.status(505).send("Something went wrong")
    }
})

router.get("/metadata-skills", async(req, res)=>{
    try{
        const collection = database.collection("metaData")
        const data = await collection.findOne({type:"skills"},{projection:{_id:0}});
        res.send(data)
    }catch(e){
        console.log(e);
        res.status(505).send("Something went wrong")
    }
})

router.get("/recent-projects",async(req, res)=>{
    try{
        const collection = await database.collection("projects");
        const data = await collection.find().sort({_id: -1}).limit(2).toArray()
        res.send(data)
    }catch(e){
        console.log(e);
        res.status(505).send("Something went wrong")
    }
    
})

router.get("/projects",async(req, res)=>{
    try{
        const collection = await database.collection("projects");
        const data = await collection.find().toArray()
        res.send(data)
    }catch(e){
        console.log(e);
        res.status(505).send("Something went wrong")
    }
    
})



module.exports = router