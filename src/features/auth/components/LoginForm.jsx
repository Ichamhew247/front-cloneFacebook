import LoginInput from "./LoginInput";
import validateLogin from "../validators/validate-login";
import InputErrormessage from "./InputErrormessage";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../slice/auth-slice";

//ท่าใหม่ เอาท่า LoginForm ให้เข้าใจก่อน

export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      emailOrMobile: "",
      password: "",
    },
    validateLogin
  );
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      toast.success("สำเร็จ");
    } catch (err) {
      toast.error("Invalid email address or mobile number or password");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm(onSubmit)}>
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
            {error.password && <InputErrormessage message={error.password} />}
          </div>
          <button className="bg-blue-500 text-white leading-[2rem] rounded-md text-base text-center font-bold">
            Log in
          </button>
        </div>
      </form>
    </>
  );
}

// import LoginInput from "./LoginInput";
// import validateLogin from "../validators/validate-login";
// import InputErrormessage from "./InputErrormessage";
// import { getMe, loginTable } from "../../../api/axios";
// import { useAuth } from "../../../../contexts/AuthContext";
// import { useState } from "react";

// const initialInput = {
//   emailOrMobile: "",
//   password: "",
// };
// export default function LoginForm() {
//   const { user, setUser } = useAuth();
//   const [input, setInput] = useState(initialInput);
//   const [error, setError] = useState({
//     firstName: "",
//     lastName: "",
//     emailOrMobile: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChangeInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const handleSubmitForm = async (e) => {
//     e.preventDefault();
//     const result = validateLogin(input);
//     console.dir(result);
//     if (result) {
//       return setError(result);
//     }
//     try {
//       const response = await loginTable(input).then((rs) => {
//         console.log(rs.data.token);
//         localStorage.setItem("token", rs.data.token);
//         let token = localStorage.getItem("token");
//         return getMe(token);
//       });
//       setUser(input.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmitForm((data) => {})}>
//         <div className="grid gap-4">
//           <div>
//             <LoginInput
//               placeholder="Email address or phone number"
//               name="emailOrMobile"
//               value={input.emailOrMobile}
//               onChange={handleChangeInput}
//               isInvalid={error.emailOrMobile}
//             />
//             {error.emailOrMobile && (
//               <InputErrormessage message={error.emailOrMobile} />
//             )}
//           </div>
//           <div>
//             <LoginInput
//               placeholder="Password"
//               name="password"
//               value={input.password}
//               onChange={handleChangeInput}
//               isInvalid={error.password}
//             />
//             <InputErrormessage message={error.password} />
//           </div>
//           <button className="bg-blue-500 text-white leading-[2rem] rounded-md text-base text-center font-bold">
//             Log in
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }
