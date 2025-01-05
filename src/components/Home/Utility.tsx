import { useState } from "react";
import { IoMdShareAlt } from "react-icons/io";
import { FaFileExport } from "react-icons/fa6";
import ModalWrapper from "../Widgets/ModalWrapper";
import ExportModal from "../Modals/ExportModal";
import ShareModal from "../Modals/ShareModal";
import stringUtils from "../../utils/stringUtils";
import { useSelector } from "react-redux";

function Utility() {
  const roadMap = useSelector((state: any) => state.groq.roadMap);

  const [showShareModal, setShowShareModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const [shareableLink, setShareableLink] = useState("");

  const handleShareClick = () => {
    setShowShareModal(true);

    const encodedData = stringUtils.encodeToLzString(roadMap);
    const shareLink = `${window.location.origin}/?data=${encodedData}`;

    setShareableLink(shareLink);
  };

  return (
    <section className="flex justify-center items-center gap-12 min-h-24 p-4 w-full">
      {showShareModal ? (
        <ModalWrapper>
          <ShareModal
            click={(val: boolean) => setShowShareModal(val)}
            link={shareableLink}
          />
        </ModalWrapper>
      ) : null}

      <div className="relative group">
        <IoMdShareAlt
          onClick={handleShareClick}
          fontSize={32}
          className="cursor-pointer text-slate-500 hover:text-purple-500 duration-300 transition-all"
        />
        <div className="absolute -bottom-7 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Share
        </div>
      </div>

      <div className="relative group">
        <FaFileExport
          fontSize={32}
          className="cursor-pointer text-slate-500 hover:text-purple-500 duration-300 transition-all"
        />

        <div className="absolute -bottom-7 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Export
        </div>
      </div>
    </section>
  );
}

export default Utility;
