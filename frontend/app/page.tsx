
import TableContacts from '@/components/TableContacts'
import ContactSheet from '@/components/ContactSheet'


const Home = () => {

  return (
    <>
      <div style={{height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%', margin: '0 auto', flexDirection: 'column'}}>
        <TableContacts />
        <br />
        <ContactSheet />
      </div>
    </>
  )
}

export default Home
