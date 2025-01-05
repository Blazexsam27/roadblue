import { IoClose } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import Notification from "../Widgets/Notification";

import {
  EmailShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  EmailIcon,
  InstapaperIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
} from "react-share";
import { useState } from "react";

function ShareModal({ click, link }: { click: Function; link: string }) {
  const [showNotification, setShowNotification] = useState(false);

  const copyHandler = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2500);

    navigator.clipboard.writeText(link);
  };

  return (
    <div className="px-4 py-4 flex flex-col item-center relative z-50 bg-slate-100  shadow-md rounded-md w-5/12 h-3/6 max-lg:h-max max-lg:w-11/12">
      {/* Notification component */}
      {showNotification && <Notification />}

      <IoClose
        className="absolute right-4 top-4 cursor-pointer"
        fontSize={27}
        onClick={() => click(false)}
      />
      <div className="text-center mt-10 text-2xl text-slate-600 font-bold">
        Share your learning roadmap
      </div>
      <div className="text-center text-slate-400 text-lg mt-3">
        Share your learning roadmap with your friends and collegues so they can
        start learning new skills and excel in their career
      </div>

      <div className="flex justify-center  gap-4 mt-6">
        <EmailShareButton url="#">
          <EmailIcon size={32} round />
        </EmailShareButton>

        <TwitterShareButton url="#">
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton url="#">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <InstapaperShareButton url="#">
          <InstapaperIcon size={32} round />
        </InstapaperShareButton>

        <RedditShareButton url="#">
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>

      <div className="flex items-center justify-center w-full gap-2 mt-8">
        <input
          value={link}
          disabled
          className="flex w-10/12 h-14 overflow-x-auto items-center p-4 bg-slate-200 rounded-md"
        />

        <FaCopy
          className="cursor-pointer text-slate-500 w-1/12 hover:text-purple-500"
          fontSize={22}
          onClick={copyHandler}
        />
      </div>
    </div>
  );
}

export default ShareModal;
