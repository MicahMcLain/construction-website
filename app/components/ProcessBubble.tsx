import React from "react";

const ProcessBubble = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="pl-2 pr-2 relative flex items-center">
      {/* Circle */}
      <div className="w-20 h-20 bg-amber-500 rounded-full flex justify-center items-center text-white font-bold text-lg">
        {title}
      </div>
      {/* Tail */}
      <div className="w-2/3 top-1/2 transform -translate-y-1/2 h-0 border-t-4 border-r-4 border-amber-500"></div>
      {/* Description */}
      <div className=" top-1/2 transform -translate-y-1/2 ml-3 text-sm text-gray-700">
        {description}
      </div>
    </div>
  );
};

export default ProcessBubble;
