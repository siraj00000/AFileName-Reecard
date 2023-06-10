import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { TextField } from "@mui/material";

export default function Signup({
  heading,
  handleChange,
  handleSubmit,
}: {
  heading: string;
  handleSubmit: any;
  handleChange: any;
}) {
  const [email, setEmail] = useState("");
  return (
    <>
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
        md:pt-2
        md:pb-6
        sm:pt-0.5
        sm:pb-3
        md:right-[15%]
        sm:right-[10%]
        "
      >
        <h3
          className="font-extrabold 
          text-4xl
          md:text-3xl
          sm:text-2xl
          mb-2
          text-center 
          text-[rgba(0,0,0,0.75) 
          "
        >
          {heading}
        </h3>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(email);
          }}
          className="
          dark:text-white
          w-full
          px-12
          md:px-8
          sm:px-6
          mt-12
          md:mt-8
          sm:mt-4
          "
        >
          <TextField
            id="filled-textarea"
            label="Email"
            placeholder="email@example.com"
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
              fontSize: "12px",
              "@media (min-width: 768px, max-width: 1023px)": {
                marginBottom: "2rem",
              },
              "@media (max-width: 767px)": {
                marginBottom: "1rem",
              },
            }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button
            className="
            block 
            py-[15px]
            md:py-[8px] 
            sm:py-[4px] 
            w-[65%]
            sm:w-[55%] 
            mx-auto 
            font-base 
            text-center
            bg-[#0066FF] 
            rounded-[5px]
           text-white"
            type={"submit"}
          >
            Continue
            <EastIcon
              sx={{ color: "#ffffff !important" }}
              className="text-base ml-3"
            />
          </button>
        </form>
        <h6
          className="
          pt-10
          md:pt-6
          sm:pt-4
          font-light ß
          text-[13px] 
          text-center"
        >
          By signing in you agree to our legal policies.
        </h6>
      </div>
    </>
  );
}
