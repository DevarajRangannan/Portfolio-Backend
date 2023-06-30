const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const app = express()
const Portfolio_Router = require("./Routes/Portfolio_Metadata")

app.use(cors({
    origin:"*"
}))

app.use(bodyParser.urlencoded({extended:true}))


app.get("/", (req, res)=>{
    res.send("<h1>Hello World!</h1>");
})

app.use("/portfolio", Portfolio_Router)

app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname,"404page.html"))
})

app.listen(8080, ()=>console.log("*** Server successfully running on PORT 8080 ***"))