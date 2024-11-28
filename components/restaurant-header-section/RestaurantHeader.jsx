import React from "react";

const RestaurantHeader = () => {
  return (
    <div className="relative bg-white min-h-fit pb-20">
      <div className=" md:max-w-[98%] lg:max-w-[80%] relative mx-auto flex flex-col justify-between">
        <div className="flex flex-col gap-44 md:gap-52">
          <div className="flex items-center justify-between">
            <div>
              <img
                src="/restaurant-log.png"
                alt="restaurant-icon"
                className="w-32"
              />
            </div>
            <div className="pt-4">
              <ul className="md:flex text-xs xl:text-base 2xl:text-lg gap-3 md:text-base hidden font-davidLibre">
                <li>Menu</li>
                <li>Events</li>
                <li>Gallery</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="pt-4">
              <button
                type="button"
                className="bg-headerButton md:text-base whitespace-nowrap xl:text-base 2xl:text-lg font-davidLibre rounded-tl-lg text-white text-sm rounded-br-lg py-2 px-4"
              >
                Book a table
              </button>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-10 md:gap-20  justify-between items-center">
            <div className="flex flex-col gap-8">
              <h1 className="lg:text-5xl 2xl:text-8xl md:text-4xl text-4xl font-semibold font-davidLibre">
                We provide the <br />
                best food for you
              </h1>
              <p className="text-sm 2xl:text-2xl text-para font-davidLibre">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor incididunt <br />
                ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-black font-davidLibre rounded-tl-lg text-white shadow-md 2xl:text-2xl text-sm rounded-br-lg py-2 px-4"
                >
                  Menu
                </button>
                <button
                  type="button"
                  className="bg-headerButton 2xl:text-2xl shadow-md font-davidLibre rounded-tl-lg text-white text-sm rounded-br-lg py-2 px-4"
                >
                  Book a table
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="border rounded-full p-2  bg-white max-w-fit border-black">
                  <img
                    src="/facebook-icons.png"
                    alt="fb-icon"
                    className="h-[13px] 2xl:h-[20px]"
                  />
                </div>
                <div className="border rounded-full bg-white p-2 max-w-fit border-black">
                  <img
                    src="/instagram-icon.png"
                    alt="insta-icon"
                    className="h-[13px] 2xl:h-[20px]"
                  />
                </div>
                <div className="border rounded-full bg-white p-2 max-w-fit border-black">
                  <img
                    src="/twitter-icons.png"
                    alt="twitter-icon"
                    className="h-[13px] 2xl:h-[20px]"
                  />
                </div>
                <div>
                  <img src="/line-icon.png" alt="line-icon" />
                </div>
              </div>
            </div>
            <div className="flex relative">
              <div className="relative justify-center">
                <div className="relative z-[100]">
                  <img
                    src="/restaurant-img.png"
                    alt="restaurant-img"
                    className="lg:h-[550px] xl:h-[600px] 2xl:h-[700px] md:h-[600px] lg:w-[500px] md:w-full relative"
                  />
                </div>
                <div className="">
                  <img
                    src="/restaurant-dish.png"
                    alt="restaurant-dish"
                    className="absolute bottom-4 left-[-100px] z-[120] h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div>
          <img
            src="/circle-one.png"
            alt="circle-one"
            className="absolute top-0 left-[-250px]"
          />
        </div>
        <div>
          <img
            src="/circle-two.png"
            alt="circle-two"
            className="absolute top-[-50px] left-[-250px] transform rotate-12"
          />
        </div>
        <div>
          <img
            src="/circle-three.png"
            alt="circle-three"
            className="absolute top-0 left-[-250px]"
          />
        </div>
      </div>
 
      <div className="absolute z-10 xl:top-56 xl:left-24 lg:top-54 lg:left-24 md:top-44 top-32">
        <img
          src="/food-delicious-icon.png"
          alt="food-delicious"
          className="h-[80px]"
        />
      </div>

      <div className="absolute z-20 2xl:top-44 2xl:right-[100px] xl:top-44 xl:right-[60px] lg:top-44 lg:right-[20px] md:top-44 md:right-[0px] hidden md:block">
        <img src="/flower-icon.png" alt="flower-icon" className="h-[200px]" />
      </div>

      <div className="absolute z-20 2xl:top-52  2xl:right-[600px] xl:top-48 xl:right-[450px] lg:top-48 lg:right-[400px] md:top-48 md:right-[300px] hidden md:block">
        <img src="/leaf-left.png" alt="leaf-icon" className="h-[150px]" />
      </div>

      <div className="absolute 2xl:top-[690px] 2xl:right-[100px] z-20 xl:top-[600px] xl:right-[40px] lg:top-[600px] lg:right-[30px] md:top-[600px] md:right-0 hidden md:block">
        <img src="/left-bottom.png" alt="leaf-icon" className="h-[200px]" />
      </div>
    </div>
  );
};

export default RestaurantHeader;
