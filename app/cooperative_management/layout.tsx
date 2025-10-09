import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="min-h-screen flex flex-col bg-coop-3">
      <Header />
      <main className="flex-1 flex">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default layout