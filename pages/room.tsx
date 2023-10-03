import React, { useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const Room = () => {
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");
  return (
    <ProtectedRoute>
      {" "}
      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input onChange={(e) => setRoom(e.target.value)} />
          <button
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        <div>This is the CHAT!</div>
      )}
      ;
    </ProtectedRoute>
  );
};

export default Room;
