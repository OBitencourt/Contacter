import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useDeleteContact ()  {

    const queryClient = useQueryClient()

    return useMutation({
    mutationKey: ['delete-contact'],
    mutationFn: async (id: string) => {
      const res = await fetch(`http://localhost:8080/contacts/${id}`, {
        method: 'DELETE'
      })
      const data = await res.json()
      return data
    },
    onSuccess: async () => {
        queryClient.invalidateQueries({
            queryKey: ['get-contacts']
        })
    }
  })

}