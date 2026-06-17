import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        }),
      );
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse h-[500px] p-2 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
        {
          // Disclaimer: Don't use indexes as key
          ChatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        className="p-2 m-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Shrutik Bhavsar",
              message: liveMessage,
            }),
          );

          setLiveMessage("");
        }}
      >
        <input
          className="w-72 p-1 border border-gray-200"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
