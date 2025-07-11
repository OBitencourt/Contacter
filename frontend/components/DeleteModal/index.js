import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import axios from "axios";


const DeleteModal = ({id, name}) => {

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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Delete {name} from your contacts list?
          </DialogTitle>
          <DialogDescription>
            Are you sure? This action can not be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
                type="destructive"
                onClick={() => {
                handleDelete(id);
                }}
            >
                Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </>
  );
};

export default DeleteModal;
