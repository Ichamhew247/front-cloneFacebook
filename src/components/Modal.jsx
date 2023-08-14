import { createPortal } from "react-dom";

export default function Modal({ title, children, width = 30, open, onClose }) {
  return createPortal(
    <>
      {open && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-200 opacity-70 z-10"></div>
          <div className=" fixed inset-0 z-20  " onMouseUp={onClose}>
            <div className=" flex justify-center items-center min-h-full p-4">
              <div
                style={{ maxWidth: `${width}rem` }}
                className=" bg-white border w-full  rounded-lg max-w-md shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col  max-h-[calc(100vh-2rem)] "
                onMouseUp={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between p-4 border-b text-xl">
                  <div className="invisible ">&#10005;</div>
                  <div className=" font-bold">{title}</div>

                  <div
                    className="text-gray-400 hover:text-gray-600 font-semibold"
                    role="button"
                    onClick={onClose}
                  >
                    &#10005;
                  </div>
                </div>

                <div className="p-4  overflow-auto">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal")
  );
}
