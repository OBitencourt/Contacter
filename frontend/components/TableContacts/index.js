import Image from "next/image";

import { Trash, Edit } from 'lucide-react'

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

import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";

import DeleteModal from '@/components/DeleteModal/index.js'

import { useGetContacts } from "@/src/http/get-contacts"

const TableContacts = () => {

  const { data } = useGetContacts()

  const contacts = data

  return (
    <>
      {
        contacts && (
          <Table className="w-[60%]">
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
                        <Edit />
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="hover:bg-accent" variant="destructive" size="icon">
                            <Trash />
                          </Button>
                        </DialogTrigger>
                        <DeleteModal id={contact.id} name={contact.name} />
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) 
      }
    </>
  );
};

export default TableContacts;
