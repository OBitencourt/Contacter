import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express()

app.use(express.json())
app.use(cors())


//  POST

app.post('/contacts', (req, res) => {

})


// GET

app.get('/contacts', async (req, res) => {

    const contacts = await prisma.contact.findMany()

    res.status(200)
    res.json(contacts)
})


// DELETE

app.delete('/contacts', (req, res) => {

    
})

// PUT

app.put('/contacts', (req, res) => {

    
})



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is listening!")
})