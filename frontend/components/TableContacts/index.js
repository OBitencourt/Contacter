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

const invoices = [
  {
    name: "Ricardo",
    email: "ricardo@gmail.com",
    phone: "+351 912 824 064",
  },
  {
    name: "Fernando",
    email: "fernando@gmail.com",
    phone: "+351 917 856 084",
  },
]

const TableContacts = () => {
  return (
    <Table>
      <TableCaption>A list of your contacts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{invoice.phone}</TableCell>
            <TableCell>
                <Button variant="outline" size="icon">
                    <Image
                        src="/images/edit-icon.svg"
                        alt="exclude"
                        width={20}
                        height={20}
                    />
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="destructive" size="icon">
                    <Image
                        src="/images/trash-icon.svg"
                        alt="exclude"
                        width={20}
                        height={20}
                    />
                </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableContacts
