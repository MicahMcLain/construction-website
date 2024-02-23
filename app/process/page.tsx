import React from "react";
import ProcessBubble from "../components/ProcessBubble";
import ReverseProcessBubble from "../components/ReverseProcessBubble";

const OurProcessPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 ml-2">Our Process</h2>

        <ProcessBubble title="1" description="Initial Consultation" />

        <ReverseProcessBubble title="2" description="Detailed Quote" />

        <ProcessBubble title="3" description="Design & Planning" />

        <ReverseProcessBubble title="4" description="Shopping" />

        <ProcessBubble title="5" description="Retainer Contract" />

        <ReverseProcessBubble title="6" description="Project Start" />

        <ProcessBubble title="7" description="Time to Work" />

        <ReverseProcessBubble title="8" description="Project Completion" />
      </div>
    </section>
  );
};

export default OurProcessPage;
