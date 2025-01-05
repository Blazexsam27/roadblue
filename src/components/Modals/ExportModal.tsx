import { IoClose } from "react-icons/io5";

function ExportModal({ click }: { click: Function }) {
  return (
    <div className="px-4 py-4 flex flex-col item-center relative z-50 bg-slate-100  shadow-md rounded-md w-5/12 h-3/6 max-lg:h-max max-lg:w-11/12">
      <IoClose
        className="absolute right-4 top-4 cursor-pointer"
        fontSize={27}
        onClick={() => click(false)}
      />
    </div>
  );
}

export default ExportModal;
