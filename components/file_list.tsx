import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "@/config/API";
import { Button, Menu, MenuItem } from "@mui/material";
// ICONS
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

export default function FileList({ fileObj }: { fileObj: any }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [time, setTime] = useState("");
  const [storage, setStorage] = useState("");
  const open = Boolean(anchorEl);
  
  useEffect(() => {
    setTime(dateCalc(fileObj?.dateUploaded));
    setStorage(formatBytes(fileObj.usage));
  }, []);
  const dateCalc = (_date: any) => {
    const apiDate = new Date(_date);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - apiDate.getTime();
    const secondsDiff = Math.floor(timeDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    if (secondsDiff < 60) {
      return `${secondsDiff} seconds ago`;
    } else if (minutesDiff < 60) {
      return `${minutesDiff} minutes ago`;
    } else if (hoursDiff < 24) {
      return `${hoursDiff} hours ago`;
    } else {
      return `${daysDiff} days ago`;
    }
  };
  const handleCopyClick = async (_fileId: any) => {
    const authUrl = new URL(`/files/${_fileId}`, window.location.origin);
    navigator.clipboard.writeText(authUrl.href);
    toast.success("download URL copied to clipboard!", {
      position: "top-center",
      autoClose: 2000,
    });
    handleMenuClose();
    return;
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  function formatBytes(bytes: number): string {
    if (bytes < 1024) {
      return bytes + "B";
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(2) + "KB";
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(2) + "MB";
    } else {
      return (bytes / 1073741824).toFixed(2) + "GB";
    }
  }
  const handleDownload = async (_fileId: any) => {
    await API({
      method: "GET",
      url: `files/download?file=${_fileId}`,
      responseType: "blob",
    }).then((response) => {
      const url = URL.createObjectURL(response.data);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "";
      downloadLink.click();
    });
    handleMenuClose();
  };

  return (
    <div
      className="
        flex
        gap-3
        border-b
        border-[#EBEFF2]
        items-center
        text-[#242634]
        dark:text-[#ffffff]
        "
    >
      {fileObj?.contentType?.slice(0, 5) == "image" ? (
        <InsertPhotoOutlinedIcon className="text-xl mt-4 mb-auto" />
      ) : fileObj?.contentType?.slice(0, 5) == "video" ? (
        <VideoCameraBackIcon className="text-xl mt-4 mb-auto" />
      ) : fileObj?.contentType?.slice(0, 11) == "application" ? (
        <InsertDriveFileIcon className="text-xl mt-4 mb-auto" />
      ) : (
        <FolderOutlinedIcon className="text-xl mt-4 mb-auto" />
      )}
      <div className={`my-4 flex-1`}>
        <p className="text-sm sm:text-[12px] font-medium mb-[1px] break-. break-all ">
          {fileObj.title}
        </p>
        <p className="text-xs sm:text-[10px] ">{time}</p>
      </div>
      {/* <p>{fileObj.usage}</p> */}
      <p
        className="
        text-[11px]
        sm-text-[9px]
        font-bold
        border
        h-fit
        py-[3px]
        px-[5px]
        my-auto
        border-[#EBEFF2]
      "
      >
        {storage}
      </p>
      <div className="">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="w-fit min-w-0"
        >
          <MoreVertIcon className="text-lg  my-auto h-fit dark:text-white" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            className:
              "dark:bg-[#252525] sm:text-[12px] md:text-[12px] dark:text-white text-[#545454]  text-base font-medium",
          }}
        >
          <MenuItem
            onClick={() => {
              handleDownload(fileObj.fileId);
            }}
          >
            <DownloadForOfflineIcon className=" text-[#545454] dark:text-[#ffffff] mr-[5px]" />
            Download
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCopyClick(fileObj?.fileId);
            }}
          >
            <ContentCopyRoundedIcon className=" text-[#545454] dark:text-[#ffffff] mr-[5px]" />
            Copy Link
          </MenuItem>
          <MenuItem
            onClick={() => {
              toast.success("file ID copied to clipboard!", {
                position: "top-center",
                autoClose: 2000,
              });
              handleMenuClose();
            }}
          >
            file ID: {fileObj.fileId}
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
FileList.getInitialProps = async (fileObj: any) => {
  return { fileObj: fileObj };
};
