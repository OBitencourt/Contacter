import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express()

app.use(express.json())
app.use(cors())


//  POST


// GET




// DELETE



// PUT






const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is listening!")
})