import { BsYelp } from "react-icons/bs";

const YelpReview = () => {
  return (
    <a
      href="https://www.yelp.com/writeareview/biz/tr8COAzp9jFgMi1ja_sptw?return_url=%2Fbiz%2Ftr8COAzp9jFgMi1ja_sptw&review_origin=biz-details-war-button"
      target="_blank"
      rel="nofollow"
      className="self-center pb-4 flex items-center text-xl mb-4"
    >
      <BsYelp color="red" size={50} />
      Yelp
    </a>
  );
};

export default YelpReview;
