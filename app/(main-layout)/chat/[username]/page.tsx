import ChatSection from "@/components/chat/ChatSection"
import { authUser, initialUsers } from "@/constants/user";
import axios from "axios";

type Props = {
  params: { username: string };
};

const page = async ({params}:Props) => {
  const getUser = () => {
    const userTarget = initialUsers.find((user) => user.username === params.username)
    if(!userTarget) {
      throw Error("User not found")
    }
    return userTarget
  }
  const userTarget = getUser()
  return (
    <>
      <ChatSection 
      userTarget={{
        name: userTarget.name,
        username: userTarget.username,
        profile_picture: userTarget.profile_picture,
        isVerified: userTarget.isVerified
      }}
      username={authUser.username}
      />
    </>
   )
}

export default page
