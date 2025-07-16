import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from "axios"


const contactSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
})


const ContactSheet = () => {

  const {
    register,
    handleSubmit
    
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const handleContactSubmit = (data) => {
    axios.post('http://localhost:8080/contacts', data).then((response) => {
      console.log(response)
    })
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" className="text-sm w-full mt-8 hover:bg-accent-foreground/80">Add Contact</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add contact</SheetTitle>
          <SheetDescription>
            Add an contact here. Fill the inputs with the info and then save when you are done.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit(handleContactSubmit)} className="grid flex-1 auto-rows-min gap-6 px-4">

          <div className="grid gap-3">

            <Label htmlFor="name">Name</Label>
            <Input
              placeholder="Your name"
              {...register('name')}
            />

          </div>
          
          <div className="grid gap-3">

            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="defaultemail@gmail.com"
              {...register('email')}
            />

          </div>

          <div className="grid gap-3">

            <Label htmlFor="phone">Phone</Label>
            <Input
              placeholder="+351 999 999 999"
              {...register('phone')}
            />

          </div>
          
            <Button type="submit">Adicionar</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>

        </form>

      </SheetContent>
    </Sheet>
  )
}

export default ContactSheet