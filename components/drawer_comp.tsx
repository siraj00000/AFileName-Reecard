import React, { useState } from "react";
import Image from "next/image";
import ListItemComp from "@/components/list_item";
import NestedListComp from "@/components/nested_list_comp";
import { useRouter } from "next/router";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  Modal,
  TextField,
} from "@mui/material";
// ICONS
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DriveFolderUploadSharpIcon from "@mui/icons-material/DriveFolderUploadSharp";
import VideocamIcon from "@mui/icons-material/Videocam";
import MusicVideoRoundedIcon from "@mui/icons-material/MusicVideoRounded";
import SourceIcon from "@mui/icons-material/Source";
import AddIcon from "@mui/icons-material/Add";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function DrawerContent({
  folders,
  allFiles,
  handleFileChangeFunction,
  handleFolderChangeFunction,
  createFolder,
}: {
  folders: any;
  allFiles: any;
  createFolder: any;
  handleFileChangeFunction: any;
  handleFolderChangeFunction: any;
}) {
  const [open, setOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="bg-white dark:bg-[#3C4048] h-full pr-[7px] pl-[14px]">
        <Modal
          open={modalOpen}
          onClose={() => handleClose()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            className="
            flex
            flex-col
            bg-white
            dark:bg-[#3C4048]
            dark:border-[#3C4048]
            pt-4
            pb-8
            rounded-[24px]
            w-[50%]
            md:w-[70%]
            sm:w-[80%]
            border-2
            absolute
            top-[20%]
            right-[25%]
            md:right-[15%]
            sm:right-[10%]
              "
          >
            <h3
              className=" font-extrabold 
              text-4xl
              md:text-3xl
              sm:text-2xl
              mb-2
              text-center 
              text-[rgba(0,0,0,0.75) 
              "
            >
              Create Folder
            </h3>
            <hr />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createFolder();
                handleClose();
              }}
              className="
              w-full
              px-12
              md:px-8
              sm:px-6
              mt-12
              md:mt-10
              sm:mt-8
              "
            >
              <TextField
                id="filled-textarea"
                label="Folder Name"
                placeholder="enter folder name"
                InputProps={{
                  className: "dark:text-white border",
                }}
                InputLabelProps={{
                  className: " dark:text-white",
                }}
                required
                sx={{
                  width: "100%",
                  marginBottom: "3rem",
                  color: "white",
                  "@media (min-width: 768px, max-width: 1023px)": {
                    marginBottom: "2.5rem",
                  },
                  "@media (max-width: 767px)": {
                    marginBottom: "2rem",
                  },
                }}
                onChange={handleFolderChangeFunction}
              />
              <button
                className="
               block 
               py-[15px]
               md:py-[10px] 
               sm:py-[10px] 
               w-[65%] 
               mx-auto 
               font-base 
               text-center
               bg-[#0066FF] 
               rounded-[5px]
             text-white"
                type={"submit"}
              >
                Create Folder
              </button>
            </form>
          </div>
        </Modal>
        <div className="min-h-[60vh] sm:min-h-[68vh]  overflow-y-scroll scrollbar-thin">
          <div
            className="
            flex  
            items-center 
            justify-center 
            py-8 
            gap-1  
            "
          >
            <Image
              src={require("../images/logo.svg")}
              alt="logo"
              className="
              w-4
              "
            />
            <h1
              className="
                text-2xl
                text-[rgba(0,0,0,0.75)]
                dark:text-[rgba(255,255,255,0.75)] 
                font-extrabold"
            >
              AFILENAME
            </h1>
          </div>
          <ListItemButton className="p-0 my-4" onClick={handleClick}>
            <p
              className="
                  mr-[auto]
                  flex
                  items-center
                  justify-center
                  content-center
                  text-center
                  bg-[#DEDEDE]
                  rounded-[5px]
                  gap-[6px]
                  text-black
                  sm:text-sm
                  px-3
                  sm:px-2
                  py-[2px]
                  sm:py-0
                  "
            >
              <AddIcon
                sx={{
                  fontSize: "16px",
                  coloe: "rgba(0,0,0,0.85)",
                }}
              />
              New
            </p>
            {open ? (
              <ExpandLess className="text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]" />
            ) : (
              <ExpandMore className="text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]" />
            )}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>

            <div
              className="
                  flex
                  items-center
                  text-sm
                  text-[rgba(0,0,0,0.85)] 
                  dark:text-[rgba(255,255,255,0.75)]
                  gap-[10px]
                  pl-[5px]
                  cursor-pointer"
              onClick={() => {
                handleOpen();
              }}
            >
               <CreateNewFolderIcon
          style={{ fontSize: "16px" }}
          className="text-base text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]"
        />
              <p
                className="sm:text-xs"
                style={{
                  margin: "5px 0",
                }}
              >
                New Folder
              </p>
            </div>
            <hr />
            <ListItemComp
              text={"Upload a File"}
              Icon={<AttachFileIcon
                style={{ fontSize: "16px" }}
                className="text-base text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]"
              />}
              handleFileChangeFunction={handleFileChangeFunction}
            />
            <ListItemComp
              text={"Upload a Folder"}
              Icon={<DriveFolderUploadSharpIcon
                style={{ fontSize: "16px" }}
                className="text-base text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]"
              />}
              handleFileChangeFunction={handleFileChangeFunction}
              folder={true}
            />
            <hr />
            <ListItemComp
              text={"Upload a Video"}
              Icon={<VideocamIcon
                style={{ fontSize: "16px" }}
                className="text-base text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]"
              />}
              handleFileChangeFunction={handleFileChangeFunction}
              filetype={"video/*"}
            />
            <ListItemComp
              text={"Upload Music"}
              Icon={<MusicVideoRoundedIcon
                style={{ fontSize: "16px" }}
                className="text-base text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]"
              />}
              handleFileChangeFunction={handleFileChangeFunction}
              filetype={"audio/*"}
            />
          </Collapse>
          <NestedListComp folders={folders} />
          <ListItemButton
            style={{
              padding: 0,
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            className="p-0 my-4"
            onClick={() => {
              router.push(
                `/recent?filesArray=${JSON.stringify(allFiles)}`,
                undefined,
                { shallow: true }
              );
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "auto",
                paddingRight: "10px",
              }}
            >
              <SourceIcon
                style={{ fontSize: "16px" }}
                className="text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)] text-base"
              />
            </ListItemIcon>

            <p
              className="
                text-[rgba(0,0,0,0.85)]  dark:text-[rgba(255,255,255,0.85)]
                text-sm
                sm:text-xs
                mr-auto
                "
            >
              Recent
            </p>
          </ListItemButton>
        </div>
        <button
          className="
              text-sm
              sm:text-xs
              text-white
              bg-[#1890FF]
              border
              p-1
              border-[#1890FF]
              mx-auto/
              flex
              w-[90%]
              justify-center
              my-[40px]
              sm:my-[25px]
              mr-[10px]
              sm:mr-[5px]
             "
        >
          Upgrade Plan
        </button>
        <div
          className="
                text-[10px]
                sm:text-[8px]
                text-[#7c8db5b8]
                mx-[30px]/
                pb-4
                "
        >
          <p>
            Legal
            <br />
            Terms of Service - Privacy - DMCA - Creator Terms
          </p>
          <br />
          <br />
          <p>
            <span className="text-[#1890FF]">UI:</span>4.2023.15
          </p>
          <p>
            <span className="text-[#1890FF]">App:</span>4.2023.15
          </p>
          <p>
            <span className="text-[#1890FF]">Language:</span>English (US)
          </p>
        </div>
      </div>
    </>
  );
}

