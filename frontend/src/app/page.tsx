import ChatInterfaceWrapper from './components/ChatInterfaceWrapper'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <header className="bg-[#cf4520] shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-white">Protoclear</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <ChatInterfaceWrapper />
      </main>

      <footer className="bg-[#cf4520] border-t border-[#b31b1b]">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-white">
          © 2023 Protoclear. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
