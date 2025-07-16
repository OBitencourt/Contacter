"use client"

import TableContacts from '@/components/TableContacts'
import ContactSheet from '@/components/ContactSheet'

const Home = () => {

  return (
    <>
      <div className='flex items-center justify-center w-full h-dvh'>
        <div className='p-4 border-2 border-zinc-900 rounded-md'>
          <TableContacts />
          <ContactSheet />
        </div>
      </div>
    </>
  )
}

export default Home
