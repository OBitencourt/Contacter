import { useQuery } from "@tanstack/react-query"
import { Contact } from "./types/get-contacts-type"

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