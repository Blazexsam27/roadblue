import { IoClose } from "react-icons/io5";
import { FaFileExport } from "react-icons/fa6";
import Badge from "../Widgets/Badge";
import { useSelector } from "react-redux";
import stringUtils from "../../utils/stringUtils";

function ExportModal({ click }: { click: Function }) {
  const roadMap = useSelector((state: any) => state.groq.roadMap);

  const handleDownloadFile = (url: string) => {
    try {
      const a = document.createElement("a");
      a.href = url;
      a.download = "roadmap.json";
      a.click();

      URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error("Error while downloading the file", error);
    }
  };

  const handleExportClick = (type: string) => {
    switch (type) {
      case "JSON":
        let JsonURL = stringUtils.exportJSON(roadMap);
        handleDownloadFile(JsonURL.url);
        break;

      case "XML":
        let XmlURL = stringUtils.exportToXml(roadMap);
        handleDownloadFile(XmlURL.url);
        break;

      default:
        break;
    }
  };

  return (
    <div className="px-4 py-4 flex flex-col item-center relative z-50 bg-slate-100  shadow-md rounded-md w-5/12 h-3/6 max-lg:h-max max-lg:w-11/12">
      <IoClose
        className="absolute right-4 top-4 cursor-pointer"
        fontSize={27}
        onClick={() => click(false)}
      />

      <div className="text-center mt-10 text-2xl text-slate-600 font-bold">
        Export Roadmap
      </div>
      <div className="text-center text-slate-400 text-lg mt-3">
        Export your roadmap in raw data formats
      </div>

      <div className="mt-10 flex justify-center gap-6">
        <Badge
          click={() => handleExportClick("JSON")}
          text="JSON"
          icon={<FaFileExport className="w-7 h-7 text-gray-500  mb-3" />}
        />

        <Badge
          click={() => handleExportClick("XML")}
          text="XML"
          icon={<FaFileExport className="w-7 h-7 text-gray-500  mb-3" />}
        />
      </div>
    </div>
  );
}

export default ExportModal;
