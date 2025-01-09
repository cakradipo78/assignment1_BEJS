const express = require("express")
const app = express()
const PORT = 3000
const fs = require("fs")

async function getdatabook(){
    try{
        let databook = await fs.promises.readFile("./books.json","utf-8")
        const results = JSON.parse(databook)
        return results
    }
    catch (error){
        return error
    }

}



app.get("/books",async (req, res) => {
    // res.send("AKU TERPANGGIL")
try{
let dataitems = await fs.promises.readFile("./books.json","utf-8")
let manipulateJSON = JSON.parse(dataitems)
res.status(200).json(manipulateJSON)

}   
catch (error){
    res.status(500).json(error)
}
       
})


app.get("/books/:id", async(req, res) => {
  
   
    try{
        const bookid = req.params.id
        let data = await getdatabook()
        console.log(data);
        
        let result = data.find(el=>{
            return el.id == bookid

        })
        if(result == undefined){
            res.status(404).json("Data Not Found")
        }

        res.status(200).json(result)

    }
    catch(err){res.status(error)

    }

    
})




app.listen(PORT, () => {
    console.log("aku running di" + PORT);
})

