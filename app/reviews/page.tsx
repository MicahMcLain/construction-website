import React from "react";
import BBBReview from "../components/BBBReview";
import YelpReview from "../components/YelpReview";

const Review = ({
  name,
  date,
  content,
  from,
}: {
  name: string;
  date: string;
  content: string;
  from: string;
}) => {
  return (
    <div className="bg-white p-6 shadow-lg mb-4">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-500 mb-2">{date}</p>
      <p>{content}</p>
      <p className="mt-1 font-bold">{from}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 ml-2">Customer Reviews</h2>
        <div>
          <Review
            name="Kbtmcneil M."
            date="February 23, 2024"
            content="Roger did a complete remodel of our master bath in early 2023. He is the best contractor I have worked with (out of about 20)! Excellent quality, very conscientious, polite, super hard worker, leaves the site cleaned up every day, and responsive to questions or concerns. I was so happy with his work I hired him to do some plumbing and installation of a utility tub at my daughter's house. I would highly recommend him!"
            from="Review from Yelp"
          />
        </div>
      </div>
    </section>
  );
};

const ReviewLinks = () => {
  return (
    <div className="flex justify-center">
      <BBBReview />
      <YelpReview />
    </div>
  );
};

const ReviewsPage = () => {
  return (
    <div>
      <Reviews />
      <ReviewLinks />
    </div>
  );
};

export default ReviewsPage;
