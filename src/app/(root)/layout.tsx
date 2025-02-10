import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar/>
      {children}
      <Toaster />
      <Footer/>
    </>
  )
}