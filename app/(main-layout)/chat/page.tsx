import ChatIlustration from "@/components/ChatIlustration"

const page = () => {
  return (
    <section className='w-full bg-white dark:bg-d_semiDark rounded-xl sm:shadow hidden md:block p-8'>
      <div className="w-full h-full flexCenter flex-col gap-5">
        <ChatIlustration size={360} />
        <div className="w-[90%] flex flex-col text-center gap-2">
          <span className="text-[22px] font-medium">Let's make meaningful conversation.</span>
          <span className="text-sm">You can comunicate with your family, friends, or with the one you love. Start it from here.</span>
        </div>
      </div>

    </section>
  )
}

export default page
