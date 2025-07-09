"use client";

import { Trophy } from "lucide-react";

interface Step {
  label: string;
  active: boolean;
}

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  return (
    <div className="bg-gradient-to-r from-white to-gray-50 shadow-2xl relative">
      <div className="flex relative">
        {/* Progress line animation */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#f28b1b] to-[#ff6b1a] transition-all duration-700 ease-out"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 py-3 md:py-4 px-2 md:px-4 text-center font-comfortaa font-bold text-white relative z-10 transition-all duration-500 transform ${
              index <= currentStep
                ? "bg-gradient-to-r from-[#f28b1b] to-[#ff6b1a] scale-105"
                : "bg-gradient-to-r from-[#5c4394] to-[#7c64b4] hover:scale-105"
            } ${index === 0 ? "rounded-tl-none" : ""} ${
              index === steps.length - 1 ? "rounded-tr-none" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-1 md:gap-2">
              {index <= currentStep && (
                <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full flex items-center justify-center animate-bounce">
                  <Trophy className="h-2 w-2 md:h-3 md:w-3 text-[#f28b1b]" />
                </div>
              )}
              <span
                className={`text-xs md:text-sm ${
                  index <= currentStep ? "animate-pulse" : ""
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Step number indicator */}
            <div
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                index <= currentStep
                  ? "bg-white text-[#f28b1b] shadow-lg scale-110"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
