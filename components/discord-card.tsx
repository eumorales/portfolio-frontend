"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function DiscordCard() {
  const [copied, setCopied] = useState(false);
  const discordUsername = "moralesdisc";

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(discordUsername);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className="bg-indigo-100 dark:bg-indigo-900/30 rounded-xl p-5 cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group border border-indigo-200/50 dark:border-indigo-700/50 shadow-lg"
      onClick={copyDiscord}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>
          <span className="font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
            Discord
          </span>
        </div>
        {copied ? (
          <Check className="h-4 w-4 text-green-600 animate-bounce" />
        ) : (
          <Copy className="h-4 w-4 text-gray-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
        )}
      </div>

      <div className="text-center">
        <p className="font-medium text-lg group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
          {discordUsername}
        </p>
        <p className="text-sm text-gray-600 dark:text-zinc-400 mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {copied ? "Copied!" : "Click to copy"}
        </p>
      </div>
    </div>
  );
}
