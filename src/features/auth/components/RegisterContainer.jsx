import { useState } from "react";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 tracking-wide "
        onClick={() => setOpen(true)}
      >
        Create new account
      </button>
      <Modal
        title="sign up"
        width="27"
        open={open}
        onClose={() => setOpen(false)}
      >
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>
    </>
  );
}
