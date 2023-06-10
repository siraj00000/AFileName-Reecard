import Image from "next/image";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { P1 } from "./helper";
import { Box, Modal } from "@mui/material";
import Signup from "../pages/signup";
import Login from "../pages/login";
import { handleInsertAction } from "@/config/API_actions";
import DarkLightIcon from "./dark_light_icon";


export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  function scrollToSection(e: any, id: string) {
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
  }
  const [modalOpen, setModalOpen] = useState(false);
  const [heading, setHeading] = useState("Signup");
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const [verifyModalOpen, setVerifyModalOpen] = useState(false);
  const handleVerifyModalOpen = () => setVerifyModalOpen(true);
  const handleVerifyModalClose = () => setVerifyModalOpen(false);

  const [email, setEmail] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (email: string) => {
    await handleInsertAction("/account/signin/", {
      email: email,
    }).then(() => {
      handleModalClose();
      handleVerifyModalOpen();
    });
  };
  return (
    <nav
      className="
      flex 
      justify-between 
      items-center 
      px-[2%] 
      pt-4 
      "
    >
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="rounded-s-3xl"
      >
        <Box>
          <Signup
            handleChange={handleChange}
            handleSubmit={() => handleSubmit(email)}
            heading={heading}
          />
        </Box>
      </Modal>

      <Modal
        open={verifyModalOpen}
        onClose={handleVerifyModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="rounded-s-3xl"
      >
        <Box>
          <Login />
        </Box>
      </Modal>
      <div
        className="
        hidden
        md:block
        sm:block
        "
      >
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="w-fit min-w-0"
        >
          <MenuIcon
            className="
           text-black
           dark:text-white
           "
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Upload</MenuItem>
          <MenuItem onClick={handleMenuClose}>Personal</MenuItem>
          <MenuItem onClick={handleMenuClose}>Business</MenuItem>
          <MenuItem onClick={handleMenuClose}>Creators</MenuItem>
          <MenuItem onClick={handleMenuClose}>Docs</MenuItem>
        </Menu>
      </div>

      <div
        className="flex items-center gap-3 md:gap-3 sm:gap-1.5 
        "
      >
        <Image
          src={require("../images/logo.svg")}
          alt="logo"
          className="
          w-9
          md:w-6
          sm:w-4
          "
        />
        <h1
          className="text-4xl md:text-3xl sm:text-xl text-[rgba(0,0,0,0.75)]
          dark:text-[rgba(255,255,255,0.75)]
           font-extrabold"
        >
          AFILENAME
        </h1>
      </div>
      <div
        className="flex flex-1 justify-center gap-12 md:hidden sm:hidden md:gap-8"
      >
        <a
          className="scroll-smooth cursor-pointer"
          onClick={(e) => scrollToSection(e, "upload")}
        >
          <P1 text="Upload" />
        </a>
        <a
          className="scroll-smooth cursor-pointer"
          onClick={(e) => scrollToSection(e, "personal")}
        >
          <P1 text="Personal" />
        </a>
        <a
          className="scroll-smooth cursor-pointer"
          onClick={(e) => scrollToSection(e, "business")}
        >
          <P1 text="Business" />
        </a>
        <a
          className="scroll-smooth cursor-pointer"
          onClick={(e) => scrollToSection(e, "creators")}
        >
          <P1 text="Creators" />
        </a>
        <a className="scroll-smooth cursor-pointer">
          <P1 text="Docs" />
        </a>
      </div>
      <div
        className="
        flex
        gap-4
        sm:gap-1.5
        "
      >
        <button
          className="border 
          py-1.5
          md:p-1
          sm:p-0 
          border-black
          dark:border-white
          w-28 
          sm:w-12 
          md:w-24"
          onClick={() => {
            setHeading("Signup");
            handleModalOpen();
          }}
        >
          <P1 text="Signup" />
        </button>
        <button
          className="border py-1.5
         border-transparent
         bg-black
         dark:bg-[#ffffff] 
         md:p-1.5
         sm:p-0
         text-base 
          font-bold 
         font-inter
          text-white
          dark:text-black
          w-28
          md:w-24
          sm:w-12
          sm:text-xs
          "
          onClick={() => {
            setHeading("Login");
            handleModalOpen();
          }}
        >
          Login
        </button>
        <DarkLightIcon />
      </div>
    </nav>
  );
}
