import { ReactNode } from "react";

function ModalWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center z-40 fixed w-screen h-screen top-0 left-0 bg-gradient-to-b from-violet-600/30 via-violet-300/30 to-indigo-500/30 ">
      {children}
    </div>
  );
}

export default ModalWrapper;
