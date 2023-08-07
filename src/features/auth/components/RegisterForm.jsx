import RegisterInput from "./RegisterInput";

export default function RegisterForm() {
  return (
    <div>
      <form>
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          <div>
            <RegisterInput placeholder="First name" />
          </div>
          <div>
            <RegisterInput placeholder="Last name" />
          </div>

          <div className="col-span-full">
            <RegisterInput placeholder="Email address or mobile number" />
          </div>
          <div className="col-span-full">
            <RegisterInput placeholder="Password" />
          </div>
          <div className="col-span-full">
            <RegisterInput placeholder="Confirm password" />
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
