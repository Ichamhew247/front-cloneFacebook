import LoginInput from "./LoginInput";
import validateLogin from "../validators/validate-login";
import InputErrormessage from "./InputErrormessage";
import useForm from "../../../hooks/useForm";

export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      emailOrMobile: "",
      password: "",
    },
    validateLogin
  );
  return (
    <>
      <form onSubmit={handleSubmitForm((data) => {})}>
        <div className="grid gap-4">
          <div>
            <LoginInput
              placeholder="Email address or phone number"
              name="emailOrMobile"
              value={input.emailOrMobile}
              onChange={handleChangeInput}
              isInvalid={error.emailOrMobile}
            />
            {error.emailOrMobile && (
              <InputErrormessage message={error.emailOrMobile} />
            )}
          </div>
          <div>
            <LoginInput
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              isInvalid={error.password}
            />
            <InputErrormessage message={error.password} />
          </div>
          <button className="bg-blue-500 text-white leading-[2rem] rounded-md text-base text-center font-bold">
            Log in
          </button>
        </div>
      </form>
    </>
  );
}
