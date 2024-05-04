import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detail Post',
  description: 'Detail Post',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
