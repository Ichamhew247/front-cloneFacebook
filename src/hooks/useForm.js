import { useState } from "react";
//ท่าใหม่ เอาท่า LoginForm ให้เข้าใจก่อน
export default function useForm(initialState, validate) {
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: " " });
  };

  const handleSubmitForm = (onSubmit) => async (e) => {
    e.preventDefault();
    const result = validate(input);
    if (result) {
      return setError(result);
    }
    setError({});
    await onSubmit(input);
    setInput(initialState);
  };
  return { input, handleChangeInput, error, handleSubmitForm };
}
