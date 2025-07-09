"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  Rocket,
  Target,
  Star,
  Zap,
  Trophy,
  User,
  ArrowRight,
} from "lucide-react";

interface IntroStepProps {
  onNext: () => void;
}

export function IntroStep({ onNext }: IntroStepProps) {
  return (
    <div className="flex items-center justify-center min-h-[600px] md:min-h-[600px] px-4 md:px-8 py-8 md:py-12 relative">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 relative z-10 text-center lg:text-left">
          <div className="mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-[#f28b1b] to-[#f28b1b]/80 text-white rounded-full text-xs md:text-sm font-comfortaa font-bold shadow-lg">
              <Play className="h-3 w-3 md:h-4 md:w-4" />
              Gaming Mode ON!
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bungee mb-4 md:mb-6 leading-tight text-[#5c4394] relative">
            <span className="inline-block hover:animate-pulse transition-all duration-300">
              Let&apos;s try
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl text-[#f28b1b] drop-shadow-2xl font-audiowide bg-gradient-to-r from-[#f28b1b] to-[#ff6b1a] bg-clip-text text-transparent animate-pulse">
              HIVE AI
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-[#5c4394] font-righteous hover:scale-105 transition-transform duration-300 inline-block">
              Interview Game
            </span>
          </h1>{" "}
          {/* Description */}
          <div className="mb-6 md:mb-8 space-y-3 md:space-y-4">
            <div className="bg-gradient-to-r from-white/90 to-gray-50/90 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border-2 border-[#f28b1b]/20 backdrop-blur-sm">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#5c4394] to-[#7c64b4] rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-comfortaa font-bold text-[#5c4394] mb-1 md:mb-2">
                    🎯 Practice Real Interview Skills
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 font-comfortaa">
                    Experience realistic interview scenarios and get
                    personalized feedback to improve your performance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-white/90 to-gray-50/90 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border-2 border-[#f28b1b]/20 backdrop-blur-sm">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#f28b1b] to-[#ff6b1a] rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-comfortaa font-bold text-[#5c4394] mb-1 md:mb-2">
                    ⚡ AI-Powered Coaching
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 font-comfortaa">
                    Get instant feedback and tips from our advanced AI
                    interviewer tailored to your responses
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    i < 5 ? "bg-[#f28b1b]" : "bg-gray-300"
                  } animate-pulse`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span className="text-xs md:text-sm font-comfortaa text-[#5c4394] font-semibold flex items-center gap-1">
              <Star className="h-3 w-3 md:h-4 md:w-4" />
              Level 1 Ready!
            </span>
          </div>
          <Button
            onClick={onNext}
            className="mt-4 md:mt-6 bg-gradient-to-r from-[#f28b1b] to-[#ff6b1a] hover:from-[#ff6b1a] hover:to-[#f28b1b] text-white px-6 md:px-8 py-4 md:py-6 text-lg md:text-xl font-comfortaa font-bold rounded-xl md:rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-[#f28b1b]/50 border-2 border-white/20 inline-flex items-center gap-2"
          >
            <Rocket className="h-4 w-4 md:h-5 md:w-5" />
            Start Interview Game
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
        <div className="flex-1 relative order-first lg:order-last">
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            {/* Animated background circles */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#f28b1b]/20 to-[#f28b1b]/5 rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#5c4394]/20 to-[#5c4394]/5 rounded-full animate-pulse delay-1000"></div>
            </div>

            <div className="absolute top-6 right-6 md:top-10 md:right-20 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#5c4394] to-[#7c64b4] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Star className="h-6 w-6 md:h-8 md:w-8 text-white animate-spin slow-spin" />
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-20 md:left-10 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-[#f28b1b] to-[#ff6b1a] rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce">
              <Trophy className="h-8 w-8 md:h-12 md:w-12 text-white" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#5c4394] to-[#7c64b4] rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Zap className="h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 text-white animate-pulse" />
            </div>
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#f28b1b] to-[#ff6b1a] rounded-xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse">
              <User className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-white" />
            </div>

            {/* Floating particles */}
            <div className="absolute top-12 left-1/4 md:top-20 md:left-1/4 w-1 h-1 md:w-2 md:h-2 bg-[#f28b1b] rounded-full animate-ping"></div>
            <div className="absolute bottom-16 right-1/4 md:bottom-32 md:right-1/4 w-2 h-2 md:w-3 md:h-3 bg-[#5c4394] rounded-full animate-ping delay-500"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#f28b1b] rounded-full animate-ping delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
