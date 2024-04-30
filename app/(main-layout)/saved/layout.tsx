import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saved Post',
}

export default function SavedLayout({
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
