function FloatingChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white p-4 rounded-full shadow-2xl hover:shadow-slate-500/50 transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Open support chat"
    >
      <span className="material-icons-round text-3xl">chat</span>
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-slate-700 opacity-75 animate-ping"></span>
    </button>
  );
}

export default FloatingChatButton;
