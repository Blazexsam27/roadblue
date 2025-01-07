// Modal to show resources urls or books
import { IoClose } from "react-icons/io5";
import { FaLink, FaBookOpen } from "react-icons/fa";

const ResourceModal = ({ click, data }: { click: Function; data: any[] }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl w-5/12 h-3/6 max-lg:h-max max-lg:w-11/12 transform transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Study Resources</h2>
        <button
          onClick={() => click()}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <IoClose size={24} />
        </button>
      </div>
      <div className="p-6 max-h-[70vh] overflow-y-auto">
        <ul className="space-y-4">
          {data.map((resource, index) => (
            <li key={index}>
              <a
                href={resource.includes("http") ? resource : "#"}
                target={resource.includes("http") ? "_blank" : "none"}
                rel="noopener noreferrer"
                className="
                overflow-scroll
                    block p-4 bg-gradient-to-r from-purple-100 to-indigo-100
                    rounded-lg shadow-md
                    transform transition-all duration-200 ease-in-out
                    hover:scale-105 hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                  "
              >
                <div className="flex items-center ">
                  {!resource.includes("http") ? (
                    <FaBookOpen
                      className="text-purple-600 mr-3 w-1/12"
                      fontSize={22}
                    />
                  ) : (
                    <FaLink
                      className="text-indigo-600 mr-3 w-1/12"
                      fontSize={22}
                    />
                  )}
                  <span className="w-11/12 text-base sm:text-lg font-medium text-gray-800 break-words">
                    {resource}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResourceModal;
