export default function LoginInput({ placeholder }) {
  return (
    <>
      <input
        type="text"
        className="block w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
        placeholder={placeholder}
      />
    </>
  );
}
