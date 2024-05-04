import { Metadata } from 'next';
import GroupHeader from '@/components/group/GroupHeader';
import { groups } from '@/constants/groups';

type Props = {
  params: { id: string | number };
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
      <GroupHeader groupId={params.id as string} />
    </>
  )
}

export default page
