import React, { useState } from "react";
import ListItemComp from "@/components/list_item";
import { useRouter } from "next/router";
// icons
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import SourceIcon from "@mui/icons-material/Source";

export default function NestedListComp(props: { folders?: Array<Object> }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  interface FolderObject {
    name: string;
    _id: string;
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        style={{
          padding: 0,
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
        className="p-0 my-4"
        onClick={handleClick}
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
          Folders
        </p>
        {open ? (
          <ExpandLess className="text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]" />
        ) : (
          <ExpandMore className="text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]" />
        )}
      </ListItemButton>
      <Collapse className="pl-[5px]" in={open} timeout="auto" unmountOnExit>
        {props.folders?.map((v, i) => {
          const folderObj = v as FolderObject;
          return (
            <ListItemComp
              onClick={() => {
                router.push({
                  pathname: "/folder",
                  query: { id: folderObj._id, name: folderObj.name },
                });
                setTimeout(() => {
                  router.reload();
                }, 200);
              }}
              key={i}
              text={folderObj.name}
              input={true}
              Icon={
                <FolderCopyIcon
                  style={{ fontSize: "16px" }}
                  className="text-base text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]"
                />
              }
              handleFileChangeFunction={null}
            />
          );
        })}
      </Collapse>
    </>
  );
}
