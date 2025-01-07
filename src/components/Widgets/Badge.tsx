import { ReactNode } from "react";

function Badge({
  click,
  text,
  icon,
}: {
  click?: Function;
  text: string;
  icon: ReactNode;
}) {
  return (
    <div
      onClick={() => {
        if (click) return click();
      }}
      className="cursor-pointer flex flex-col items-center w-28 max-w-sm px-1 py-4 bg-white border border-gray-200 hover:border-purple-500 rounded-lg shadow "
    >
      {icon}

      <h5 className="text-center mb-1 text-lg font-semibold tracking-tight text-gray-900 ">
        {text}
      </h5>
    </div>
  );
}

export default Badge;
