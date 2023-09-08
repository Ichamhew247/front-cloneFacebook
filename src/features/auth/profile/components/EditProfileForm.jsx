import Avatar from "../../../../components/Avatar";
import PictureForm from "./PictureForm";
import * as userService from "../../../../api/user-api";
import { useState } from "react";
import Loading from "../../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import CoverImage from "./CoverImage";
import {
  updateProfileImage as updateAction,
  updateCoverImage,
} from "../../slice/auth-slice";
export default function EditProfileForm() {
  //No redux this time
  const [isloading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  //ใส่ try catch ใส่ toast เองเลยจ้า
  const updateProfileImage = async (input) => {
    const formData = new FormData();
    //use this แทน Plain object javascript เพื่อใช้  Multipath from data
    //formData เหมือน request body application/json
    //เพิ่ม key value ต้องใช้ append
    formData.append("profileImage", input); // {profileImage: input}
    setIsLoading(true);
    const res = await userService.updateUserImage(formData);
    setIsLoading(false);
    dispatch(updateAction(res.data.profileImage));
  };
  const updateCover = async (input) => {
    const formData = new FormData();
    formData.append("coverImage", input);
    setIsLoading(true);
    const res = await userService.updateUserImage(formData);
    setIsLoading(false);
    dispatch(updateCoverImage(res.data.coverImage));
  };

  return (
    <>
      {isloading && <Loading />}
      <div className="flex flex-col gap-4">
        <PictureForm
          onSave={updateProfileImage}
          title="Profile Image"
          initialSrc={user.profileImage}
        >
          {(src) => (
            <div className="flex justify-center">
              <Avatar
                src={src}
                alt="user"
                className="h-[10.5rem] w-[10.5rem]"
              />
            </div>
          )}
        </PictureForm>

        <PictureForm
          onSave={updateCover}
          title="Cover Image"
          initialSrc={user.coverImage}
        >
          {(src) => (
            <div className="aspect-[1096/404] overflow-hidden flex justify-center items-center rounded-lg">
              <CoverImage src={src} />
            </div>
          )}
        </PictureForm>
      </div>
    </>
  );
}
