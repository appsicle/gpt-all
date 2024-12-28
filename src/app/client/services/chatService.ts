import { IChat } from "../types/chat";
import { CONFIG } from "../constants/config";

const baseUrl = `${CONFIG.apiUrl}/chats`
const userId = CONFIG.userId;

export const fetchAllChats = async (): Promise<IChat[]> => {
  const url = `${baseUrl}?userId=${userId}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return response.json();
};

export const createChat = async (message: string): Promise<IChat> => {
  const url = `${baseUrl}?userId=${userId}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "New Chat" }),
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return response.json();
};
