import {
  getChatsByUserId,
  createOrUpdateChat,
  getAllMessagesFromChat,
  sendMessage,
} from "../controllers/chatController";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  try {
    const chats = await getChatsByUserId(userId);
    return Response.json(chats);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { title } = await request.json();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    await createOrUpdateChat(userId, title);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const chatId = searchParams.get("chatId");

    console.log(`got msg ${message}`);

    await sendMessage(
      userId,
      chatId,
      message,
    );
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
