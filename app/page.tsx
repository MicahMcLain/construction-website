import { Metadata } from "next";
import Link from "next/link";
import backgroundImage from "./background.png";

const Hero = () => {
  return (
    <section className="text-color py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Building Dreams Together</h2>
      <p className="text-xl">Your trusted partner in construction projects</p>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 text-center text-color">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <Link href="/services">Our Services</Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Construction Management</h3>
            <p className="text-xl">
              From planning to completion, we handle it all.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Design & Build</h3>
            <p className="text-xl">
              Turn your vision into reality with our design and construction
              expertise.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              Renovation & Restoration
            </h3>
            <p className="text-xl">
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
    <section id="about" className="py-16 text-center text-color">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <Link href="/about">About Us</Link>
        </h2>
        <p className="max-w-xl mx-auto px-4 md:px-0 text-xl">
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
    <section id="contact" className="py-16 text-center text-color">
      <div className="p-6 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-color">Contact Us</h2>
        <p className="text-lg">Let&apos;s discuss your project.</p>
        <p className="text-lg">Phone: 513-882-9110</p>
        <p className="text-lg">Email: tribcontractservices@gmail.com</p>
        <a
          href={schedulingWebsite}
          target={"_blank"}
          className="text-blue-400 hover:text-blue-800 transition-colors self-center pb-4 text-lg"
        >
          Schedule an Appointment
        </a>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div
      className="text-center py-16"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;

export const metadata: Metadata = {
  title: "Tri-B Contracting - Home",
  description: "Homepage for Tri-B Contract Services",
};
