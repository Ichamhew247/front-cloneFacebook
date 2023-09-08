import { BiSolidPencil } from "react-icons/bi";
import Avatar from "../../../../components/Avatar";
import Modal from "../../../../components/Modal";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";

export default function ProfileContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-gray-300 to-white shadow">
      <div className="max-w-[68.5rem] max-h-[25.25rem] relative overflow-hidden flex justify-center items-center bg-black mx-auto rounded-b-lg aspect-[1096/404] ">
        <img
          alt="cover"
          src="https://images.unsplash.com/photo-1589497836818-9ad2fa1df1a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzYwOTV8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[66.5rem] flex mx-auto items-end gap-4 px-4">
        <div className="-mt-8 z-0">
          <Avatar
            // src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/371436818_6432461173508792_8864430528494609243_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Dv26jXu9U8cAX_g4XRq&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfBJdpUrz7UxT-KglZrNEb8elFAJs2QcGaWQt13a0cxmVg&oe=64F3CAAF"
            className="h-[10.5rem] w-[10.5rem] ring ring-white"
          />
        </div>
        <div className="flex-1 mb-4">
          <h2 className="text-3xl font-bold">Nattanicha Niyomchan</h2>
          <span className="text-gray-500 py-1 font-semibold">5 friends</span>
          <div className="flex -space-x-2">
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Domestic_Cat_%27Moonie%27.jpg/640px-Domestic_Cat_%27Moonie%27.jpg"
              className="h-[2rem] w-[2rem] ring ring-white"
            />
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Domestic_Cat_%27Moonie%27.jpg/640px-Domestic_Cat_%27Moonie%27.jpg"
              className="h-[2rem] w-[2rem] ring ring-white"
            />
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Domestic_Cat_%27Moonie%27.jpg/640px-Domestic_Cat_%27Moonie%27.jpg"
              className="h-[2rem] w-[2rem] ring ring-white"
            />
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Domestic_Cat_%27Moonie%27.jpg/640px-Domestic_Cat_%27Moonie%27.jpg"
              className="h-[2rem] w-[2rem] ring ring-white"
            />
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Domestic_Cat_%27Moonie%27.jpg/640px-Domestic_Cat_%27Moonie%27.jpg"
              className="h-[2rem] w-[2rem] ring ring-white"
            />
          </div>
        </div>
        <div className="mb-4 bg-black">
          <button
            className="px-3 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300"
            onClick={() => setOpen(true)}
          >
            <div className="flex items-center gap-2">
              <BiSolidPencil />
              <span className="font-semibold ">Edit Profile</span>
            </div>
          </button>
          <Modal
            title="Edit profile"
            open={open}
            onClose={() => setOpen(false)}
            width="44"
          >
            <EditProfileForm />
          </Modal>
        </div>
      </div>
    </div>
  );
}
