import Image from "next/image";

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

const TableContacts = ({ contacts, message }) => {


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
                        <DeleteModal id={contact.id} name={contact.name} />
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
