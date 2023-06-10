
import React from "react";

import {
  Drawer,
} from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
// ICONS
import DrawerContent from "./drawer_comp";

const drawerWidth = 240;

export default function ResponsiveDrawer({
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
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    return (
      <Box sx={{ display: "flex" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ margin: "24px 20px 0px ", display: { sm: "none" } }}
        >
          <MenuIcon className="dark:text-white" />
        </IconButton>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
              className: "scrollbar-thin border-r border-[#717171]  ",
            }}
            className="bg-[#ffffff] dark:bg-black "
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "40%",
                overflowX: "hidden",
              },
            }}
          >
            <DrawerContent
              folders={folders}
              handleFileChangeFunction={handleFileChangeFunction}
              createFolder={createFolder}
              handleFolderChangeFunction={handleFolderChangeFunction}
              allFiles={allFiles}
            />
          </Drawer>
          <Drawer
            variant="permanent"
            PaperProps={{
              className:
                "scrollbar-thin border-r pl-[20px] sm:pl-[8px] pr-[10px] sm:pr-[5px] border-[#717171] w-[240px] sm:w-[200px]",
            }}
            className="scrollbar-thin border-r pl-[20px] sm:pl-[15px] pr-[10px] sm:pr-[5px] border-[#717171] w-[240px] sm:w-[200px]"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                overflowX: "hidden",
                backgroundColor: "transparent",
              },
            }}
            open
          >
            <DrawerContent
              folders={folders}
              handleFileChangeFunction={handleFileChangeFunction}
              createFolder={createFolder}
              handleFolderChangeFunction={handleFolderChangeFunction}
              allFiles={allFiles}
            />
          </Drawer>
        </Box>
      </Box>
    );
  }