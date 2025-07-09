"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { JobPosition, jobPositions } from "@/types/job-positions";
import { UserInfo } from "@/types/user-info";
import { useChatStore } from "@/store/use-chat-store";
import {
  IntroStep,
  RuleStep,
  SelectQuizStep,
  JobDescriptionStep,
  UserInfoStep,
  ProgressBar,
  Background,
} from "@/components/pre-screening";

export default function HomePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    age: "",
    strengths: "",
    weaknesses: "",
    previousJob: "",
  });

  const { setUserSelection, generateWelcomeMessage, setMessages } =
    useChatStore();

  const steps = [
    { label: "Intro", active: true },
    { label: "Rule", active: false },
    { label: "Select quiz", active: false },
    { label: "Your info", active: false },
    { label: "Start test", active: false },
    { label: "Final Results", active: false },
  ];

  const handleSelectJob = (job: JobPosition) => {
    setSelectedJob(job);
    setCurrentStep(4);
  };

  const handleStartInterview = () => {
    setUserSelection({
      selectedJob: selectedJob || undefined,
      userInfo: userInfo.name ? userInfo : undefined,
    });

    const welcomeMessage = generateWelcomeMessage();
    setMessages([welcomeMessage]);

    router.push("/interview");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <IntroStep onNext={() => setCurrentStep(1)} />;
      case 1:
        return <RuleStep onNext={() => setCurrentStep(2)} />;
      case 2:
        return (
          <SelectQuizStep
            jobPositions={jobPositions}
            onSelectJob={handleSelectJob}
            onNext={() => setCurrentStep(3)}
          />
        );
      case 3:
        return (
          <UserInfoStep
            userInfo={userInfo}
            onUpdateUserInfo={setUserInfo}
            onStartInterview={handleStartInterview}
          />
        );
      case 4:
        return selectedJob ? (
          <JobDescriptionStep
            selectedJob={selectedJob}
            onNext={() => setCurrentStep(3)}
          />
        ) : null;
      default:
        return <IntroStep onNext={() => setCurrentStep(1)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1e6f0] via-[#f8f0f5] to-[#e8d5f0] relative overflow-hidden">
      <ProgressBar steps={steps} currentStep={currentStep} />
      <main className="relative z-10 pb-4 md:pb-0">{renderCurrentStep()}</main>
      <Background />
    </div>
  );
}
