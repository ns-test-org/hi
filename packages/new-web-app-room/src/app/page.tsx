export default function Landing() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-orange-500">
      {/* Animated gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-500 to-orange-400 opacity-50 animate-gradient-shift-reverse"></div>
      
      {/* Content */}
      <div className="text-center px-6 relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4 animate-float">
          Hello World
        </h1>
        <p className="text-xl text-orange-100 animate-float" style={{ animationDelay: '0.2s' }}>
          Welcome to your new landing page
        </p>
      </div>
    </div>
  );
}







