import { useState } from "react";
import RegisterInput from "./RegisterInput";
import { useDispatch } from "react-redux";

import validateRegister from "../validators/validate-register";
import InputErrormessage from "./InputErrormessage";
import { toast } from "react-toastify";
import { registerAsync } from "../slice/auth-slice";

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      // console.dir(result);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(registerAsync(input)).unwrap();
      toast.success("Register successfull");
      onSuccess();
    } catch (err) {
      toast.info(err.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          <div>
            <RegisterInput
              name="firstName"
              placeholder="firstName"
              value={input.firstName}
              onChange={handleChangeInput}
              isInvalid={error.firstName}
            />
            <InputErrormessage message={error.firstName} />
          </div>
          <div>
            <RegisterInput
              name="lastName"
              placeholder="Last name"
              value={input.lastName}
              onChange={handleChangeInput}
              isInvalid={error.lastName}
            />
            {error.lastName && <InputErrormessage message={error.lastName} />}
          </div>

          <div className="col-span-full">
            <RegisterInput
              name="emailOrMobile"
              placeholder="Email address or mobile number"
              value={input.emailOrMobile}
              onChange={handleChangeInput}
              isInvalid={error.emailOrMobile}
            />
            {error.emailOrMobile && (
              <InputErrormessage message={error.emailOrMobile} />
            )}
          </div>
          <div className="col-span-full">
            <RegisterInput
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChangeInput}
              isInvalid={error.password}
            />
            {error.password && <InputErrormessage message={error.password} />}
          </div>
          <div className="col-span-full">
            <RegisterInput
              name="confirmPassword"
              placeholder="Confirm password"
              value={input.confirmPassword}
              onChange={handleChangeInput}
              isInvalid={error.confirmPassword}
            />
            {error.confirmPassword && (
              <InputErrormessage message={error.confirmPassword} />
            )}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-green-500 hover:bg-green-600 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem]">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
