const ReverseProcessBubble = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="px-4 relative flex items-center justify-end">
      {/* Description */}
      <div className=" top-1/2 transform -translate-y-1/2 m-3 text-sm text-gray-700 items-center text-center">
        {description}
      </div>
      {/* Tail */}
      <div className="w-2/3 top-1/2 transform -translate-y-1/2 h-0 border-t-8 border-l-8 border-amber-300"></div>
      {/* Circle */}
      <div className="w-28 h-28 bg-amber-300 rounded-full flex justify-center items-center text-white font-bold text-xl">
        {title}
      </div>
    </div>
  );
};

export default ReverseProcessBubble;
