import Avatar from "../../../../components/Avatar";
import PictureForm from "./PictureForm";

export default function EditProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <PictureForm
        // onSave ={() => {saveProfile}}
        title="Profile Image"
        initialSrc="https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/370283335_275785685232645_8394501133976503873_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=qmRvBZERNoMAX_S8Z_e&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfCeu8YcXj69P9QUlS1G0h1U1wJQCkWuS3HO6_ueCrJVCA&oe=64F8013C"
      >
        {(src) => (
          <div className="flex justify-center">
            <Avatar src={src} alt="user" className="h-[10.5rem] w-[10.5rem]" />
          </div>
        )}
      </PictureForm>
      <PictureForm
        // onSave ={() => {saveCover}}
        title="Cover Image"
        initialSrc="https://images.unsplash.com/photo-1589497836818-9ad2fa1df1a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzYwOTV8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
      >
        {(src) => (
          <div className="aspect-[1096/404] overflow-hidden flex justify-center items-center rounded-lg">
            <img alt="cover" src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}
