import React, { useState, useEffect, useRef } from "react";
import { RiLogoutBoxRFill } from "react-icons/ri";

interface AdvancedOptionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdvancedForm: React.FC<AdvancedOptionsProps> = ({ isOpen, onClose }) => {
  const [options, setOptions] = useState({
    keyword: "",
    category: "",
    dateFrom: "",
    dateTo: "",
    location: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.value,
    });
  };

  const resetOptions = () => {
    setOptions({
      keyword: "",
      category: "",
      dateFrom: "",
      dateTo: "",
      location: "",
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      setIsVisible(true);
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      } ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        className={`
          absolute inset-0 bg-black
          ${isOpen ? "opacity-50" : "opacity-0"}
        `}
      />
      <div
        ref={drawerRef}
        className={`
          fixed left-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg
          transform transition-all duration-500 ease-in-out
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <h2 className="text-xl font-semibold">Advanced Options</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
          >
            <RiLogoutBoxRFill size={24} />
          </button>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-64px)]">
          <div>
            <label
              htmlFor="keyword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Keyword
            </label>
            <input
              type="text"
              id="keyword"
              name="keyword"
              value={options.keyword}
              onChange={handleOptionChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors duration-300"
              placeholder="Enter keywords..."
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={options.category}
              onChange={handleOptionChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors duration-300"
              placeholder="Select a category..."
            />
          </div>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div className="w-full">
              <label
                htmlFor="dateFrom"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date From
              </label>
              <input
                type="date"
                id="dateFrom"
                name="dateFrom"
                value={options.dateFrom}
                onChange={handleOptionChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors duration-300"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="dateTo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date To
              </label>
              <input
                type="date"
                id="dateTo"
                name="dateTo"
                value={options.dateTo}
                onChange={handleOptionChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors duration-300"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={options.location}
              onChange={handleOptionChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors duration-300"
              placeholder="Enter location..."
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={resetOptions}
              className="
                px-4 py-2 bg-gray-200 text-gray-700 rounded-md
                hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400
                transition-all duration-300 ease-in-out
              "
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedForm;
