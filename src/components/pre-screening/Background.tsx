"use client";

export function Background() {
  return (
    <>
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-12 md:top-20 left-4 md:left-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#f28b1b]/30 to-[#f28b1b]/10 rounded-full animate-pulse shadow-xl"></div>
      <div className="absolute top-32 md:top-40 right-8 md:right-20 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-[#5c4394]/30 to-[#5c4394]/10 rounded-full animate-bounce delay-300 shadow-lg"></div>
      <div className="absolute bottom-32 md:bottom-40 left-8 md:left-20 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#f28b1b]/20 to-[#f28b1b]/5 rounded-full animate-pulse delay-700 shadow-2xl"></div>
      <div className="absolute bottom-12 md:bottom-20 right-4 md:right-10 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#5c4394]/25 to-[#5c4394]/5 rounded-full animate-bounce delay-1000 shadow-xl"></div>

      {/* Additional floating particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 md:w-3 md:h-3 bg-[#f28b1b] rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#5c4394] rounded-full animate-ping delay-500 opacity-60"></div>
      <div className="absolute top-2/3 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-[#f28b1b] rounded-full animate-pulse delay-1000 opacity-50"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 border-2 border-[#f28b1b] rounded-full animate-spin slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 border-2 border-[#5c4394] rounded-full animate-spin reverse-spin slow"></div>
      </div>
    </>
  );
}
