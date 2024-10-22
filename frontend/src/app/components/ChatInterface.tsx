'use client'

import { useState, useEffect } from 'react'

export default function ChatInterface() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="bg-white shadow-xl rounded-lg max-w-2xl w-full border-2 border-[#b31b1b]">
      <div className="p-6 border-b-2 border-[#b31b1b]">
        <h2 className="text-lg font-semibold text-[#cf4520]">IRB Approval Wizard</h2>
      </div>
      <div className="p-6 h-96 overflow-y-auto">
        <div className="mb-4">
          <p className="bg-[#b31b1b] text-white p-3 rounded-lg inline-block">Welcome to the IRB Approval Wizard. How can I assist you today?</p>
        </div>
        <div className="mb-4 text-right">
          <p className="bg-gray-100 text-[#cf4520] p-3 rounded-lg inline-block">I need help determining if my research requires IRB approval.</p>
        </div>
        <div className="mb-4">
          <p className="bg-[#b31b1b] text-white p-3 rounded-lg inline-block">Certainly! Let's start with a few questions. Does your research involve human subjects?</p>
        </div>
      </div>
      <div className="p-4 border-t-2 border-[#b31b1b]">
        <form className="flex">
          <input
            type="text"
            placeholder="Type your response here..."
            className="flex-grow px-4 py-2 border border-[#b31b1b] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#b31b1b] text-black placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-[#cf4520] text-white px-4 py-2 rounded-r-lg hover:bg-[#b31b1b] focus:outline-none focus:ring-2 focus:ring-[#b31b1b]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
