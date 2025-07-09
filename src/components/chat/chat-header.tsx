import { Button } from "@/components/ui/button";
import { RefreshCcw, Bot } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

interface ChatHeaderProps {
  onReset: () => void;
}

export function ChatHeader({ onReset }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-10">
      {/* Main Header Content */}
      <div
        className="relative"
        style={{
          background: "#5c4394",
        }}
      >
        <div className="flex items-center justify-between h-20 px-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="relative h-14 w-14 bg-gradient-to-r from-[#f28b1b] to-[#ff9d3a] rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                <Bot className="h-8 w-8 text-white" />
              </Avatar>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-black text-white drop-shadow-lg tracking-wide">
                🎯 HIVE AI
              </h1>
              <span className="text-sm text-white/95 font-bold">
                Interview Game Challenge!
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <span className="text-white font-semibold text-sm">Level 1</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onReset}
              title="Restart Game"
              className="hover:bg-white/20 transition-all duration-300 rounded-full h-12 w-12"
            >
              <RefreshCcw className="h-6 w-6 text-white" />
              <span className="sr-only">Restart Game</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
