"use client";

import { Button } from "@/components/ui/button";
import { Target, Briefcase, ArrowRight } from "lucide-react";
import { JobPosition } from "@/types/job-positions";

interface JobDescriptionStepProps {
  selectedJob: JobPosition;
  onNext: () => void;
}

export function JobDescriptionStep({
  selectedJob,
  onNext,
}: JobDescriptionStepProps) {
  return (
    <div className="px-4 md:px-8 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-8 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f28b1b]/5 via-transparent to-[#5c4394]/5 rounded-2xl md:rounded-3xl animate-pulse"></div>

          <div className="relative z-10 p-4 md:p-8">
            <div className="inline-block mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#f28b1b] to-[#ff6b1a] rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-righteous font-black underline mb-2 text-[#5c4394] bg-gradient-to-r from-[#5c4394] to-[#7c64b4] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              {selectedJob.title}
            </h2>
            <p className="text-lg md:text-xl font-comfortaa font-bold text-[#5c4394] opacity-80">
              {selectedJob.subtitle}
            </p>
            {/* Animated underline */}
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#f28b1b] to-[#ff6b1a] mx-auto mt-3 md:mt-4 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border-2 border-[#f28b1b] mb-6 md:mb-8 relative overflow-hidden hover:shadow-3xl transition-all duration-300">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-bl from-[#f28b1b]/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-tr from-[#5c4394]/10 to-transparent"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#5c4394] to-[#7c64b4] rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-comfortaa font-bold text-[#5c4394]">
                Job Description:
              </h3>
            </div>

            <ul className="space-y-3 md:space-y-4">
              {selectedJob.description.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-gradient-to-r hover:from-[#f28b1b]/5 hover:to-[#5c4394]/5 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#f28b1b] to-[#ff6b1a] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xs md:text-sm">
                      ✓
                    </span>
                  </div>
                  <span className="text-xs md:text-sm leading-relaxed font-comfortaa text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block p-4 md:p-6 bg-gradient-to-r from-[#f1e6f0] to-[#e8d5f0] rounded-2xl md:rounded-3xl shadow-lg">
            <div className="mb-3 md:mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xl md:text-2xl animate-bounce">🚀</span>
                <span className="text-sm md:text-lg font-comfortaa text-[#5c4394] font-semibold">
                  Ready for the challenge?
                </span>
              </div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-[#f28b1b] rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            <Button
              onClick={onNext}
              className="bg-gradient-to-r from-[#5c4394] to-[#7c64b4] hover:from-[#7c64b4] hover:to-[#5c4394] text-white px-6 md:px-10 py-3 md:py-5 text-lg md:text-xl font-comfortaa font-bold rounded-2xl md:rounded-3xl shadow-2xl transform hover:scale-105 md:hover:scale-110 transition-all duration-300 hover:shadow-[#5c4394]/50 border-2 border-white/20"
            >
              🎯 Next{" "}
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
