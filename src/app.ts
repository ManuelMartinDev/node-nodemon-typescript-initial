import express , {Request,Response} from 'express'

const app:express.Application = express() 
const PORT:number = 4000 || process.env.PORT


app.get('/' , (req:Request,res:Response) => {
    res.send("hello")
})



app.listen(PORT , ():void => {
    console.log("app running")
})