import React from "react";

interface NodeProps {
  text: string;
}

const Node: React.FC<NodeProps> = ({ text }) => {
  return (
    <div
      className="flex items-center text-center justify-center w-40 min-h-7 max-h-max rounded-md p-4 bg-gradient-to-r from-purple-500 to-indigo-600
          text-white "
    >
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default Node;
