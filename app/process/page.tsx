import React from "react";
import ProcessBubble from "../components/ProcessBubble";
import ReverseProcessBubble from "../components/ReverseProcessBubble";

const OurProcessPage = () => {
  return (
    <div className="bg-gray-300">
      <h1 className="flex justify-center text-2xl pt-2">Our Process</h1>

      <ProcessBubble title="1" description="Initial Consultation" />

      <ReverseProcessBubble title="2" description="Detailed Quote" />

      <ProcessBubble title="3" description="Design & Planning" />

      <ReverseProcessBubble title="4" description="Retainer Contract" />

      <ProcessBubble title="5" description="Shopping" />

      <ReverseProcessBubble title="6" description="Project Start" />

      <ProcessBubble title="7" description="Time to Work" />

      <ReverseProcessBubble title="8" description="Project Completion" />
    </div>
  );
};

export default OurProcessPage;
