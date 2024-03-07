const ProcessBubble = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="px-4 relative flex items-center">
      {/* Circle */}
      <div className="w-28 h-28 bg-amber-400 rounded-full flex justify-center items-center text-white font-bold text-xl">
        {title}
      </div>
      {/* Tail */}
      <div className="w-2/3 top-1/2 transform -translate-y-1/2 h-0 border-t-8 border-r-8 border-amber-400"></div>
      {/* Description */}
      <div className=" top-1/2 transform -translate-y-1/2 ml-3 text-sm text-gray-700">
        {description}
      </div>
    </div>
  );
};

export default ProcessBubble;
