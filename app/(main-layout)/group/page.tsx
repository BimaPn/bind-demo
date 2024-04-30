import PageHeader from "@/components/PageHeader"
import GroupJoined from "@/components/group/GroupJoined"
import GroupsDiscover from "@/components/group/GroupsDiscover"

const page = async () => {
  return (
    <section>
      <PageHeader title="Groups" showWideScreen={false} />
        <div className="flex flex-col gap-2 ss:gap-4">
          <GroupJoined />
          <GroupsDiscover />
        </div>
    </section>
  )
}

export default page


