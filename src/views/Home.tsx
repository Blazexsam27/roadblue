import SearchBar from "../components/Home/SearchBar";
// import AdvancedForm from "../components/Home/AdvanceForm";
import RoadMapCanvas from "../components/Home/RoadMapCanvas";
// import { FaArrowRightLong } from "react-icons/fa6";
import Utility from "../components/Home/Utility";
import { useState, useEffect } from "react";

import { FaArrowUp } from "react-icons/fa";

function Home() {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const openDrawer = () => setIsDrawerOpen(true);
  // const closeDrawer = () => setIsDrawerOpen(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto px-2 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-white  py-6">
      <div className="flex justify-center items-center text-5xl text-center font-bold my-6">
        <span>
          <img src="/assets/logo.png" alt="" className="w-20 h-20" />
        </span>
        <span>RoadBlue</span>
      </div>

      <div className="text-lg text-center pb-4">
        Generate your own roadmap with our AI powered tool and share with your
        communities.
      </div>

      <SearchBar />

      {/* Hidden For Future Upgrades */}

      {/* <button
        onClick={openDrawer}
        className="w-44 px-1 py-2 my-8 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-300"
      >
        Advanced Options
      </button> */}

      {/* <AdvancedForm isOpen={isDrawerOpen} onClose={closeDrawer} /> */}

      {/* Hidden For Future Upgrades */}

      <Utility />

      <RoadMapCanvas />

      <div>
        {isVisible && (
          <div
            className="fixed bottom-5 right-5 z-50 cursor-pointer p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-800 transition duration-300 ease-in-out"
            onClick={scrollToTop}
          >
            <FaArrowUp size={18} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
