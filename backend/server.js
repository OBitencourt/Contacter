import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express()

app.use(express.json())
app.use(cors())


//  POST

app.post('/contacts', async (req, res) => {

    const {
        name,
        email,
        phone
    } = req.body

    const createdContact = await prisma.contact.create({
        data: {
            name,
            email,
            phone
        }
    })

    res.status(200)
    res.json([{message: "Sucesso ao criar"}, createdContact])
})


// GET

app.get('/contacts', async (req, res) => {

    const contacts = await prisma.contact.findMany()

    res.status(200)
    res.json(contacts)
})


// DELETE

app.delete('/contacts/:id', async (req, res) => {

    const { id } = req.params

    const deletedContact = await prisma.contact.delete({
        where: {
            id
        }
    })

    res.status(200)
    res.json([{message: "Contato deletado com sucesso!"}, deletedContact])

    
})

// PUT

app.put('/contacts', (req, res) => {

    
})



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is listening!")
})