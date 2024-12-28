'use client';

import { Sidebar } from "../client/components/Sidebar";
import { ChatWindow } from "../client/components/ChatWindow";
import { useChats } from "../client/hooks/useChats";
import { createChat } from "../client/services/chatService";

export default function App() {
  const {
    chats,
    setChats,
    selectedChat,
    setSelectedChat,
    isNewChat,
    setIsNewChat,
  } = useChats();

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chats.find((chat) => chat.chatId === chatId) || undefined);
    setIsNewChat(false);
  };

  const handleNewChat = () => {
    setIsNewChat(true);
    setSelectedChat(undefined);
  };

  const handleCreateNewChat = async (message: string) => {
    const newChat = await createChat(message);
    setChats([newChat, ...chats]);
    setSelectedChat(newChat);
    setIsNewChat(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        chats={chats}
        onChatSelect={handleChatSelect}
        selectedChatId={selectedChat?.chatId}
        onNewChat={handleNewChat}
      />
      <ChatWindow
        selectedChat={selectedChat}
        isNewChat={isNewChat}
        onCreateNewChat={handleCreateNewChat}
      />
    </div>
  );
}
