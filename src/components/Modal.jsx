import RegisterInput from "../features/auth/components/RegisterInput";

export default function Modal() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-200 opacity-70 z-10">
        Modal
      </div>

      <div className="fixed inset-0 z-20 ">
        <div className="flex justify-center items-center  min-h-full">
          <div className=" bg-white border border-green-400 rounded-lg max-w-md shadow-[0_0_15px_rgb(0_0_0_/0.2)] ">
            <div className="flex justify-between p-4 border-b text-xl">
              <div className="invisible ">&#10005;</div>
              <div className=" font-bold">Sign up</div>
              <div
                className="text-gray-400 hover:text-gray-600 font-semibold"
                role="button"
              >
                &#10005;
              </div>
            </div>

            <div className="p-4">
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
          </div>
        </div>
      </div>
    </>
  );
}
