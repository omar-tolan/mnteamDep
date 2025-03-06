import React, { useState } from "react";
import Navbar from "./Navbar";
import HomeCard from "./Cards/HomeCard";
import Trainer from "./Trainer";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Plans from "./Plans";
import Steps from "./Steps";
import Footer from "./Footer";
import { Element, Link } from "react-scroll";
import SubscribtionModal from "./Modals/SubscriptionModal.jsx";

function Homepage() {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isVidShown, setIsVidShown] = useState(false);
  const handleSub = () => {
    setIsSubscribing(!isSubscribing);
  };
  const handleVid = () => {
    setIsVidShown(!isVidShown);
    document.body.style.overflow = isVidShown ? "auto" : "hidden";
  };
  return (
    <div className={"flex flex-col justify-center items-center"}>
      <Navbar />
      <div className="w-full min-h-screen bg-custom-image flex flex-col justify-end items-center md:max-w-[98%] md:my-2 md:mx-2 md:rounded-4xl md:items-end">
        <HomeCard />
      </div>
      <Trainer />
      <Testimonials handleVid={handleVid} isVidShown={isVidShown} />
      <Element name="services">
        <Services />
      </Element>
      <Element name="plans">
        {isSubscribing && <SubscribtionModal handleSub={handleSub} />}
        <Plans handleSub={handleSub} />
      </Element>
      <Element name="cv">
      </Element>
      <Footer />
    </div>
  );
}

export default Homepage;
