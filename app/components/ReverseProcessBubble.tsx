import React from "react";

const ReverseProcessBubble = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="pl-2 pr-2 relative flex items-center justify-end">
      {/* Description */}
      <div className=" top-1/2 transform -translate-y-1/2 m-3 text-sm text-gray-700">
        {description}
      </div>
      {/* Tail */}
      <div className="w-2/3 top-1/2 transform -translate-y-1/2 h-0 border-t-4 border-l-4 border-amber-300"></div>
      {/* Circle */}
      <div className="w-20 h-20 bg-amber-300 rounded-full flex justify-center items-center text-white font-bold text-lg">
        {title}
      </div>
    </div>
  );
};

export default ReverseProcessBubble;
