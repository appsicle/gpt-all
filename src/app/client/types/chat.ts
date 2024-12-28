export enum ChatType {
  One = 1,
  Two = 2,
}

export interface IChat {
  avatarUrl: string;
  chatId: string;
  chatType: ChatType;
  lastMessage: string;
  lastMessageTimestamp: Date | string;
  title: string;
  userId: string;
}

export interface IMessage {
  chatId: string;
  messageId: string;
  message: string;
  senderId: string;
  timestamp: Date;
}
