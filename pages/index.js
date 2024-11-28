import Dishes from "@/components/dishes/Dishes";
import ExpertChef from "@/components/expert-chef/ExpertChef";
import RestaurantHeader from "@/components/restaurant-header-section/RestaurantHeader";
import Reviews from "@/components/reviews/Reviews";
import Footer from "@/components/footer/Footer";
import React from "react";
import PromoBanner from "@/components/promo-banner/PromoBanner";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex-1">
        <RestaurantHeader />
      </div>

      <div className=" flex-1">
        <Dishes />
      </div>

      <div className=" flex-1">
        <ExpertChef />
      </div>

      <div className=" relative flex flex-col">
        <Reviews />

        <PromoBanner />
      </div>

      <div className="flex-1">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
