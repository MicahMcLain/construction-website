import { Metadata } from "next";

const AboutUs = () => {
  return (
    <section className="py-8 md:py-16 px-4 bg-gray-300">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          About Us
        </h2>
        <p className="text-sm md:text-base mb-4">
          Construction Co. is a leading construction company dedicated to
          providing high-quality services for both residential and commercial
          projects. With years of experience in the industry, we have built a
          strong reputation for delivering exceptional results.
        </p>
        <p className="text-sm md:text-base mb-4">
          Our team consists of skilled professionals who are passionate about
          construction and committed to excellence in every project we
          undertake. From planning to completion, we work closely with our
          clients to ensure their vision is brought to life.
        </p>
        <p className="text-sm md:text-base mb-4">
          At Construction Co., we prioritize safety, integrity, and customer
          satisfaction. Whether it&apos;s new construction, renovation, or
          restoration, you can trust us to deliver superior craftsmanship and
          attention to detail.
        </p>
        <p className="text-sm md:text-base mb-4">
          Contact us today to learn more about our services and how we can help
          with your next construction project.
        </p>
      </div>
    </section>
  );
};

const MissionStatement = () => {
  return (
    <section className="py-8 md:py-16 px-4 bg-gray-300">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Our Mission
        </h2>
        <p className="text-sm md:text-base mb-4">
          Our mission is to provide outstanding Home Improvement and Remodeling
          value, building on our reputation of professionalism, consistency, and
          integrity in our services and products, responsiveness to clients and
          use of innovative and traditional quality solutions.
        </p>
        <p className="text-sm md:text-base mb-4">
          We strive to build lasting relationships with our clients, suppliers,
          and subcontractors based on mutual respect, trust, and integrity. Our
          goal is to be the construction company of choice for all our
          clients&apos; construction needs.
        </p>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-gray-300">
      <AboutUs />
      <MissionStatement />
    </div>
  );
};

export default AboutPage;
export const metadata: Metadata = {
  title: "Tri-B Contracting - About Us",
  description: "Tri-B Contracting Services",
};
