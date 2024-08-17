import React from "react";
import WheelIcon from "../../assets/wheel.png";

const Wheel = () => {
  return (
    <div className="py-4 w-full">
      <div className="w-[90%] h-[970px] bg-black bg-opacity-90  mx-auto p-2 ">
        <h3 className="w-full uppercase text-white text-center py-4 mt-[30px]">
          <span className="font-bold text-3xl">Vip fc spin</span>
        </h3>
        <div className="w-[80px] h-[3px] border-t-4 border-t-[#32C5D2] mx-auto my-4"></div>
        <div className="flex w-full">
          <div className="flex flex-col w-[50%]">
            <img className="w-[585px] h-[585px]" src={WheelIcon} alt="wheel" />
            <div className="felx flex-col w-full">
              <h2 className="w-full text-center my-2">
                <span className="text-2xl text-white">
                  {" "}
                  You have 0 spins left
                </span>
              </h2>
              <div className="w-full flex justify-center my-4">
                <select className="w-[320px] h-[34px]">
                  <option value="0">-- dddnhdnh</option>
                </select>
              </div>
            </div>
            <div className="w-full flex justify-center mt-8">
              <button className="w-[120px] h-[45px]  text-center bg-[#C8D046] rounded-md mr-2">
                <span className="text-white">Trial</span>
              </button>
              <button className="w-[120px] h-[45px]  text-center bg-[#2196E0] rounded-md ml-2">
                <span className="text-white">Play</span>
              </button>
            </div>
          </div>
          <div className="felx flex-col w-[50%]">
            <div className="w-full flex justify-center mt-8">
              <button className="w-[90px] h-[45px] text-center bg-[#5DC09C] rounded-md mr-2">
                <span className="text-white text-2xl font-medium">Rules</span>
              </button>
              <button className="w-[181px] h-[45px] text-center bg-[#5DC09C] rounded-md ml-2">
                <span className="text-white text-2xl font-medium">
                  Winning Prize
                </span>
              </button>
            </div>
            <h3 className="w-full uppercase text-white text-center py-4 mt-[30px]">
              <span className="font-bold text-3xl">Your records</span>
            </h3>
            <div className="w-[90%] mx-auto h-[400px] flex overflow-y-scroll">
              <table className="w-full mt-3 h-full mx-auto border-opacity-50 ">
                <thead>
                  <tr className="text-white text-lg h-[41px] text-left">
                    <th className="font-normal border-b-2 border-gray-700">Event Name </th>
                    <th className="font-normal border-b-2 border-gray-700">Result Time</th>
                    <th className="font-normal border-b-2 border-gray-700">Denominations</th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
