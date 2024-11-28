import { useState } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      rating: "★★★★★",
      name: "Ama Amponah",
      role: "CEO & Founder Inc",
      text: "Lorem ipsum dolor sit amet consectetur. Tortor \n massa nisl quam sit. Vitae congue ultrices neque \npenatibus mi in quisque. Leo in cursus enim \n magnisante. Proin iaculis platea ipsum sagittis ac\neu aliquam quis. Ornare tincidunt tempus semper",
      image: "/review-people.png",
    },
    {
      rating: "★★★★★",
      name: "Kwame Mensah",
      role: "Founder & Director",
      text: "Lorem ipsum dolor sit amet consectetur. Tortor \n massa nisl quam sit. Vitae congue ultrices neque \npenatibus mi in quisque. Leo in cursus enim \n magnisante. Proin iaculis platea ipsum sagittis ac\neu aliquam quis. Ornare tincidunt tempus semper",
      image: "/review-people.png",
    },
    {
      rating: "★★★★★",
      name: "Ama Amponah",
      role: "CEO & Founder Inc",
      text: "Lorem ipsum dolor sit amet consectetur. Tortor \n massa nisl quam sit. Vitae congue ultrices neque \npenatibus mi in quisque. Leo in cursus enim \n magnisante. Proin iaculis platea ipsum sagittis ac\neu aliquam quis. Ornare tincidunt tempus semper",
      image: "/review-people.png",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-fit bg-gray-200 relative pb-80 flex flex-col items-center">
      <div className="w-full pt-10 max-w-3xl">
        <div className="py-6 flex flex-col items-center md:max-w-fit">
          <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-black font-davidLibre">
            Our Happy Customers
          </h1>
          <p className="text-xs 2xl:text-xl xl:text-lg text-para mt-2 font-davidLibre">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl px-4 mt-8 relative z-[100] overflow-hidden">
        <div
          className="flex gap-16 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 5)}%)`, // Adjusted to show part of the next card
            width: `${reviews.length * 100}%`,
          }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-[20%] flex-shrink-0 pb-10 relative pt-10">
              <div className="min-h-[200px] gap-5 pb-10 flex flex-col justify-center items-center z-[100] relative w-full bg-white shadow-lg rounded-tr-3xl rounded-tl-[60px] rounded-bl-xl rounded-br-[60px]">
                <div className="px-4 flex flex-col gap-4 items-center justify-center">
                  <span className="text-yellow-500 self-start pl-14 pt-8 text-sm">
                    {review.rating}
                  </span>
                  <p className="text-xs whitespace-pre-wrap text-para mt-3 font-davidLibre text-center">
                    {review.text}
                  </p>
                  <div className="flex flex-col">
                    <h2 className="text-xs text-black font-semibold">{review.name}</h2>
                    <span className="text-xs text-para font-davidLibre">{review.role}</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/review-people.png"
                  alt="review-people"
                  className="absolute top-0 h-[70px] w-[70px] z-[110] left-[40%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex gap-2 pt-16">
        {reviews.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
      <img
        src="/happy-customer-img.png"
        alt="happy-customer"
        className="absolute bottom-0 left-0 top-10 z-20 h-[500px]"
      />
    </div>
  );
};

export default Reviews;
