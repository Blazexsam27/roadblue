import { useEffect, useState } from "react";

function Notification({
  text = "Copied To Clipboard",
  duration = 2500,
}: {
  text?: string;
  duration?: number;
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [duration]);

  if (!isVisible) return null; // Don't render anything if not visible

  return (
    <div
      id="toast-simple"
      className="fixed z-50 top-4 right-4  flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
      role="alert"
    >
      <svg
        className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
      <div className="ps-4 text-sm font-normal">{text}</div>
    </div>
  );
}

export default Notification;
