import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const ContactSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button style={{alignSelf: 'end'}}>Add Contact</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add contact</SheetTitle>
          <SheetDescription>
            Add an contact here. Fill the inputs with the info and then save when you are done.
          </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4">

          <div className="grid gap-3">

            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input
                id="sheet-demo-name"
                placeholder="Your name"
            />

          </div>
          
          <div className="grid gap-3">

            <Label htmlFor="sheet-demo-username">Email</Label>
            <Input
                id="sheet-demo-username"
                placeholder="defaultemail@gmail.com"
            />

          </div>

          <div className="grid gap-3">

            <Label htmlFor="sheet-demo-username">Phone</Label>
            <Input
                id="sheet-demo-username"
                placeholder="+351 999 999 999"
            />

          </div>
        </div>

        <SheetFooter>
          <Button type="submit">Adicionar</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ContactSheet