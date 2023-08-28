import { Link } from "react-router-dom";
import { RightFromBracketIcon } from "../icons";
import Avatar from "../components/Avatar";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const dropDownEl = useRef(); // จะ return ค่าเป็น object {current:10}//{current:()} เปลี่ยนเป็น {current" document.querySelector(".relative")}

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropDownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative" ref={dropDownEl}>
        <div role="button" onClick={() => setOpen(!open)}>
          <Avatar src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>
      {open && (
        <div className="absolute bg-white w-96 right-0 translate-y-1 border rounded-xl p-2">
          <Link to="/profile">
            <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg ">
              <Avatar
                src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-[3.75rem] w-[3.75rem]"
              />

              <div>
                <div className="font-semibold">Nattanicha Niyomchan</div>
                <div className="text-sm text-gray-500">See your profile</div>
              </div>
            </div>
          </Link>
          <hr className="border border-gray-200 m-2" />
          <div className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg">
            <div className="rounded-full bg-gray-300 w-8 h-8 flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <span className="text-sm font-semibold">Log out</span>
          </div>
        </div>
      )}
    </>
  );
}
