import React from 'react'

export default function Login() {
  return (
    <div
      className="
        flex
        gap-4
        md:gap-3
        sm:gap-2
        flex-col
        bg-white
        dark:bg-[#3C4048]
        dark:border-[#3C4048]
        py-[2%]
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
        md:pt-2
        md:pb-6
        sm:pt-0.5
        sm:pb-3
        "
    >
      <h3
        className="font-extrabold 
        md:text-3xl
        sm:text-2xl
        text-4xl text-center text-[rgba(0,0,0,0.75) 
      "
      >
        Verify Login
      </h3>
      <hr />

      <h6 className="pt-8 md:pt-6 sm:pt-2 px-5 md:px-3 sm:px-2 font-medium pb-10 md:pb-6 sm:pb-2 text-[#262626] dark:text-[#ffffff] text-base md:text-sm sm:text-xs text-center">
        A login link was sent to you. You can check your email and click on the
        link or button.
        <br />
        Check spam or trash as some providers may have placed it there.
      </h6>
    </div>
  )
}
