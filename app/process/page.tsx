import React from "react";
import ProcessBubble from "../components/ProcessBubble";
import ReverseProcessBubble from "../components/ReverseProcessBubble";

const OurProcessPage = () => {
  return (
    <div className="">
      <h1 className="flex justify-center text-2xl pt-2">Our Process</h1>

      <ProcessBubble title="1" description="Initial Consultation" />

      <ReverseProcessBubble title="2" description="Design & Planning" />

      <ProcessBubble title="3" description="Construction" />

      <ReverseProcessBubble title="4" description="Final Walkthrough" />
    </div>
  );
};

export default OurProcessPage;
