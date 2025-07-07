import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"
import Image from "next/image"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const TableContacts = ({ contacts }) => {

  return (
    <>
      <Table>
        <TableCaption>A list of your contacts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contacts) => (
            <TableRow key={contacts.name}>
              <TableCell className="font-medium">{contacts.name}</TableCell>
              <TableCell>{contacts.email}</TableCell>
              <TableCell>{contacts.phone}</TableCell>
              <TableCell style={{display: 'flex', gap: '12px'}}>
                  <Button variant="outline" size="icon">
                      <Image
                          src="/images/edit-icon.svg"
                          alt="exclude"
                          width={20}
                          height={20}
                      />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="icon">
                          <Image
                              src="/images/trash-icon.svg"
                              alt="exclude"
                              width={20}
                              height={20}
                          />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Delete Contact</DialogTitle>
                        <DialogDescription>
                          Are you sure? This action can not be undone.
                        </DialogDescription>                      
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="destructive">Delete</Button>
                      </DialogFooter>  
                    </DialogContent>
                  </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  )
}

export default TableContacts
