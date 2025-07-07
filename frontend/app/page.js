"use client"


import TableContacts from '@/components/TableContacts'
import ContactSheet from '@/components/ContactSheet'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = () => {

  const [contacts, setContacts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios.get('http://localhost:8080/contacts').then(response => {
      const { data } = response
      setContacts(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <div style={{height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%', margin: '0 auto', flexDirection: 'column'}}>
        <TableContacts contacts={isLoading ? "Não foi possível requisitar os contatos" : contacts} />
        <br />
        <ContactSheet />
      </div>
    </>
  )
}

export default Home
