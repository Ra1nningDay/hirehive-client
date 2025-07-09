"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  HelpCircle,
  Target,
  Rocket,
  Shield,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";

interface RuleStepProps {
  onNext: () => void;
}

export function RuleStep({ onNext }: RuleStepProps) {
  const rules = [
    {
      text: "You are the job candidate in this interview simulation game.",
      icon: Target,
      color: "text-[#f28b1b]",
    },
    {
      text: "Your mission: Answer questions truthfully based on your real experiences and level up your interview skills.",
      icon: Rocket,
      color: "text-[#5c4394]",
    },
    {
      text: "Answer like it's the real deal",
      icon: Shield,
      color: "text-[#f28b1b]",
      subItems: [
        "• Speak from your real-life experiences",
        '• No need for perfect answers "just be you"',
      ],
    },
    {
      text: 'Click "Next" to advance through levels',
      icon: TrendingUp,
      color: "text-[#5c4394]",
      subItems: ["• Each stage introduces new challenges stay sharp!"],
    },
    {
      text: "Your goal: Get ready for the real interviews and win the offer!",
      icon: Award,
      color: "text-[#f28b1b]",
      strong: true,
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[500px] px-4 md:px-8 pt-6 md:pt-10">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 relative order-first lg:order-first">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#f28b1b] to-[#ff6b1a] rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer mx-auto lg:mx-0">
            <Play className="h-12 w-12 md:h-16 md:w-16 text-white" />
          </div>
          <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#5c4394]/20 to-transparent rounded-full animate-pulse"></div>
        </div>
        <div className="flex-2 bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-[#5c4394]/20 relative overflow-hidden hover:shadow-3xl transition-all duration-300">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-bl from-[#f28b1b]/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-[#5c4394]/10 to-transparent"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#f28b1b] to-[#ff6b1a] rounded-lg flex items-center justify-center">
                <HelpCircle className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-righteous text-[#5c4394] bg-gradient-to-r from-[#5c4394] to-[#7c64b4] bg-clip-text text-transparent">
                HOW TO PLAY
              </h2>
            </div>

            <div className="space-y-4 md:space-y-6 font-comfortaa">
              {rules.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-gradient-to-r hover:from-[#f28b1b]/5 hover:to-[#5c4394]/5 transition-all duration-300 group"
                >
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 ${item.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1`}
                  >
                    <item.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-sm md:text-lg ${
                        item.strong ? "font-bold text-[#5c4394]" : ""
                      }`}
                    >
                      {item.text}
                    </p>
                    {item.subItems && (
                      <ul className="ml-4 md:ml-6 mt-1 md:mt-2 space-y-1 text-xs md:text-base text-gray-600">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={onNext}
              className="mt-6 md:mt-8 bg-gradient-to-r from-[#f28b1b] to-[#ff6b1a] hover:from-[#ff6b1a] hover:to-[#f28b1b] text-white px-6 md:px-8 py-3 md:py-4 font-comfortaa font-bold rounded-xl md:rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[#f28b1b]/50 border border-white/20"
            >
              Next <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
