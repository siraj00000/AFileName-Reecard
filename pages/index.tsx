import BusinessPlanCard from "@/components/business_plan_card";
import Footer from "@/components/footer";
import { H1 } from "@/components/helper";
import Navbar from "@/components/navbar";
import PlanCard from "@/components/plan_card";

export default function Main() {
  return (
    <div className="font-karla">
      <Navbar />
      <section className="flex flex-col items-center gap-28/ sm:gap-14/ px-[5%] sm:px-[4%]">
        <h1 className=" text-6xl sm:text-3xl md:text-5xl py-[8%] font-bold text-[#242634] dark:text-white text-center">
          Store whatever you want, when you want
        </h1>
        <p className="text-xl leading-10 sm:text-sm text-[#242634] dark:text-white text-center">
          Simple file sharing, storage, at a fair price.
          <br />
          Stop overpaying with gigantic media companies.
          <br />
          Securely store whatever you can dream and create.
        </p>
        <section
          id="upload"
          className="flex flex-col py-[5%] items-center gap-4"
        >
          <H1 text="Upload A File Now" />
          <button className="text-14 sm:text-xs font-extrabold text-center bg-[#0066FF] text-white py-1 px-16 sm:px-7 rounded-full">
            Upload a file
          </button>
        </section>
        <section id="personal" className="">
          <H1 text="Personal" />
          <p
            className="text-2xl leading-[40px] sm:text-base text-[#242634]
           dark:text-[#ffffff] pt-[10%] font-bold text-center"
          >
            Personal Plans
          </p>
          <p
            className="text-base pb-[3%] sm:text-sm text-[#242634]
           dark:text-[#ffffff]  font-bold text-center"
          >
            For personal use only.
          </p>
          <div className="flex flex-wrap sm:flex-col justify-center gap-8">
            <PlanCard
              name="Bundled"
              price="0.00"
              subtext={false}
              plan="The Bundled Plan includes"
              buttonText="Get with a bundle"
              bottomText="Bundle can be purchased with an additional product or separately with one of our authorized resellers."
              services={[
                "5 GB Max File Size",
                "Unlimited Storage",
                "Unlimited Files",
                "Save files in the cloud",
              ]}
            />
            <PlanCard
              name="Premium"
              price="2.99"
              subtext={true}
              plan="The Premium Plan includes"
              buttonText="Start Now"
              bottomText=""
              services={[
                "5 GB Max File Size",
                "Unlimited Storage",
                "Unlimited Files",
                "Save files in the cloud",
              ]}
            />
            <PlanCard
              name="Premium Pro"
              price="6.99"
              subtext={true}
              plan="The Premium Pro Plan includes"
              buttonText="Start Now"
              bottomText=""
              services={[
                "5GB Max Per Each File",
                "Multi Part Files",
                "End to end encryption (on the desktop application)",
                "Unlimited Files",
                "Unlimited Storage",
                "Save files in the cloud",
              ]}
            />
          </div>
        </section>
        <section id="business" className="my-[18%] ">
          <H1 text="Business Pricing" />

          <p className="text-xl md:text-base sm:text-sm pt-[3%] text-center font-semibold">
            Consumption-Based Rate Comparison
            <br />
            Pay as you go
            <br />
            Billing is to your balance
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-[8%]">
            <BusinessPlanCard
              name="AFILENAME"
              image="afilename"
              price="0.99"
              price1="0.30"
              button={true}
              services={[
                { title: "No hidden fees", icon: "tick" },
                { title: "No transfer fees", icon: "tick" },
                { title: "Unlimited Web Downloads", icon: "tick" },
                { title: "Encyption", icon: "tick" },
              ]}
            />
            <BusinessPlanCard
              name="MEGA"
              image="mega"
              price="2.69"
              price1="2.69"
              button={false}
              services={[
                { title: "Encyption", icon: "tick" },
                { title: "Limited API", icon: "stop" },
                { title: "Limited Transfer", icon: "stop" },
                { title: "Limited Users", icon: "stop" },
              ]}
            />
          </div>
        </section>
        <section id="creators" className="text-center ">
          <H1 text="Creators" />
          <p className="text-xl leading-[40px] md:text-base sm:text-sm font-semibold py-8">
            Get <b>100% </b>
            of revenue, excluding third party payment processing fees, directly
            to you.
            <br />
            Only pay 30 cents per TB (streamed/downloaded) of anything you send.
            Its simply inexpensive.
            <br />
            Upload videos, clips, music and photos of nearly anything you can
            imagine.
          </p>

          <button className="text-white font-extrabold text-sm sm:text-xs my-10 bg-[#0066FF] block w-48 sm:w-40 mx-[auto] rounded-2xl  px-5 sm:px-4 py-1">
            Upload a Video Now
          </button>
          <button className="text-white font-extrabold text-sm sm:text-xs my-10 bg-[#5F5E5E] block w-48 sm:w-40 mx-[auto] rounded-2xl  px-5 sm:px-4 py-1">
            Upload a Music
          </button>
          <button className="text-white font-extrabold text-sm sm:text-xs my-10 bg-[#B1B3B6] block w-48 sm:w-40 mx-[auto] rounded-2xl px-5 sm:px-4 py-1">
            Upload a Clip Now
          </button>
        </section>
      </section>
      <Footer />
    </div>
  );
}
