// const express = require("express")
// const cors = require('cors')

import express, {Request, Response} from "express"
import cors from "cors"



const app = express();
app.use(cors());
app.use(express.json())

// app.use("/api/v1", rootRouter);

app.get("/", (req:Request, res:Response) => {
    res.send({
        msg: "reached in the app."
    })
})

app.listen(3000, ()=>{
    console.log("Trellon started ")
})




