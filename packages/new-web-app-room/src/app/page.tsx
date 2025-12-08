export default function Landing() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-orange-500 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px] animate-[grid_20s_linear_infinite]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Hello World
        </h1>
        <p className="text-xl text-white/90">
          Welcome to your new landing page
        </p>
      </div>
    </div>
  );
}




