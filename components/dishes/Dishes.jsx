import React from "react";

const Dishes = () => {
  return (
    <div className="bg-gray-200 min-h-fit pt-10 pb-28">
      <div className="md:max-w-[98%] lg:max-w-[80%] mx-auto relative">
        <div className="flex items-center justify-center gap-2 ">
          <div>
            <img
              src="/flower-icon.png"
              alt="flower-icon"
              className="h-[150px] opacity-45 2xl:h-[250px] xl:h-[200px]"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="lg:text-5xl 2xl:text-7xl xl:text-6xl md:text-4xl font-davidLibre text-black font-semibold">
              Our Special Dishes
            </h1>
            <p className="text-sm text-para xl:text-lg 2xl:text-2xl font-davidLibre text-center">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt{" "}
            </p>
          </div>
          <div>
            <img
              src="/left-bottom.png"
              alt="leaf-icon"
              className="h-[150px] 2xl:h-[250px] opacity-45 xl:h-[200px]"
            />
          </div>
        </div>
        <div className="">
          <div>
            <div className="border min-h-[350px] relative pt-20">
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
                <div className="relative pt-20 ">
                  <div className="border z-[100] relative border-white min-h-[350px] rounded-tr-xl rounded-tl-3xl rounded-bl-xl rounded-br-3xl bg-white">
                    <div className="">
                      <div className="flex flex-col gap-4 pt-40 justify-center items-center">
                        <h1 className="text-2xl text-black font-davidLibre font-semibold">
                          Lumpia with Suace
                        </h1>
                        <p className="text-gray-600 text-sm text-center">
                          Lorem ipsum dolor sit ,<br /> consectetur adipiscing
                          elit, sed <br /> do eiusmod tempor{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/lumpa-img.png"
                      alt="lumpa-img"
                      className="absolute top-0 z-[110] left-10"
                    />
                  </div>
                  <span className="rounded-full z-[120] bg-black text-white font-davidLibre text-lg font-bold h-[50px] w-[50px] flex items-center justify-center absolute top-14 left-52">
                    $12
                  </span>
                  <img
                    src="/lumpa-bottom.png"
                    alt="lumpa-bottom-img"
                    className=" z-10 absolute right-0 bottom-9"
                  />
                </div>
                <div className="relative pt-20 ">
                  <div className="border border-white bg-transparent min-h-[350px] rounded-tr-xl rounded-tl-3xl rounded-bl-xl rounded-br-3xl bg-white">
                    <div className="">
                      <div className="flex flex-col gap-4 pt-40 justify-center items-center">
                        <h1 className="text-2xl text-black font-davidLibre font-semibold">
                          Fish and Veggie
                        </h1>
                        <p className="text-gray-600 text-sm text-center">
                          Lorem ipsum dolor sit ,<br /> consectetur adipiscing
                          elit, sed <br /> do eiusmod tempor{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/fish-veggie.png"
                      alt="fish-veggie"
                      className="absolute top-0 left-10"
                    />
                  </div>
                  <span className="rounded-full bg-black text-white font-davidLibre text-lg font-bold h-[50px] w-[50px] flex items-center justify-center absolute top-14 left-52">
                    $12
                  </span>
                </div>
                <div className="relative pt-20 ">
                  <div className="border border-white bg-transparent min-h-[350px] rounded-tr-xl rounded-tl-3xl rounded-bl-xl rounded-br-3xl bg-white">
                    <div className="">
                      <div className="flex flex-col gap-4 pt-40 justify-center items-center">
                        <h1 className="text-2xl text-black font-davidLibre font-semibold">
                          Tofu Chili
                        </h1>
                        <p className="text-gray-600 text-sm text-center">
                          Lorem ipsum dolor sit ,<br /> consectetur adipiscing
                          elit, sed <br /> do eiusmod tempor{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/toffu-chilli.png"
                      alt="toffu-chilli"
                      className="absolute top-0 left-10"
                    />
                  </div>
                  <span className="rounded-full bg-black text-white font-davidLibre text-lg font-bold h-[50px] w-[50px] flex items-center justify-center absolute top-14 left-52">
                    $12
                  </span>
                </div>
                <div className="relative pt-20 pb-20 ">
                  <div className="border border-white bg-transparent min-h-[350px] rounded-tr-xl rounded-tl-3xl rounded-bl-xl rounded-br-3xl bg-white">
                    <div className="">
                      <div className="flex flex-col gap-4 pt-40 justify-center items-center">
                        <h1 className="text-2xl text-black font-davidLibre font-semibold">
                          Egg and Cocumber
                        </h1>
                        <p className="text-gray-600 text-sm text-center">
                          Lorem ipsum dolor sit ,<br /> consectetur adipiscing
                          elit, sed <br /> do eiusmod tempor{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/egg-cocumber.png"
                      alt="egg-cocumber"
                      className="absolute top-0 left-10"
                    />
                  </div>
                  <span className="rounded-full bg-black text-white font-davidLibre text-lg font-bold h-[50px] w-[50px] flex items-center justify-center absolute top-14 left-52">
                    $12
                  </span>
                  <img
                    src="/egg-card-one.png"
                    alt="botom-icon-one"
                    className="absolute left-4 bottom-10"
                  />
                  <img
                    src="/egg-card-two.png"
                    alt="bottom-icon-two"
                    className="absolute right-0 bottom-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-h-fit  relative">
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <img src="/leaf-icon.png" alt="leaf-icon" className="h-[100px] 2xl:h-[180px] opacity-70 " />
            </div>
          </div>
          <div className="">
            <div className=" md:flex lg:flex xl:flex 2xl:flex  pt-5 md:pt-0  pb-10 relative">
              <div className="  relative flex-1">
                <div>
                  <img
                    src="/welcome-dish.png"
                    alt="welcome-dish"
                    className="h-[400px]"
                  />
                </div>
                <img
                  src="/dish-leaf-bottomOne.png"
                  alt="dish-icon"
                  className="absolute right-60 bottom-10  h-[100px] left-60  md:left-52 xl:left-56 2xl:left-52"
                />
                <img
                  src="/dish-leaf-bottomTwo.png"
                  alt="dish-icon"
                  className="absolute h-[80px] left-10 bottom-0"
                />
                <img
                  src="/dish-leaf-left.png"
                  alt="dish-icon"
                  className="absolute h-[100px] left-4 bottom-48 "
                />
                <img
                  src="/dish-leaf-top.png"
                  alt="dish-icon"
                  className="absolute h-[80px] right-10 top-20 md:left-68 left-64 xl:left-72 2xl:left-72"
                />
                <img
                  src="/onion-icon-two.png"
                  alt="onion-icon"
                  className="absolute right-2 bottom-20 h-[50px] 2xl:h-[100px] "
                />
              </div>
              <div className=" flex-1 pt-20 relative">
                <div className=" p-2">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-davidLibre font-semibold">
                      Welcome to Our <br /> Restaurant
                    </h1>
                    <p className="text-sm text-para xl:text-lg 2xl:text-2xl font-davidLibre">
                      Lorem ipsum dolor sit amet, consectetur <br />
                      adipiscing elit, sed do eiusmod tempor incididunt <br />{" "}
                      ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        className="bg-black xl:text-lg font-davidLibre 2xl:text-2xl rounded-tl-lg text-white shadow-md text-sm rounded-br-lg py-2 px-4"
                      >
                        Menu
                      </button>
                      <button
                        type="button"
                        className="bg-headerButton xl:text-lg shadow-md 2xl:text-2xl font-davidLibre rounded-tl-lg text-white text-sm rounded-br-lg py-2 px-4"
                      >
                        Book a table
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src="/flower-icon.png"
                  alt="flower-icon"
                  className="h-[150px] 2xl:h-[200px] opacity-40 absolute top-0"
                />
                <img
                  src="/long-leaf.png"
                  alt="long-leaf"
                  className="h-[200px]  2xl:h-[250px] absolute right-0 bottom-5"
                />
                <img
                  src="/onion-icon-one.png"
                  alt="onion-icon"
                  className="absolute bottom-5 h-[50px]  2xl:h-[100px] 2xl:bottom-[-100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
