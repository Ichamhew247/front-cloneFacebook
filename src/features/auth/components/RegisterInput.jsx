export default function RegisterInput({ placeholder }) {
  return (
    <div>
      <input
        type="text"
        className="block w-full rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500 leading-6 tracking-wide  "
        placeholder={placeholder}
      />
    </div>
  );
}
