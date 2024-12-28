'use client'

import { IChat } from "../../types/chat";

export function ChatList({
  chats,
  onChatSelect,
  selectedChatId,
}: {
  chats: IChat[];
  onChatSelect: (id: string) => void;
  selectedChatId: string | undefined;
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <div
          key={chat.chatId}
          className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer ${
            selectedChatId === chat.chatId ? "bg-gray-200" : ""
          }`}
          onClick={() => onChatSelect(chat.chatId)}
        >
          <img
            src={chat.avatarUrl}
            alt={chat.title}
            className="w-12 h-12 rounded-full mr-3"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{chat.title}</h3>
            <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
