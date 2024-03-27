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
  "Roger's Website/Basements/IMG_3106_qzez2w",
  "Roger's Website/Basements/IMG_3105_euzvzc",
  "Roger's Website/Basements/IMG_3103_ljq4rn",
  "Roger's Website/Basements/IMG_3102_rl10ko",
  "Roger's Website/Basements/IMG_3100_hyn3pi",
  "Roger's Website/Basements/IMG_3099_wcdykr",
  "Roger's Website/Basements/IMG_0742_vqre0w",
  "Roger's Website/Basements/IMG_0741_fovjpk",
  "Roger's Website/Basements/IMG_0738_bdegn7",
  "Roger's Website/Basements/IMG_0733_zxga6t",
  "Roger's Website/Basements/IMG_0730_axocpj",
  "Roger's Website/Basements/IMG_0729_zfvlrd",
  "Roger's Website/Basements/IMG_0724_inggnl",
  "Roger's Website/Basements/IMG_3165_khwnrs",
  "Roger's Website/Basements/IMG_3164_bcftno",
  "Roger's Website/Basements/IMG_3163_mnpwim",
  "Roger's Website/Basements/IMG_3162_nibbun",
  "Roger's Website/Basements/IMG_3160_nflfkp",
  "Roger's Website/Basements/IMG_0635_rtjan0",
  "Roger's Website/Basements/IMG_0634_glxcqp",
  "Roger's Website/Basements/IMG_0640_lmwcht",
  "Roger's Website/Basements/IMG_0639_zg9j2i",
  "Roger's Website/Basements/IMG_0638_lofv7c",
  "Roger's Website/Basements/IMG_0637_wcaxpv",
  "Roger's Website/Basements/IMG_0636_frsipl",
  "Roger's Website/Basements/IMG_0633_osg3yl",
  "Roger's Website/Basements/IMG_0632_w50vqf",
  "Roger's Website/Basements/IMG_0631_rwmxil",
  "Roger's Website/Basements/IMG_0629_dedm6w",
  "Roger's Website/Basements/IMG_0628_ldlfou",
  "Roger's Website/Basements/IMG_0627_pxo2h9",
  "Roger's Website/Basements/IMG_0626_mpwghu",
  "Roger's Website/Basements/IMG_0625_hly81m",
  "Roger's Website/Basements/IMG_0624_ehupoy",
  "Roger's Website/Basements/IMG_0623_dejirt",
  "Roger's Website/Basements/IMG_1642_ut1wmf",
  "Roger's Website/Basements/IMG_1638_m4wnqb",
  "Roger's Website/Basements/IMG_1637_pwc6mm",
  "Roger's Website/Basements/68514382776__951DB43A-81D2-4237-A663-777858D999D6_ownw07",
  "Roger's Website/Basements/68514384602__41C3690F-3F1B-41E7-818A-46206A1A79E7_ssfrcm",
  "Roger's Website/Basements/68514385499__F9BFBB5A-0819-4C88-A73E-A5CBBCB6D9B2_wbqs4e",
  "Roger's Website/Basements/IMG_1875_sdro1b",
  "Roger's Website/Basements/IMG_2174_lp69yl",
  "Roger's Website/Basements/IMG_2175_n7szbj",
];
const kitchen_public_ids = [
  "Roger's Website/Kitchens/vmatxsls06_1347637650488-2-Resized_20221113_124043_nwsijc",
  "Roger's Website/Kitchens/vmatxsls06_1347637650488-1-Resized_20221113_124020_t3imxf",
  "Roger's Website/Kitchens/IMG_2258_si66i9",
  "Roger's Website/Kitchens/IMG_2259_rge87r",
  "Roger's Website/Kitchens/IMG_2268_mqpgsb",
  "Roger's Website/Kitchens/IMG_2279_wb2aqj",
  "Roger's Website/Kitchens/IMG_2280_xw910u",
  "Roger's Website/Kitchens/IMG_2281_dct2m4",
  "Roger's Website/Kitchens/IMG_2783_t4l2e4",
  "Roger's Website/Kitchens/IMG_2784_bx90im",
  "Roger's Website/Kitchens/IMG_2785_xfkxkb",
  "Roger's Website/Kitchens/IMG_2786_gfoqst",
  "Roger's Website/Kitchens/IMG_2787_ixyujw",
];
const bathroom_public_ids = [
  "Roger's Website/Bathrooms/IMG_1119_cww8hf",
  "Roger's Website/Bathrooms/IMG_1118_jqiqye",
  "Roger's Website/Bathrooms/IMG_1117_j1c58b",
  "Roger's Website/Bathrooms/IMG_1211_qpma3s",
  "Roger's Website/Bathrooms/IMG_1271_cdryea",
  "Roger's Website/Bathrooms/IMG_1272_ljj92f",
  "Roger's Website/Bathrooms/IMG_1274_wspx4e",
  "Roger's Website/Bathrooms/IMG_2594_zrwja0",
  "Roger's Website/Bathrooms/IMG_2595_bu3m27",
  "Roger's Website/Bathrooms/IMG_2596_f9u9cp",
  "Roger's Website/Bathrooms/IMG_2597_b1y7na",
  "Roger's Website/Bathrooms/IMG_2757_ytxzce",
  "Roger's Website/Bathrooms/IMG_2758_taz7vw",
  "Roger's Website/Bathrooms/IMG_2759_ytlwhy",
  "Roger's Website/Bathrooms/IMG_2760_s2udi9",
  "Roger's Website/Bathrooms/IMG_2761_iere4h",
  "Roger's Website/Bathrooms/IMG_1373_v5yulp",
  "Roger's Website/Bathrooms/IMG_1374_t05ay9",
  "Roger's Website/Bathrooms/IMG_1375_gekssp",
  "Roger's Website/Bathrooms/IMG_2096_pgzrut",
  "Roger's Website/Bathrooms/IMG_2097_lgdjt4",
  "Roger's Website/Bathrooms/IMG_2098_rmiuh2",
  "Roger's Website/Bathrooms/IMG_2099_tpujyd",
  "Roger's Website/Bathrooms/IMG_2101_nxeeqp",
];
const interior_public_ids = [];
const deck_public_ids = [];
const outdoor_public_ids = [];

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
