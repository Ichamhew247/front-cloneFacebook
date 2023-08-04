import LoginInput from "./LoginInput";

export default function LoginForm() {
  return (
    <>
      <form>
        <div className="grid gap-4">
          <div>
            <LoginInput placeholder="Email address or phone number" />
          </div>
          <div>
            <LoginInput placeholder="Password" />
          </div>
          <div className="bg-blue-500 text-white leading-[2rem] rounded-md text-base text-center font-bold">
            Log in
          </div>
        </div>
      </form>
    </>
  );
}
