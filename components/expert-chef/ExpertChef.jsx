import React from "react";

const ExpertChef = () => {
  return (
    <div className="min-h-fit bg-white relative pt-10 pb-20">
      <div className="md:max-w-[98%] lg:max-w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-6 md:items-start items-center">
            <h1 className="text-4xl 2xl:text-7xl xl:text-5xl font-davidLibre font-semibold text-center md:text-left">
              Our Expert Chef
            </h1>
            <p className="text-sm 2xl:text-2xl text-para font-davidLibre text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
            <div className="flex flex-wrap gap-10 justify-center md:justify-start">
              {/* List Column 1 */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-2 md:items-start items-center">
                  <img
                    src="/orange-check.png"
                    alt="orange-check"
                    className="h-4 2xl:h-6"
                  />
                  <p className="text-xs 2xl:text-lg text-para font-davidLibre">
                    Lorem ipsum dolor sit amet, <br /> consectetur.
                  </p>
                </div>
                <div className="flex gap-2 md:items-start items-center">
                  <img
                    src="/orange-check.png"
                    alt="orange-check"
                    className="h-4 2xl:h-6"
                  />
                  <p className="text-xs  2xl:text-lg text-para font-davidLibre">
                    Lorem ipsum dolor sit amet, <br /> consectetur.
                  </p>
                </div>
                <div className="flex gap-2 md:items-start items-center">
                  <img
                    src="/orange-check.png"
                    alt="orange-check"
                    className="h-4 2xl:h-6"
                  />
                  <p className="text-xs  2xl:text-lg text-para font-davidLibre">
                    Lorem ipsum dolor sit amet, <br /> consectetur.
                  </p>
                </div>
              </div>
              {/* List Column 2 */}
              <div className="flex flex-col gap-6">
                  <div className="flex gap-2 md:items-start items-center">
                  <img
                    src="/orange-check.png"
                    alt="orange-check"
                    className="h-4 2xl:h-6"
                  />
                  <p className="text-xs  2xl:text-lg text-para font-davidLibre">
                    Lorem ipsum dolor sit amet, <br /> consectetur.
                  </p>
                </div>
                  <div className="flex gap-2 md:items-start items-center">
                  <img
                    src="/orange-check.png"
                    alt="orange-check"
                    className="h-4 2xl:h-6"
                  />
                  <p className="text-xs  2xl:text-lg text-para font-davidLibre">
                    Lorem ipsum dolor sit amet, <br /> consectetur.
                  </p>
                </div>
                  <div className="flex gap-2 md:items-start items-center">
                  <img
                    src="/orange-check.png"
                    alt="orange-check"
                    className="h-4 2xl:h-6"
                  />
                  <p className="text-xs  2xl:text-lg text-para font-davidLibre">
                    Lorem ipsum dolor sit amet, <br /> consectetur.
                  </p>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-4 p-6 justify-center md:justify-start">
              <button
                type="button"
                className="bg-black font-davidLibre rounded-tl-lg text-white shadow-md text-sm rounded-br-lg py-2 px-4"
              >
                Menu
              </button>
              <button
                type="button"
                className="bg-headerButton shadow-md font-davidLibre rounded-tl-lg text-white text-sm rounded-br-lg py-2 px-4"
              >
                Book a table
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/chef.png"
              alt="chef-img"
              className="h-[500px] object-contain mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <img
        src="/chef-banner-left.png"
        alt="chef-banner-icon"
        className="absolute top-[70px] left-0 h-[120px]"
      />
      <img
        src="/egg-card-two.png"
        alt="chef-banner-icon"
        className="absolute h-[160px] top-8 left-20"
      />
    </div>
  );
};

export default ExpertChef;
