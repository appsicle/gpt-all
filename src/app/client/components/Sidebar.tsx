'use client'

import { Search, Edit } from "lucide-react";
import { ChatList } from "./ChatList";
import { IChat } from "../../types/chat";

export function Sidebar({
  chats,
  onChatSelect,
  selectedChatId,
  onNewChat,
}: {
  chats: IChat[];
  onChatSelect: (chatId: string) => void;
  selectedChatId: string | undefined;
  onNewChat: () => void;
}) {
  return (
    <div className="w-1/4 bg-white border-r border-gray-300 flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-bold text-blue-600">Chats</h1>
        <button
          onClick={onNewChat}
          className="p-2 hover:bg-gray-200 rounded-full"
        >
          <Edit size={20} />
        </button>
      </div>
      <div className="p-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Messenger"
            className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>
      </div>
      <ChatList
        chats={chats}
        onChatSelect={onChatSelect}
        selectedChatId={selectedChatId}
      />
    </div>
  );
}
