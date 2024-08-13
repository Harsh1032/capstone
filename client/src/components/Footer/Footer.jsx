import React from "react";
import Logo from "../../assets/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import FC from "../../assets/FC.png";
import FcOnline from "../../assets/FcOnline.jpg";
import { IoLogoFacebook } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import Jackpot from "../../assets/jackpot.gif";

const Footer = () => {
  return (
    <div className="w-full h-[445.41px] bg-black pt-[20px]">
      <div className="w-[90%] h-[360.13px] flex mx-auto p-10 gap-4">
        <div className="flex flex-col items-center justify-center w-[359px] h-[114px] border-2 border-[#EFEAEA] mt-2">
          <img src={Logo} alt="logo" width={149} height={21} />
          <span className="text-[#EFEAEA] text-xl font-semibold ">
            Gamer Appreciation Event -
          </span>
          <span className="text-[#EFEAEA] text-xl font-semibold ">
            {" "}
            Verified Home Page ✅
          </span>
        </div>
        <div className="flex flex-col justify-start w-[390px] h-[227px] px-3">
          <h2 className="text-[#EFEAEA] text-2xl font-bold ">ABOUT US</h2>
          <p className="text-[#EFEAEA] text-lg font-semibold">
            We Work Professionally, Reputably, Quickly And Always Put Your
            Interests First With The Criteria Customer Is Above All, Our Shop
            Will Bring Customers The Most Satisfactory Experience.
          </p>
          <span className="text-[#FF0000] text-lg font-semibold">
            Working Hours: 08:00 - 23:00
          </span>
          <span className="text-[#FF0000] text-lg font-semibold">
            Working including Holidays.
          </span>
        </div>
        <div className="flex flex-col w-[389px] h-[330px] px-3">
          <p className="text-[#EFEAEA] text-lg font-bold flex items-center">
            <IoIosArrowForward />
            Terms of use
          </p>
          <p className="text-[#EFEAEA] text-lg font-bold flex items-center">
            <IoIosArrowForward />
            Privacy Policy
          </p>
          <p className="text-[#EFEAEA] text-lg font-bold flex items-center">
            <IoIosArrowForward />
            Delete User Data{" "}
          </p>
          <div
            className="relative w-[338px] h-[70px] border border-[#EFEAEA]"
            style={{
              backgroundImage: `url(${FC})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute px-2 w-full h-full flex items-center">
              <img
                src={FcOnline}
                alt="Overlay"
                className="w-[54px] h-[54px]"
              />
              <div className="flex flex-col ml-2">
              <p className="text-lg font-semibold text-white flex items-center">
                EA Sports FC Online Vietnam <VscVerifiedFilled color="blue" />
              </p>
              <div className="flex gap-2">
              <div className="bg-[#F5F6F7] text-[#4B4F56] w-[104px] h-[20px] text-sm font-semibold flex justify-center items-center">
              <IoLogoFacebook color="blue"/> Follow Page
              </div>
              <p className="text-sm font-semibold text-white">2.2M followers</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[45px] flex justify-center items-center border-t border-[#EFEAEA] pt-5">
          <p className="text-[#EFEAEA] font-bold text-lg">2024 © Copyright <span className="text-[#EF282B]">SuKienFC.Com</span> , All Rights Reserved.</p>
      </div>
      <div className="w-[175px] h-[180px] fixed bottom-0 left-0 m-4">
        <img src={Jackpot} alt="Jackpot" width={174.58} height = {179.2} />
      </div>
    </div>
  );
};

export default Footer;
