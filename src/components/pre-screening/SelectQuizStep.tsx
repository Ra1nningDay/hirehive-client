"use client";

import { Button } from "@/components/ui/button";
import { Users, Target, Rocket, Play, Star, ArrowRight } from "lucide-react";
import { JobPosition } from "@/types/job-positions";

interface SelectQuizStepProps {
  jobPositions: JobPosition[];
  onSelectJob: (job: JobPosition) => void;
  onNext: () => void;
}

export function SelectQuizStep({
  jobPositions,
  onSelectJob,
  onNext,
}: SelectQuizStepProps) {
  return (
    <div className="px-4 md:px-8 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-12 gap-4 md:gap-8">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#5c4394] to-[#7c64b4] rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
            <Users className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </div>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-[#f28b1b] relative overflow-hidden hover:shadow-3xl transition-all duration-300">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f28b1b]/5 via-transparent to-[#5c4394]/5 animate-pulse"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#f28b1b] to-[#ff6b1a] rounded-lg md:rounded-xl flex items-center justify-center">
                  <Target className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-righteous font-black text-[#5c4394] bg-gradient-to-r from-[#5c4394] to-[#7c64b4] bg-clip-text text-transparent">
                  SELECT OPP
                </h2>
              </div>

              <div className="flex gap-1 md:gap-2 mt-3 md:mt-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                      i < 2 ? "bg-[#f28b1b] animate-pulse" : "bg-gray-300"
                    }`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>

              <div className="mt-3 md:mt-4 text-xs md:text-sm font-comfortaa text-[#5c4394] font-semibold flex items-center gap-2">
                <Rocket className="h-3 w-3 md:h-4 md:w-4" />
                Choose your challenge!
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {jobPositions.map((job, index) => (
            <button
              key={index}
              className={`${job.color} text-white p-4 md:p-6 rounded-xl md:rounded-2xl font-comfortaa font-bold text-center hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-3xl relative overflow-hidden group`}
              onClick={() => onSelectJob(job)}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="text-xs md:text-sm underline mb-1 md:mb-2 group-hover:animate-pulse">
                  {job.title}
                </div>
                <div className="text-xs font-normal opacity-90">
                  {job.subtitle}
                </div>

                {/* Hover effect icon */}
                <div className="absolute top-1 right-1 md:top-2 md:right-2 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="h-2 w-2 md:h-3 md:w-3 text-white" />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-4 md:p-6 bg-gradient-to-r from-[#f1e6f0] to-[#e8d5f0] rounded-xl md:rounded-2xl shadow-lg">
            <div className="mb-3 md:mb-4 text-xs md:text-sm font-comfortaa text-[#5c4394] font-semibold flex items-center gap-2 justify-center">
              <Play className="h-3 w-3 md:h-4 md:w-4" />
              Ready to level up?
            </div>
            <Button
              onClick={onNext}
              className="bg-gradient-to-r from-[#5c4394] to-[#7c64b4] hover:from-[#7c64b4] hover:to-[#5c4394] text-white px-6 md:px-8 py-3 md:py-4 font-comfortaa font-bold rounded-xl md:rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[#5c4394]/50 border border-white/20 inline-flex items-center gap-2"
            >
              Position Selected
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
