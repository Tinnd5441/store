import { currentUser } from "@clerk/nextjs/server";
import { LuMousePointer2 } from "react-icons/lu";
import Image from "next/image";
async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    <Image
      src={profileImage}
      alt="User Profile"
      width={24}
      height={24}
      className="rounded-full object-cover"
    />;
  return (
    <LuMousePointer2 className="w-6 h-6 bg-primary rounded-full text-white" />
  );
}
export default UserIcon;
