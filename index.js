const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
const app = express()
dotenv.config()

app.use(cors({
    origin:"*"
}))

app.use(bodyParser.urlencoded({extended:true}))


app.get("/", (req, res)=>{
    res.send("<h1>Hello World!</h1>");
    console.log(process.env.NAME);
})

app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname,"404page.html"))
})

app.listen(8080, ()=>console.log("*** Server successfully running on PORT 8080 ***"))