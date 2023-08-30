import { Link } from "react-router-dom";
import { RightFromBracketIcon } from "../icons";
import Avatar from "../components/Avatar";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/slice/auth-slice";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const dropDownEl = useRef(); // จะ return ค่าเป็น object {current:10}//{current:()} เปลี่ยนเป็น {current" document.querySelector(".relative")}

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

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
          <Avatar src={user.profileImage} />
        </div>
      </div>
      {open && (
        <div className="absolute bg-white w-96 right-0 translate-y-1 border rounded-xl p-2">
          <Link to="/profile">
            <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg ">
              <Avatar
                src={user.profileImage}
                className="h-[3.75rem] w-[3.75rem]"
              />

              <div>
                <div className="font-semibold">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-sm text-gray-500">See your profile</div>
              </div>
            </div>
          </Link>
          <hr className="border border-gray-200 m-2" />
          <div
            className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg"
            role="button"
          >
            <div className="rounded-full bg-gray-300 w-8 h-8 flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <span
              className="text-sm font-semibold"
              onClick={() => dispatch(logout())}
            >
              Log out
            </span>
          </div>
        </div>
      )}
    </>
  );
}
