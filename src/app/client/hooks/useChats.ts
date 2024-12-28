'use client';

import { useState, useEffect } from "react";
import { IChat } from "../types/chat";
import { fetchAllChats } from "../services/chatService";

export const useChats = () => {
  const [chats, setChats] = useState<IChat[]>([]);
  const [selectedChat, setSelectedChat] = useState<IChat | undefined>(
    undefined
  );
  const [isNewChat, setIsNewChat] = useState(false);

  useEffect(() => {
    const getAllChats = async () => {
      try {
        const fetchedChats = await fetchAllChats();
        setChats(fetchedChats);
      } catch (error) {
        console.error(error);
      }
    };
    getAllChats();
  }, []);

  return {
    chats,
    setChats,
    selectedChat,
    setSelectedChat,
    isNewChat,
    setIsNewChat,
  };
};
