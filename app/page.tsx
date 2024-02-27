import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-300 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Building Dreams Together</h2>
      <p className="text-lg">Your trusted partner in construction projects</p>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <Link href="/services">Our Services</Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Construction Management</h3>
            <p>From planning to completion, we handle it all.</p>
          </div>
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Design & Build</h3>
            <p>
              Turn your vision into reality with our design and construction
              expertise.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Renovation & Restoration</h3>
            <p>
              Breathe new life into old spaces with our renovation services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-gray-300 py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <Link href="/about">About Us</Link>
        </h2>
        <p className="max-w-xl mx-auto">
          We are a dedicated team of construction professionals committed to
          excellence in every project we undertake.
        </p>
      </div>
    </section>
  );
};
const schedulingWebsite = "https://calendly.com/tribcontractservices";
const Contact = () => {
  return (
    <section id="contact" className="py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p>Let's discuss your project.</p>
        <p>Phone: 513-882-9110</p>
        <p>Email: tribcontractingservices@gmail.com</p>
        <a
          href={schedulingWebsite}
          target={"_blank"}
          className="text-blue-400 hover:text-blue-800 transition-colors self-center pb-4"
        >
          Schedule an Appointment
        </a>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
