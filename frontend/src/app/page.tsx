import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <header className="bg-[#cf4520] shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-white">Protoclear</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-lg max-w-2xl w-full border-2 border-[#b31b1b]">
          <div className="p-6 border-b-2 border-[#b31b1b]">
            <h2 className="text-lg font-semibold text-[#cf4520]">IRB Approval Wizard</h2>
          </div>
          <div className="p-6 h-96 overflow-y-auto">
            {/* Chat messages would go here */}
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
                className="flex-grow px-4 py-2 border border-[#b31b1b] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#b31b1b] text-black"
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
      </main>

      <footer className="bg-[#cf4520] border-t border-[#b31b1b]">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-white">
          © 2023 Protoclear. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
