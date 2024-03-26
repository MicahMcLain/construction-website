"use client";
import React from "react";
import ServiceCardCarousel from "../components/Carousel";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 ml-2">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-wrapper">
            <ServiceCard
              title="Kitchens"
              description="Transform your kitchen with our expert remodeling services."
            />

            <ServiceCardCarousel urls={kitchen_public_ids} />
          </div>
          <div className="service-wrapper">
            <ServiceCard
              title="Bathrooms"
              description="Create your dream bathroom with our professional renovation solutions."
            />

            <ServiceCardCarousel urls={bathroom_public_ids} />
          </div>

          <div className="service-wrapper">
            <ServiceCard
              title="Interior Remodels"
              description="Revitalize your interior spaces with our remodeling expertise."
            />
            <ServiceCardCarousel urls={interior_public_ids} />
          </div>

          <div className="service-wrapper">
            <ServiceCard
              title="Basements"
              description="Maximize your living space with our basement finishing services."
            />
            <ServiceCardCarousel
              urls={basement_public_ids}
            ></ServiceCardCarousel>
          </div>

          <div className="service-wrapper">
            <ServiceCard
              title="Decks"
              description="Enhance your outdoor living experience with a custom-built deck."
            />
            <ServiceCardCarousel urls={deck_public_ids} />
          </div>

          <div className="service-wrapper">
            <ServiceCard
              title="Outdoor Living Spaces"
              description="Design and construct beautiful outdoor living areas tailored to your needs."
            />
            <ServiceCardCarousel urls={outdoor_public_ids} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const basement_public_ids = [
  "Roger's Website/Basements/jo22h8cq4zhfgtnjhh0e",
  "Roger's Website/Basements/wpvohs6pirfai04porp3",
  "Roger's Website/Basements/v1gzrdphhxmhndxxqntv",
  "Roger's Website/Basements/m0ez2ly2fvr0q3p4hlrw",
  "Roger's Website/Basements/f3mcbcmmtqby4eycq3lp",
  "Roger's Website/Basements/xxbs3oy8dwpbdgvxxa0a",
  "Roger's Website/Basements/bwcdge2zzldkq57zqutv",
  "Roger's Website/Basements/tynson8gdcyhttd3npd7",
  "Roger's Website/Basements/phqfdtbd36rfbmlazxuz",
  "Roger's Website/Basements/srzxqzbffbbmfnezx5nz",
];
const kitchen_public_ids = [
  "Roger's Website/Kitchens/aeoge6ejjtkdup9hbats",
  "Roger's Website/Kitchens/e0bjvlr8kadeigi41xze",
  "Roger's Website/Kitchens/delgnmjkwyj4lqbxqm4n",
  "Roger's Website/Kitchens/jmzjiueznl8mreshu6gg",
  "Roger's Website/Kitchens/qjzdvdssg633mu0jnudi",
  "Roger's Website/Kitchens/v57mwc73ariw8ami4guz",
  "Roger's Website/Kitchens/h7spbnp2ajvisi8ntxs7",
  "Roger's Website/Kitchens/kv4cfjobyf8hidgskaef",
  "Roger's Website/Kitchens/qfkjb0axfsxovkd300f9",
  "Roger's Website/Kitchens/eerbrhisefbks0nggojf",
];
const bathroom_public_ids = [
  "Roger's Website/Bathrooms/havys7edv1olxak0ti8m",
  "Roger's Website/Bathrooms/aqsftq7ih34fbteu91h0",
  "Roger's Website/Bathrooms/tqdfhy7v6dsgqsghzzcx",
  "Roger's Website/Bathrooms/ct5kmxncjqljtruxag3k",
  "Roger's Website/Bathrooms/pjjmmtfdf6oi3w4znrej",
  "Roger's Website/Bathrooms/gpsb0atvvu5qy9byijvp",
  "Roger's Website/Bathrooms/sbkooxjhpdldbhuxnd1o",
  "Roger's Website/Bathrooms/tduqypqwycwh5dfq7muz",
  "Roger's Website/Bathrooms/sp01gp9pmmg2cylh7bqt",
  "Roger's Website/Bathrooms/hi8syhomxezwemgaee3s",
];
const interior_public_ids = [
  "Roger's Website/Interior Remodels/q1wivqbqbhk6mr7zfzec",
  "Roger's Website/Interior Remodels/e5o24jpctqkzgvvf5dmp",
  "Roger's Website/Interior Remodels/e2plau8rr2x78otujprb",
  "Roger's Website/Interior Remodels/m4msgxcprug98ohahkbu",
  "Roger's Website/Interior Remodels/uauirn8gpwptxzfu5d9m",
  "Roger's Website/Interior Remodels/xeitllwxosofpfmpa9qn",
  "Roger's Website/Interior Remodels/lpnsi2kmze7qc9txed7o",
  "Roger's Website/Interior Remodels/i0n8aogv2hlewwxlucpw",
  "Roger's Website/Interior Remodels/tyugfzi5wdjuxk38capo",
  "Roger's Website/Interior Remodels/znyx1do5nxt2sfnnkrnj",
];
const deck_public_ids = [
  "Roger's Website/Decks/pmo7maecfh5pxiajpsxi",
  "Roger's Website/Decks/cmdc5qpullde7vrjzjik",
  "Roger's Website/Decks/tgy5ecnjjjpl6auxioep",
  "Roger's Website/Decks/mtt8ho803f4jcle4h81q",
  "Roger's Website/Decks/wgez8qttvmftkaufnzlq",
  "Roger's Website/Decks/jqyueuc6fsnfzt3gwdhc",
  "Roger's Website/Decks/wpqlucihpdgqywb0l1ab",
  "Roger's Website/Decks/rhvf39lrntardxhvg020",
];
const outdoor_public_ids = [
  "Roger's Website/Outdoor Living Spaces/z3u5hztixpmixnzlfrsr",
  "Roger's Website/Outdoor Living Spaces/h5svpageq5sbv5ubc6ab",
  "Roger's Website/Outdoor Living Spaces/uo2hqawqa6n7ag85cda6",
  "Roger's Website/Outdoor Living Spaces/he9nbzqlgtwci53vlkqy",
];

const ServicesPage = () => {
  return (
    <div>
      <Services />
    </div>
  );
};

export default ServicesPage;

// export const metadata: Metadata = {
//   title: "Tri-B Contracting - Services",
//   description: "Tri-B Contracting Services",
// };
