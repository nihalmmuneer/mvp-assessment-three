import React from "react";

const Footer = () => {
  return (
    <div className="min-h-fit bg-white pb-10">
      <div className="md:max-w-[98%] lg:max-w-[60%] mx-auto pt-48 px-4">
        <div className="flex flex-col md:flex-row gap-16 pb-6">
          <div className="flex flex-col gap-5 text-center md:text-left items-center md:items-start">
            <img
              src="/restaurant-log.png"
              alt="restaurant-icon"
              className="w-32 mx-auto md:mx-0"
            />
            <p className="text-xs text-para font-davidLibre leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Learn more.
            </p>
            <h2 className="text-black text-xs font-davidLibre font-semibold">
              OPENING HOURS
            </h2>
            <div className="flex flex-col md:flex-row gap-4 whitespace-nowrap">
              <div className="flex flex-col">
                <p className="text-xs text-para font-davidLibre">
                  Monday - Friday
                </p>
                <p className="text-xs text-para font-davidLibre">
                  8:00 am to 9:00 pm
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-para font-davidLibre">Saturday</p>
                <p className="text-xs text-para font-davidLibre">
                  8:00 am to 9:00 pm
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-para font-davidLibre">Sunday</p>
                <p className="text-xs text-para font-davidLibre">CLOSED</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-20 gap-10 items-center md:items-start text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h2 className="text-black text-[10px] font-davidLibre font-semibold">
                NAVIGATION
              </h2>
              <ul className="text-xs text-para font-davidLibre flex flex-col gap-2 whitespace-nowrap">
                <li>Menu</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Main dishes</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-black text-[10px] font-davidLibre font-semibold">
                DISHES
              </h1>
              <ul className="text-xs text-para font-davidLibre flex flex-col gap-2 whitespace-nowrap">
                <li>Fish & Viggies</li>
                <li>Tofu Chili</li>
                <li>Egg and Cucumber</li>
                <li>Lumpia w/Sauce</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center md:items-start">
            <h2 className="text-black text-[10px] font-davidLibre font-semibold">
              FOLLOW US
            </h2>
            <div className="flex gap-3 lg:gap-5 justify-center md:justify-start">
              <div className="border rounded-full p-2 lg:p-3 bg-white border-black flex items-center justify-center h-[45px] w-[45px]">
                <img
                  src="/facebook-icons.png"
                  alt="fb-icon"
                  className="h-[20px] w-[20px] object-contain"
                />
              </div>
              <div className="border rounded-full p-2 lg:p-3 bg-white border-black flex items-center justify-center h-[45px] w-[45px]">
                <img
                  src="/instagram-icon.png"
                  alt="insta-icon"
                  className="h-[20px] w-[20px] object-contain"
                />
              </div>
              <div className="border rounded-full p-2 lg:p-3 bg-white border-black flex items-center justify-center h-[45px] w-[45px]">
                <img
                  src="/twitter-icons.png"
                  alt="twitter-icon"
                  className="h-[20px] w-[20px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
            <p className="text-xs text-para font-davidLibre text-center md:text-left">
              © 2022 Restaurants. All Rights Reserved. Designed by Isaac
            </p>
            <div className="flex gap-3">
              <p className="text-xs text-para font-davidLibre">
                Terms of Service
              </p>
              <p className="text-xs text-para font-davidLibre">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
