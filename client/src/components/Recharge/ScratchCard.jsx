import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
const ScratchCard = () => {
  const { user } = useContext(AuthContext);
  const [cardNetwork, setCardNetwork] = useState([]);
  const [cardValue, setCardValue] = useState([]);
  // New state variables for form inputs
  const [selectedCardNetwork, setSelectedCardNetwork] = useState("");
  const [selectedCardValue, setSelectedCardValue] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const handleSubmission = async (e) => {
    e.preventDefault();

      // Construct the payload
  const payload = {
    userID: user.user_id, // Adjusted to match 'userID'
    topUpResourceName: selectedCardNetwork, // Adjusted to match 'topUpResourceName'
    topUpValueName: selectedCardValue, // Adjusted to match 'topUpValueName'
    topUpNumber: cardNumber, // Adjusted to match 'topUpNumber'
    topUpSeries: serialNumber, // Adjusted to match 'topUpSeries'
  };

  

  try {
    const token = localStorage.getItem('token');
    console.log(token)
    const response = await fetch("http://localhost:8000/api/deposit", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Deposit successful!");
      // Reset form fields if needed
      setSelectedCardNetwork("");
      setSelectedCardValue("");
      setCardNumber("");
      setSerialNumber("");
    } else {
      alert(`Deposit failed: ${data.error || data.message}`);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
  };

  useEffect(() => {
    const fetchCardNetwork = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/top-up-resource",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        if (response.ok) {
          setCardNetwork(data); // Set the state with the data received
        } else {
          alert(`Didn't receive any data: ${data.error}`);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    };

    const fetchCardValue = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/top-up-value", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setCardValue(data); // Set the state with the data received
        } else {
          alert(`Didn't receive any data: ${data.error}`);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    };

    fetchCardNetwork();
    fetchCardValue();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-[66px] flex flex-col">
        <h3 className="text-white uppercase text-3xl font-semibold">
          Top up card
        </h3>
        <div className="w-[30px] h-[30px] border-b-2 border-[#32C5D2]"></div>
      </div>
      <div className="w-full mt-5">
        <div className="w-full mt-[10px]">
          <form className="w-full h-[270px] my-3" onSubmit={handleSubmission}>
            <div className="flex py-2 justify-start items-center w-full">
              <label className="text-white w-[225px] text-right px-5 h-[37.5px] pt-1">
                <span className="text-lg">Card Network:</span>
              </label>
              <div className="w-[450px] h-[37.5px] pr-5 flex">
                <select 
                  className="w-[420.48px] h-full bg-white text-left px-4 flex items-center outline-none"
                  value={selectedCardNetwork}
                  onChange={(e) => setSelectedCardNetwork(e.target.value)}
                  required  
                >
                  <option value="0">-- Select Card Type --</option>
                  {cardNetwork.map((card, index) => (
                    <option key={index} value={card.name}>
                      {card.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex py-2 justify-start items-center w-full">
              <label className="text-white  px-5 text-right w-[225px] h-[37.5px] ">
                <span className="text-lg">Card value:</span>
              </label>
              <div className="w-[450px] h-[37.5px] pr-5 flex">
                <select 
                  className="w-[420.48px] h-full bg-white text-left px-4 flex items-center outline-none"
                  value={selectedCardValue}
                  onChange={(e) => setSelectedCardValue(e.target.value)}
                  required
                >
                  <option value="0">
                    -- Select Denomination. Wrong Lost Crad --
                  </option>
                  {cardValue.map((card, index) => (
                    <option key={index} value={card.name}>
                      {card.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex py-2 justify-start items-center w-full">
              <label className="text-white  text-right px-5  w-[225px] h-[37.5px] pt-1">
                <span className="text-lg">Card number:</span>
              </label>
              <div className="w-[450px] h-[37.5px] pr-5 flex ">
                <input
                  className="w-[420.48px] h-full bg-white text-left px-4 flex items-center outline-none"
                  placeholder="Enter Card Number (Scratch Off Silver Coating)..."
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex py-2 justify-start items-center w-full">
              <label className="text-white  text-right px-5  w-[225px] h-[37.5px] pt-1">
                <span className="text-lg">Card Serial Number:</span>
              </label>
              <div className="w-[450px] h-[37.5px] pr-5 flex">
                <input
                  className="w-[420.48px] h-full bg-white text-left px-4 flex items-center outline-none"
                  placeholder="Enter Card Serial Number (Printed on Card)..."
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="w-full flex py-2 justify-center items-center">
              <div className="w-[450px]  h-[37.5px] pl-6">
                <button className="w-[420.48px] h-full bg-[#32C5D2] hover:bg-[#27a8b4]">
                  <span className="uppercase text-white font-semibold">
                    Top up card
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full flex flex-col py-2 h-[238px] rounded-md bg-[#E0EBF9]  px-[15px] border">
        <p className="text-[#327AD5] text-lg font-semibold">Note:</p>
        <p className="text-[#327AD5] text-lg font-semibold">
          - Priority Viettel, Vinaphone Cards With Many Attractive Offers.
        </p>
        <p className="text-[#327AD5] text-lg font-semibold">
          - Please Check the Card Value Carefully Before Loading. Incorrect
          Value Will Be Considered "Wrong Card" and Will Not Be Added to Your
          Account.
        </p>
        <p className="text-[#327AD5] text-lg font-semibold">
          - Enter the correct card serial number for fastest card processing. In
          case of entering the wrong serial number, contact customer service for
          card approval support.
        </p>
        <p className="text-[#327AD5] text-lg font-semibold">
          - Scratch Card Error "Approval Process..." More Than 15 Minutes Since
          Card Top-up Contact Customer Service In The Right Corner Of The Screen
          For Support!
        </p>
      </div>
      <table className="w-full mt-3 h-[42px] border-b-2 border-gray-700 border-opacity-50">
        <thead>
          <tr className="text-white text-lg">
            <th className="font-thin">Home network</th>
            <th className="font-thin">Card Code/Serial Number</th>
            <th className="font-thin">Denominations</th>
            <th className="font-thin">Status</th>
            <th className="font-thin">Time</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ScratchCard;
