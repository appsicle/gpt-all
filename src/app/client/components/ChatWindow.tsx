'use client'

import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { IChat } from "../types/chat";

export function ChatWindow({
  selectedChat,
  isNewChat,
  onCreateNewChat,
}: {
  selectedChat: IChat | undefined;
  isNewChat: boolean;
  onCreateNewChat: (message: string) => Promise<void>;
}) {
  if (!selectedChat && !isNewChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-lg">
          Select a chat or start a new one
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {selectedChat && (
        <div className="bg-white border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={selectedChat.avatarUrl}
              alt={selectedChat.title}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h2 className="font-semibold">{selectedChat.title}</h2>
              <p className="text-xs text-gray-500">Active now</p>
            </div>
          </div>
        </div>
      )}
      {isNewChat && (
        <div className="bg-white border-b border-gray-300 p-4">
          <h2 className="font-semibold">New Chat</h2>
        </div>
      )}
      <MessageList chatId={selectedChat?.chatId} />
      <MessageInput
        chatId={selectedChat?.chatId}
        isNewChat={isNewChat}
        onCreateNewChat={onCreateNewChat}
      />
    </div>
  );
}
