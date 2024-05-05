import { Metadata } from 'next';
import GroupHeader from '@/components/group/GroupHeader';
import { groups } from '@/constants/groups';
import GroupBody from '@/components/group/GroupBody';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let group = groups.find((group) => group.id === params.id);
  return {
    title: group ? group.name : "Group Detail"
  };
}

const page = async ({params}:Props) => {
  return (
    <>    
      <GroupHeader groupId={params.id} />
      <GroupBody groupId={params.id}/>
    </>
  )
}

export default page
