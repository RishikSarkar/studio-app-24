'use client'

import dynamic from 'next/dynamic'

const ChatInterface = dynamic(() => import('./ChatInterface'), { ssr: false })

export default function ChatInterfaceWrapper() {
  return <ChatInterface />
}
