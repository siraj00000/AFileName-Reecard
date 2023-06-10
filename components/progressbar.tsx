import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const ProgressBar = ({
  progress,
  filename,
  cancelRequest,
}: {
  progress: any;
  filename: any;
  cancelRequest: any;
}) => {
  return (
    <section
      className="
      flex
      gap-1
      items-center
      "
    >
      <p
        className="
        text-[10px]
        w-[75px]
        dark:text-white
        "
      >
        {filename?.slice(0, 12)}...
      </p>

      <section className="relative flex-1 ">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-[#D3D0D0]">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#1890FF]"
          ></div>
        </div>
      </section>
      <p
        className="
        text-[11px]
        dark:text-white
      "
      >
        {progress}%
      </p>
      <p className="cursor-pointer" onClick={cancelRequest}>
        <CloseIcon
          className="bg-white dark:bg-[#3C4048] dark:text-white"
          style={{
            fontSize: "15px",
          }}
        />
      </p>
    </section>
  );
};

export default ProgressBar;
