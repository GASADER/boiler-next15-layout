import { LayoutContainer } from './components/LayoutContainer'
import { Sidebar } from './components/Sidebar'
import './globals.css'

export const metadata = {
  title: 'Boilerplate App',
  description: 'Next.js 15 sidebar layout boilerplate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar />
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  )
}
