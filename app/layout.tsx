import type { Metadata } from "next";
import { Open_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import DarkModeProvider from "@/components/providers/DarkModeProvider";
import 'react-loading-skeleton/dist/skeleton.css'
import ProgressbarProvider from "@/components/providers/ProgressbarProvider";
import UsersProvider from "@/components/providers/UsersProvider";
import PostsProvider from "@/components/providers/PostsProvider";
import CommentsProvider from "@/components/providers/CommentsProvider";
import ChatCountProvider from "@/components/providers/ChatCountProvider";
import GroupsProvider from "@/components/providers/GroupsProvider";
import NotificationsProvider from "@/components/providers/NotificationsProvider";

const open_s = Open_Sans({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display:'swap'
})
const unbounded = Unbounded({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  variable: "--font-unbounded"
})


export const metadata: Metadata = {
  title: "BIND",
  description: "Cool app made by generous person",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${open_s.className} ${unbounded.variable}`}>
        <ProgressbarProvider>
          <DarkModeProvider>
            <AuthProvider>
              <UsersProvider>
                <PostsProvider>
                  <CommentsProvider>
                    <GroupsProvider>
                      <ChatCountProvider>
                        <NotificationsProvider>
                          {children}
                        </NotificationsProvider>
                      </ChatCountProvider>
                    </GroupsProvider>
                  </CommentsProvider>
                </PostsProvider>
              </UsersProvider>
            </AuthProvider>
          </DarkModeProvider>
        </ProgressbarProvider>
      </body>
    </html>
  );
}
