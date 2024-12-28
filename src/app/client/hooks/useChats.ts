'use client';

import { useState, useEffect } from "react";
import { IChat } from "../../types/chat";
import { fetchAllChats } from "../services/chatService";
import { CONFIG } from "../constants/config";

const userId = CONFIG.userId;

export const useChats = () => {
  const [chats, setChats] = useState<IChat[]>([]);
  const [selectedChat, setSelectedChat] = useState<IChat | undefined>(
    undefined
  );
  const [isNewChat, setIsNewChat] = useState(false);

  useEffect(() => {
    const getAllChats = async () => {
      try {
        const fetchedChats = await fetchAllChats(userId);
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
