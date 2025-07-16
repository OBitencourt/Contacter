import { useQuery } from "@tanstack/react-query"

type Contact = Array<{
  id: string
  name: string
  email: string
  phone: string
}>

export function useGetContacts ()  {
    return useQuery({
    queryKey: ['get-contacts'],
    queryFn: async () => {
      const res = await fetch('http://localhost:8080/contacts')
      const data: Contact = await res.json()
      return data
    }
  })

}