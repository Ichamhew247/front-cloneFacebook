import { RotatingLines } from "react-loader-spinner";
export default function Loading() {
  return (
    <>
      <div className="BACKDROP fixed inset-0 bg-black opacity-30 z-40 "> </div>
      <div className="fixed inset-0 z-50">
        <div className="flex justify-center items-center min-h-full ">
          <RotatingLines
            strokeColor="white"
            strokeWidth="3"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      </div>
    </>
  );
}
