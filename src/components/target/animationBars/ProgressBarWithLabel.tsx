import { ReactNode } from "react";

type ProgressBarWithLabelProps = {
  children: ReactNode;
  value: number;
};

const ProgressBarWithLabel = ({
  children,
  value,
}: ProgressBarWithLabelProps) => {
  const normalizedValue = Math.min(value, 100);
  const isLeftSideLabel = normalizedValue > 30;

  return (
    <div className="w-full flex-col">
      <p className="text-center">{children}</p>
      <div className="h-8 w-full bg-[#e0e0de] rounded-md relative">
        <p
          className={`absolute top-1/2 transform -translate-y-1/2 flex  z-10 ${
            isLeftSideLabel ? "left-2 text-white" : "right-2 text-black"
          }`}
        >{`${normalizedValue}%`}</p>
        <div
          className={` z-10 w-full h-full bg-main rounded-md flex justify-center items-center text-xs font-semibold origin-left`}
          style={{ width: `${normalizedValue}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBarWithLabel;
