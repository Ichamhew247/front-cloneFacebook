import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  return (
    <>
      <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 tracking-wide ">
        Create new account
      </button>
      <Modal title="sign up" width="27">
        <RegisterForm />
      </Modal>
    </>
  );
}
