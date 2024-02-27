import React from "react";

interface SectionChatProps {
  messages: string[];
}

const SectionChat: React.FC<SectionChatProps> = ({ messages }) => {
  return (
    <div className="flex border-gold border-t-[1px] min-h-64 max-h-64 overflow-y-auto custom-scrollbar">
      <div></div>
      <input type="text" className="self-end"></input>
    </div>
  );
};

export default SectionChat;
