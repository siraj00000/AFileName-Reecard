import React, { useRef } from "react";

export default function ListItemComp(props: {
  text?: string;
  Icon?: any;
  handleFileChangeFunction?: any;
  filetype?: string;
  input?: boolean;
  onClick?: any;
  folder?: boolean;
}) {
  const { text, Icon, handleFileChangeFunction, filetype, onClick, folder } =
    props;
  const fileInputRef = useRef<HTMLInputElement>(null);
  var input;
  props.input ? (input = false) : (input = true);
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = handleFileChangeFunction;
  return (
    <>
      <div
        className="flex
           items-center
           text-sm
           text-[rgba(0,0,0,0.85)] 
           dark:text-[rgba(255,255,255,0.75)]
           gap-[10px]
           pl-[5px]
           cursor-pointer"
        onClick={input ? handleClick : onClick}
      >
        {Icon}
        <p
          className="sm:text-xs"
          style={{
            margin: "5px 0",
            wordBreak: "break-all",
          }}
        >
          {text}
        </p>
      </div>
      {input ? (
        <input
          ref={fileInputRef}
          type={"file"}
          accept={filetype}
          style={{ display: "none" }}
          onChange={handleFileChange}
          multiple={folder}
        />
      ) : null}
    </>
  );
}
