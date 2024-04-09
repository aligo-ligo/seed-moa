import React from "react";

interface Props {
  children: React.ReactNode;
}

const BlackBoard = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col min-h-[160px] border-4 border-[#854d3c] bg-[#0a310a] text-white relative">
      <p className="w-8 border-2 border-white absolute bottom-0 left-20"></p>
      {children}
    </div>
  );
};

export default BlackBoard;
