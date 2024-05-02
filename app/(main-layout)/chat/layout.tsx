import ChatMenu from '@/components/menu/ChatMenu'
import ChatListProvider from '@/components/providers/ChatListProvider'
import MessagesProvider from '@/components/providers/MessagesProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chats',
  description: 'Chat',
}

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
      <ChatListProvider>
        <MessagesProvider>
          <section className="w-full flexCenter">
            <div className='min-h-[93vh] ss:min-h-[81vh] sm:min-h-fit sm:h-[80vh] md:h-[80vh] w-full sm:w-[80%] md:w-full flex gap-6'>
              <ChatMenu />
              {children}
            </div>
          </section>
        </MessagesProvider>
      </ChatListProvider>
  )
}

export default RootLayout
