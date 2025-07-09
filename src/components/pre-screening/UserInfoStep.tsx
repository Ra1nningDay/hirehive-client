"use client";

import { Button } from "@/components/ui/button";
import {
  Edit3,
  Star,
  HelpCircle,
  User,
  Calendar,
  Zap,
  Target,
  Briefcase,
  Rocket,
  Trophy,
} from "lucide-react";
import { UserInfo } from "@/types/user-info";

interface UserInfoStepProps {
  userInfo: UserInfo;
  onUpdateUserInfo: (info: UserInfo) => void;
  onStartInterview: () => void;
}

export function UserInfoStep({
  userInfo,
  onUpdateUserInfo,
  onStartInterview,
}: UserInfoStepProps) {
  const questions = [
    { q: "What's your name?", icon: User },
    { q: "How old are you?", icon: Calendar },
    { q: "What's your strongest point?", icon: Zap },
    { q: "What's your weakness point?", icon: Target },
    { q: "What were you doing in your last job?", icon: Briefcase },
  ];

  const fields = [
    {
      key: "name" as keyof UserInfo,
      placeholder: "Your Name",
      value: userInfo.name,
      icon: User,
    },
    {
      key: "age" as keyof UserInfo,
      placeholder: "Age",
      value: userInfo.age,
      icon: Calendar,
    },
    {
      key: "strengths" as keyof UserInfo,
      placeholder: "Strengths",
      value: userInfo.strengths,
      icon: Zap,
    },
    {
      key: "weaknesses" as keyof UserInfo,
      placeholder: "Weaknesses",
      value: userInfo.weaknesses,
      icon: Target,
    },
    {
      key: "previousJob" as keyof UserInfo,
      placeholder: "Previous Job",
      value: userInfo.previousJob,
      icon: Briefcase,
    },
  ];

  const handleInputChange = (key: keyof UserInfo, value: string) => {
    onUpdateUserInfo({
      ...userInfo,
      [key]: value,
    });
  };
  return (
    <div className="px-4 md:px-8 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block p-3 md:p-4 bg-gradient-to-r from-[#f28b1b]/10 to-[#5c4394]/10 rounded-xl md:rounded-2xl mb-3 md:mb-4">
            <Edit3 className="h-6 w-6 md:h-8 md:w-8 text-[#5c4394]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-righteous font-black text-[#5c4394] bg-gradient-to-r from-[#5c4394] to-[#7c64b4] bg-clip-text text-transparent">
            PLEASE ANSWER THE QUESTIONS BELOW
          </h2>
          <div className="mt-3 md:mt-4 text-xs md:text-sm font-comfortaa text-gray-600 flex items-center justify-center gap-2">
            <Star className="h-3 w-3 md:h-4 md:w-4" />
            Tell us about yourself to personalize your interview experience
          </div>
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Questions Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border-2 border-[#f28b1b] relative overflow-hidden hover:shadow-3xl transition-all duration-300">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-bl from-[#f28b1b]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-tr from-[#5c4394]/10 to-transparent"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#f28b1b] to-[#ff6b1a] rounded-lg flex items-center justify-center">
                  <HelpCircle className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                <h3 className="font-comfortaa font-bold text-[#5c4394] text-base md:text-lg">
                  Questions
                </h3>
              </div>

              <ul className="space-y-3 md:space-y-4 text-sm md:text-lg font-comfortaa">
                {" "}
                {questions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-gradient-to-r hover:from-[#f28b1b]/5 hover:to-[#5c4394]/5 transition-all duration-300"
                  >
                    <item.icon className="h-4 w-4 md:h-5 md:w-5 text-[#5c4394]" />
                    <span>{item.q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Answers Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border-2 border-[#f28b1b] relative overflow-hidden hover:shadow-3xl transition-all duration-300">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#5c4394]/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-tl from-[#f28b1b]/10 to-transparent"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#5c4394] to-[#7c64b4] rounded-lg flex items-center justify-center">
                  <Edit3 className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                <h3 className="text-base md:text-xl font-comfortaa font-bold text-[#5c4394]">
                  Your answers:
                </h3>
              </div>

              <div className="space-y-3 md:space-y-4">
                {fields.map((field) => (
                  <div key={field.key} className="relative group">
                    <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <field.icon className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-[#f28b1b] transition-colors duration-300" />
                    </div>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={(e) =>
                        handleInputChange(field.key, e.target.value)
                      }
                      className="w-full p-3 md:p-4 pl-10 md:pl-12 border-2 border-gray-200 rounded-xl md:rounded-2xl font-comfortaa text-sm md:text-base placeholder:text-gray-400 focus:border-[#f28b1b] focus:ring-4 focus:ring-[#f28b1b]/20 transition-all duration-300 bg-white hover:shadow-lg group-hover:border-[#f28b1b]/50"
                    />
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#f28b1b]/5 to-[#5c4394]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 md:mt-12">
          <div className="inline-block p-4 md:p-6 bg-gradient-to-r from-[#f1e6f0] to-[#e8d5f0] rounded-2xl md:rounded-3xl shadow-lg">
            <div className="mb-3 md:mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#f28b1b] rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-[#5c4394] rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-[#f28b1b] rounded-full animate-pulse delay-400"></div>
              </div>
              <div className="text-xs md:text-sm font-comfortaa text-[#5c4394] font-semibold flex items-center gap-2">
                <Target className="h-3 w-3 md:h-4 md:w-4" />
                Ready to start your interview journey?
              </div>
            </div>
            <Button
              onClick={onStartInterview}
              className="bg-gradient-to-r from-[#5c4394] to-[#7c64b4] hover:from-[#7c64b4] hover:to-[#5c4394] text-white px-6 md:px-10 py-3 md:py-5 text-lg md:text-xl font-comfortaa font-bold rounded-2xl md:rounded-3xl shadow-2xl transform hover:scale-105 md:hover:scale-110 transition-all duration-300 hover:shadow-[#5c4394]/50 border-2 border-white/20 inline-flex items-center gap-2"
            >
              <Rocket className="h-5 w-5 md:h-6 md:w-6" />
              Start Interview!
              <Trophy className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
