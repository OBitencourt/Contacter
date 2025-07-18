import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContactType } from "./types/create-contact-type";


export const useAddContact = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: ContactType) => {

            const response = await fetch('http://localhost:8080/contacts/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
                
            })

            const result = response.json()

            return result
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['get-contacts']
            })
        }
    })
}