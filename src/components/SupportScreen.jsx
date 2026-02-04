import { useState } from 'react';

function SupportScreen({ onClose }) {
  const [currentView, setCurrentView] = useState("home");

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Slide-in Panel */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[400px] bg-black shadow-2xl animate-slide-in flex flex-col rounded-l-2xl overflow-hidden">
        {/* Main Content */}
        <div className={`flex-1 bg-black overflow-y-auto ${
          currentView === "home" ? "px-5 pt-4 pb-0" : "p-0"
        }`}>
          {currentView === "home" ? (
            <div className="px-5 pt-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-white font-medium text-[18px]">
                  Cal.com
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1683815251677-8df20f826622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAwODY5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Agent 1"
                      className="w-9 h-9 rounded-full border-2 border-[#111111] object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MDE0NzM2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Agent 2"
                      className="w-9 h-9 rounded-full border-2 border-[#111111] object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1724435811349-32d27f4d5806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwcm9maWxlJTIwcGhvdG98ZW58MXx8fHwxNzcwMTUwNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Agent 3"
                      className="w-9 h-9 rounded-full border-2 border-[#111111] object-cover"
                    />
                  </div>
                  <button 
                    onClick={onClose}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <span className="material-icons-round text-xl">close</span>
                  </button>
                </div>
              </div>

              {/* Greeting */}
              <div className="mb-8">
                <h1 className="text-white text-[32px] leading-[1.2] font-medium mb-0">
                  Hi genius <span className="inline-block">👋</span>
                </h1>
                <h2 className="text-white text-[32px] leading-[1.2] font-medium">
                  How can we help?
                </h2>
              </div>

              {/* Recent Message Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
                <div className="text-[13px] text-gray-900 font-medium mb-4">
                  Recent message
                </div>

                {/* Chat with Fin */}
                <div 
                  className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg transition-colors"
                  onClick={() => setCurrentView("chat")}
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-black rounded-lg flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 3L4 7v6l4 4 4-4V7L8 3z"
                        fill="white"
                      />
                      <path
                        d="M16 3l4 4v6l-4 4-4-4V7l4-4z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-medium text-[15px] text-gray-900">
                        Chat with Fin
                      </span>
                      <span className="text-[13px] text-gray-400">
                        31m
                      </span>
                    </div>
                    <p className="text-[14px] text-gray-500 leading-tight">
                      Fin: If you need any help with our servic...
                    </p>
                  </div>
                </div>
              </div>

              {/* Cal.com v5.6 Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="text-[13px] text-gray-900 font-medium mb-4">
                  Cal.com v5.6
                </div>

                {/* Release Notes Preview Image */}
                <div className="mb-4">
                  <img
                    src="/imag1.png"
                    alt="Cal.com v5.6 Preview"
                    className="w-full rounded-lg"
                  />
                </div>

                {/* Release Title */}
                <h3 className="text-[15px] text-gray-900 font-medium leading-tight mb-3">
                  Cal.com v5.6 - Advanced private links, Round-robin groups, API V1 deprecation announcement, and more... | Cal.com - Open Scheduling Infrastructure
                </h3>

                {/* Release Description */}
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Discover what's new in Cal.com v5.6: set expirations for Private Links, streamline scheduling with Round-Robin Groups, prepare for API V1 retirement, and explore new features like timezone locking, improved Insights, and more!
                </p>
              </div>
            </div>
          ) : currentView === "messages" ? (
            <>
              {/* Messages View */}
              <div className="bg-white h-full rounded-tl-2xl flex flex-col">
                {/* Messages Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                  <h2 className="text-[18px] font-semibold text-gray-900">
                    Messages
                  </h2>
                  <button 
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={() => setCurrentView("home")}
                  >
                    <span className="material-icons-round text-xl">close</span>
                  </button>
                </div>

                {/* Messages List */}
                <div className="px-5 py-4">
                  {/* Chat with Fin Message */}
                  <div 
                    className="flex items-start gap-3 py-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors"
                    onClick={() => setCurrentView("chat")}
                  >
                    <div className="w-10 h-10 flex-shrink-0 bg-black rounded-lg flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8 3L4 7v6l4 4 4-4V7L8 3z"
                          fill="white"
                        />
                        <path
                          d="M16 3l4 4v6l-4 4-4-4V7l4-4z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-[15px] text-gray-900">
                          Chat with Fin
                        </span>
                        <span className="text-[13px] text-gray-400">
                          36m
                        </span>
                      </div>
                      <p className="text-[14px] text-gray-500 leading-tight">
                        Fin: If you need any help with our services, pl...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Chat View */}
              <div className="bg-white h-full rounded-tl-2xl flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <button 
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                      onClick={() => setCurrentView("messages")}
                    >
                      <span className="material-icons-round text-2xl">chevron_left</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8 3L4 7v6l4 4 4-4V7L8 3z"
                            fill="white"
                          />
                          <path
                            d="M16 3l4 4v6l-4 4-4-4V7l4-4z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-gray-900">
                          Fin
                        </div>
                        <div className="text-[12px] text-gray-500">
                          The team can also help
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <span className="material-icons-round text-xl">more_horiz</span>
                    </button>
                    <button 
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                      onClick={() => setCurrentView("home")}
                    >
                      <span className="material-icons-round text-xl">close</span>
                    </button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto px-5 py-6">
                  {/* Intro Message */}
                  <div className="text-center mb-8">
                    <p className="text-[14px] text-gray-500">
                      Ask us anything, or share your feedback.
                    </p>
                  </div>

                  {/* User Message - Hello */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-[#2c2c2c] text-white px-5 py-3 rounded-[20px] max-w-[75%]">
                      <p className="text-[15px]">Hello</p>
                    </div>
                  </div>

                  {/* Fin Response - Hello! */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 flex-shrink-0 bg-black rounded-lg flex items-center justify-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8 3L4 7v6l4 4 4-4V7L8 3z"
                          fill="white"
                        />
                        <path
                          d="M16 3l4 4v6l-4 4-4-4V7l4-4z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="bg-gray-100 px-5 py-3 rounded-[20px] max-w-[75%]">
                      <p className="text-[15px] text-gray-900">Hello!</p>
                    </div>
                  </div>

                  {/* Fin Response - Help Message */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 flex-shrink-0 bg-black rounded-lg flex items-center justify-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8 3L4 7v6l4 4 4-4V7L8 3z"
                          fill="white"
                        />
                        <path
                          d="M16 3l4 4v6l-4 4-4-4V7l4-4z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-100 px-5 py-3 rounded-[20px]">
                        <p className="text-[15px] text-gray-900">
                          If you need any help with our services, please let me know. Would you like to share more about what you're trying to resolve or understand?
                        </p>
                      </div>
                      <div className="text-[12px] text-gray-500 mt-2 ml-1">
                        Fin • 38m
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="px-5 pb-5">
                  <div className="border border-gray-300 rounded-[24px] px-4 py-3 flex items-center gap-3">
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <span className="material-icons-round text-xl">attach_file</span>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <span className="material-icons-round text-xl">sentiment_satisfied_alt</span>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <span className="material-icons-round text-xl">image</span>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <span className="material-icons-round text-xl">mic</span>
                    </button>
                    <input
                      type="text"
                      placeholder=""
                      className="flex-1 outline-none text-[15px] text-gray-900 placeholder-gray-400"
                    />
                    <button className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <span className="material-icons-round text-base text-gray-500">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white px-5 py-4 border-t border-gray-200">
          <div className="flex items-center justify-around">
            <button
              className={`flex flex-col items-center gap-1.5 ${
                currentView === "home" ? "text-gray-900" : "text-gray-400"
              }`}
              onClick={() => setCurrentView("home")}
            >
              <span className="material-icons-round text-2xl">home</span>
              <span className="text-[13px] font-medium">Home</span>
            </button>
            <button
              className={`flex flex-col items-center gap-1.5 ${
                currentView === "messages" || currentView === "chat" ? "text-gray-900" : "text-gray-400"
              }`}
              onClick={() => setCurrentView("messages")}
            >
              <span className="material-icons-round text-2xl">chat_bubble_outline</span>
              <span className="text-[13px] font-medium">Messages</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportScreen;
