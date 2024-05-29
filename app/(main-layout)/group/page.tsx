import PageHeader from "@/components/PageHeader"
import CreateGroup from "@/components/group/CreateGroup"
import GroupJoined from "@/components/group/GroupJoined"
import GroupsDiscover from "@/components/group/GroupsDiscover"
import { FiPlus } from "react-icons/fi"

const page = async () => {
  return (
    <section>
      <PageHeader title="Groups" showWideScreen={false}>
        <CreateGroup>
          <FiPlus className="text-xl text-dark dark:text-light -mb-1" />
        </CreateGroup>
      </PageHeader>
        <div className="flex flex-col gap-2 ss:gap-4">
          <GroupJoined />
          <GroupsDiscover />
        </div>
    </section>
  )
}

export default page


