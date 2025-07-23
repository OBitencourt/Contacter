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
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAddContact } from "@/src/http/use-create-contact"


const contactSchema = z.object({
  name: z.string().min(1, "Digite um nome para o seu contato."),
  email: z.string().min(3, "Digite um email para o seu contato."),
  phone: z.string().min(3, "Digite um telefone para o seu contato."),
})

type CreateContactFormData = z.infer<typeof contactSchema>


const ContactSheet = () => {

  const { mutateAsync: createContact } = useAddContact()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    },
    criteriaMode: "all"
  })

  const handleContactSubmit = async ({
    name,
    email,
    phone
  }: CreateContactFormData) => {
    await createContact({
      name,
      email,
      phone
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
              {...register('name', { required: "Digite um nome para o seu contato." })}
            />
            <ErrorMessage 
              errors={errors}
              name="name"
              render={({message}) => <p className="text-sm/tight text-red-400">{message}</p>}
            />
          </div>
          
          <div className="grid gap-3">

            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="defaultemail@gmail.com"
              {...register('email', { required: "Digite um email para o seu contato."})}
            />
            <ErrorMessage 
              errors={errors}
              name="email"
              render={({message}) => <p className="text-sm/tight text-red-400">{message}</p>}
            />
          </div>

          <div className="grid gap-3">

            <Label htmlFor="phone">Phone</Label>
            <Input
              placeholder="+351 999 999 999"
              {...register('phone', { required: "Digite um número para o seu contato."})}
            />
            <ErrorMessage 
              errors={errors}
              name="phone"
              render={({message}) => <p className="text-sm/tight text-red-400">{message}</p>}
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