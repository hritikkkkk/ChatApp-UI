import { ChatSideBar } from "../components/ChatSideBar";
import { Chat } from "../components/Chat";

export const ChatPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
          <ChatSideBar />
        </div>
        <div>
          <Chat />
        </div>
      </div>
    </div>
  );
};
