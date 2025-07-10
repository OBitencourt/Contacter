import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import axios from "axios";

const TableContacts = ({ contacts, message }) => {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/contacts/${id}`).then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log("Não foi possível fazer o delete", err)
    })
  }
  return (
    <>
      {
        contacts ? (
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
              {
                contacts.map((contact) => (
                  <TableRow key={contact.name}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    <TableCell style={{ display: "flex", gap: "12px" }}>
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
                            <DialogTitle>Delete {contact.name} from your contacts list?</DialogTitle>
                            <DialogDescription>
                              Are you sure? This action can not be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="destructive" onClick={() => {handleDelete(contact.id)}}>Delete</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) 
        : (
          message
        )
      }
    </>
  );
};

export default TableContacts;
