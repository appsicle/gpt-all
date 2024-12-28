'use client'

import { IMessage } from "../../types/chat";

// const messages: IMessage[] = [
//   {
//     chatId: "1",
//     message: "Hello",
//     senderId: "fake",
//     timestamp: new Date(),
//   },
// ];

export function MessageList({ chatId }: { chatId: string | undefined }) {
  // const messages = mockMessages[chatId] || [];
  return "asdf";
  // if (messages.length === 0) {
  //   return (
  //     <div className="flex-1 flex items-center justify-center">
  //       <p className="text-gray-500">No messages yet</p>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="flex-1 overflow-y-auto p-4 space-y-4">
  //     {messages.map((message) => (
  //       <div
  //         key={message.id}
  //         className={`flex ${message.isMine ? "justify-end" : "justify-start"}`}
  //       >
  //         <div
  //           className={`max-w-xs px-4 py-2 rounded-lg ${
  //             message.isMine ? "bg-blue-500 text-white" : "bg-gray-200"
  //           }`}
  //         >
  //           {message.content}
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
}
