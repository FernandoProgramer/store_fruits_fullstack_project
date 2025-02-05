import Menu from '@/components/Menu'
import './globals.css'
import { Roboto } from 'next/font/google'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Next.js',
  description: 'Inital page of store fruits web',
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <div className={roboto.className}>
          <Toaster />
          <Menu />
          {children}
        </div>
      </body>
    </html>
  )
}
