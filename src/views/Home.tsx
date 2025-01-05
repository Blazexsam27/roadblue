import SearchBar from "../components/Home/SearchBar";
// import AdvancedForm from "../components/Home/AdvanceForm";
import RoadMapCanvas from "../components/Home/RoadMapCanvas";
// import { FaArrowRightLong } from "react-icons/fa6";
import Utility from "../components/Home/Utility";

function Home() {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const openDrawer = () => setIsDrawerOpen(true);
  // const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="container mx-auto px-2 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-white  py-6">
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
    </div>
  );
}

export default Home;
