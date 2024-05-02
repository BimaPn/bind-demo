import { Metadata } from 'next';
import UserHeader from "@/components/user/UserHeader";
import PageHeader from '@/components/PageHeader';
import { authUser, initialUsers } from '@/constants/user';
import UserBody from '@/components/user/UserBody';

type Props = {
  params: { username: string };
};

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.username
  };
}

const User = async ({params}:Props) => {
  const findUser = () => {
    if(params.username === authUser.username) {
      return authUser
    }
    const user = initialUsers.find((user) => user.username === params.username)
    if(!user) {
      throw Error("User not found.")
    }
    return user
  }
  return (
    <div className="flex flex-col">
        <PageHeader title={params.username} showWideScreen={false} className="ss:hidden block" />
        <div>
          <UserHeader user={findUser()} />
          <UserBody username={params.username} />
        </div>
    </div>
  )
}


export default User
