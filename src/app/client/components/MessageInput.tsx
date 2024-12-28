'use client'

import { useState } from "react";
import { Smile, Paperclip, Image, Send } from "lucide-react";

export function MessageInput({
  chatId,
  isNewChat,
  onCreateNewChat,
}: {
  chatId: string | undefined;
  isNewChat: boolean;
  onCreateNewChat: (message: string) => void;
}) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      if (isNewChat) {
        onCreateNewChat(message);
      } else {
        console.log(`Sending message to chat ${chatId}: ${message}`);
      }
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-t border-gray-300 p-4"
    >
      <div className="flex items-center space-x-2">
        <button type="button" className="p-2 hover:bg-gray-200 rounded-full">
          <Smile size={20} />
        </button>
        <button type="button" className="p-2 hover:bg-gray-200 rounded-full">
          <Paperclip size={20} />
        </button>
        <button type="button" className="p-2 hover:bg-gray-200 rounded-full">
          <Image size={20} />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={isNewChat ? "Type a message to start a new chat" : "Aa"}
          className="flex-1 py-2 px-4 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="p-2 hover:bg-gray-200 rounded-full">
          <Send size={20} className="text-blue-500" />
        </button>
      </div>
    </form>
  );
}
