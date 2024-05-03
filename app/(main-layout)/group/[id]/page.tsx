import { Metadata } from 'next';
import GroupHeader from '@/components/group/GroupHeader';
import { groups } from '@/constants/groups';

type Props = {
  params: { id: string | number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const group = groups.find((group) => group.id === params.id);
  if(!group) {
    throw Error("Group is not found.")
  }
  return {
    title: group.name 
  };
}

const page = async ({params}:Props) => {
  return (
    <>    
      <div className='mt-[55px] ss:m-0'>
        <GroupHeader />
      </div>
    </>
  )
}

export default page
