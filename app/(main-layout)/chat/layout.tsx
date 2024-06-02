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
            <div className='h-svh ss:h-[82svh] sm:h-[75svh] w-full sm:w-[80%] md:w-full flex gap-6 -mb-4'>
              <ChatMenu />
              {children}
            </div>
          </section>
        </MessagesProvider>
      </ChatListProvider>
  )
}

export default RootLayout
