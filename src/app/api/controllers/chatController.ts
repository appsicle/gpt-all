'use server';

import { supabase } from "../db/supabaseClient";

const getChatsByUserId = async (userId: string) => {
  const { data: chats, error } = await supabase
    .from("Chats")
    .select("*")
    .eq("userId", userId);

  if (error) {
    throw new Error(`Error fetching chats: ${error.message}`);
  }

  return chats;
};

const getAllMessagesFromChat = async (chatId: string) => {
  const { data: chats, error } = await supabase
    .from("Messages")
    .select("*")
    .eq("chatId", chatId);

  if (error) {
    throw new Error(`Error fetching messages: ${error.message}`);
  }

  return chats;
};

const createOrUpdateChat = async (userId: string, title: string) => {
  const chats = await getChatsByUserId(userId);

  const { data, error } = await supabase.from("Chats").insert();

  if (error) {
    throw new Error(`Error creating chat: ${error.message}`);
  }

  return data;
};

export { getChatsByUserId, createOrUpdateChat, getAllMessagesFromChat };

// new message to llm
// /send?chatId&userId&message
// create new message in DB
// response contain llm response
//
