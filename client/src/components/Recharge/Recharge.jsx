import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AccountInfo from "./AccountInfo";
import Withdrawal from "./Withdrawal";
import ScratchCard from "./ScratchCard";
import GameHistory from "./GameHistory";

const Recharge = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const source = queryParams.get("source");
  const [selectedComponent, setSelectedComponent] = useState("ScratchCard");

  useEffect(() => {
    if (source === "fc-withdraw") {
      setSelectedComponent("Withdrawal");
    } else {
      setSelectedComponent("ScratchCard");
    }
  }, [source]);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "AccountInfo":
        return <AccountInfo />;
      case "Withdrawal":
        return <Withdrawal />;
      case "ScratchCard":
        return <ScratchCard />;
      case "GameHistory":
        return <GameHistory />;
      default:
        return <ScratchCard />;
    }
  };

  return (
    <div className="w-full h-[786px] p-5">
      <div className="w-[90%] h-[95%] mt-5 bg-black bg-opacity-80 mx-auto flex px-5 py-5">
        <div className="w-[25%] h-[28%] flex flex-col mt-[40px] gap-8">
          <div className="w-[90%] border-l-4 border-[#32C5D2] pl-5 h-[22px] flex items-center">
            <h3 className="text-white text-xl font-semibold">TRADING MENU</h3>
          </div>
          <div className="w-[90%] flex flex-col items-center">
            <ul className="text-white text-lg w-full">
              <li
                className={`border-b border-gray-600 border-opacity-40 py-1 cursor-pointer relative hover:text-[#32C5D2] ${
                  selectedComponent === "AccountInfo" ? "text-[#32C5D2]" : ""
                }`}
                onClick={() => setSelectedComponent("AccountInfo")}
              >
                <span className="before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#32C5D2] before:mr-2 before:align-middle"></span>
                Account information
              </li>
              <li
                className={`border-b border-gray-600 border-opacity-40 py-1 cursor-pointer relative hover:text-[#32C5D2] ${
                  selectedComponent === "Withdrawal" ? "text-[#32C5D2]" : ""
                }`}
                onClick={() => setSelectedComponent("Withdrawal")}
              >
                <span className="before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#32C5D2] before:mr-2 before:align-middle"></span>
                FC Withdrawal (Automatic)
              </li>
              <li
                className={`border-b border-gray-600 border-opacity-40 py-1 cursor-pointer relative hover:text-[#32C5D2] ${
                  selectedComponent === "ScratchCard" ? "text-[#32C5D2]" : ""
                }`}
                onClick={() => setSelectedComponent("ScratchCard")}
              >
                <span className="before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#32C5D2] before:mr-2 before:align-middle"></span>
                Recharge scratch cards
              </li>
              <li
                className={`border-b border-gray-600 border-opacity-40 py-1 cursor-pointer relative hover:text-[#32C5D2] ${
                  selectedComponent === "GameHistory" ? "text-[#32C5D2]" : ""
                }`}
                onClick={() => setSelectedComponent("GameHistory")}
              >
                <span className="before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#32C5D2] before:mr-2 before:align-middle"></span>
                Game Play History
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[75%] h-full">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Recharge;
