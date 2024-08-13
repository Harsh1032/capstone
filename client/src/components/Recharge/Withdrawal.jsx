import React, {useState, useContext, useEffect}  from "react";
import { AuthContext } from "../AuthContext";

const Withdrawal = (e) => {
  
  const { user } = useContext(AuthContext);
  const [ packageValue, setPackageValue ] = useState([]);
  
  const [selectedPackageValue, setSelectedPackageValue ] = useState('');
  const [userWithdrawName, setUserWithdrawName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmission = async (e) => {

    e.preventDefault();

    const payload = {
      userID: user.user_id, 
      userWithdrawName: userWithdrawName, 
      packageName: selectedPackageValue,
      content: content
    };
  
    try {
      const response = await fetch("http://localhost:8000/api/withdraw", {
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
        setSelectedPackageValue("");
        setUserWithdrawName("");
        setContent("");
      } else {
        alert(`Withdraw failed: ${data.error || data.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    const fetchPackageValue = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/package",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log(data)
        if (response.ok) {
          setPackageValue(data); // Set the state with the data received
        } else {
          alert(`Didn't receive any data: ${data.error}`);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    };

    fetchPackageValue();
   
  }, []);
  return (
    <div className="w-full h-full">
      <div className="w-full h-[66px] flex flex-col">
        <h3 className="text-white uppercase text-3xl font-semibold">
          Fc Withdraw
        </h3>
        <div className="w-[30px] h-[30px] border-b-2 border-[#32C5D2]"></div>
      </div>
      <div className="w-full mt-5">
        <div className="w-full my-[10px]">
          <h2 className="text-[#EB5D68] text-2xl text-center">
            Current FC Number: {user.points}
          </h2>
          <form className="w-full h-[300px] my-3" onSubmit={handleSubmission}>
            <div className="flex py-2 justify-start items-center w-full">
              <label className="text-white w-[225px] text-right px-5 h-[37.5px] pt-1">
                <span className="text-lg">FC Number:</span>
              </label>
              <div className="w-[450px] h-[37.5px] pr-5 flex">
                <div className="w-[286.48px] h-full bg-white text-left px-4 flex items-center">
                  <p>{user.points}</p>
                </div>
                <div className="bg-[#cccaca] w-[134px] h-full flex justify-center items-center">
                  <span>{user.username}</span>
                </div>
              </div>
            </div>
            <div className="flex py-2 justify-start items-center w-full">
              <label className="text-white  px-5 text-right w-[225px] h-[55px] ">
                <span className="text-lg">FC Package Needs Withdrawal:</span>
              </label>
              <div className="w-[450px] h-[37.5px] pr-5 flex">
                <select 
                  className="w-[420.48px] h-full bg-white text-left px-4 flex items-center outline-none"
                  value={selectedPackageValue}
                  onChange={(e) => setSelectedPackageValue(e.target.value)}
                  required  
                >
                  <option value="0">Select FC Package to Withdraw</option>
                  {packageValue.map((card, index) => (
                    <option key={index} value={card.name}>
                      {card.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex py-2 mt-5 justify-start items-center w-full">
              <label className="text-white  text-right px-5  w-[225px] h-[37.5px] pt-1">
                <span className="text-lg">Character's name:</span>
              </label>
              <div className="w-[450px] h-[37.5px] pr-5 flex ">
                <input
                  className="w-[420.48px] h-full bg-white text-left px-4 flex items-center outline-none"
                  placeholder="Enter Character Name..."
                  value={userWithdrawName}
                  onChange={(e) => setUserWithdrawName(e.target.value)}
                  required  
                />
              </div>
            </div>
            <div className="flex py-2 justify-start items-center w-full">
              <label className="text-white  text-right px-5  w-[225px] h-[37.5px] pt-1">
                <span className="text-lg">Withdrawal Content:</span>
              </label>
              <div className="w-[450px] h-[37.5px] pr-5 flex">
                <input
                  className="w-[420.48px] h-full bg-white text-left px-4 flex items-center outline-none"
                  placeholder="Enter FC Withdrawal Content..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required  
                />
              </div>
            </div>
            <div className="w-full flex pt-8 justify-center items-center">
              <div className="w-[450px]  h-[37.5px] pl-6">
                <button className="w-[420.48px] h-full bg-[#32C5D2] hover:bg-[#27a8b4]">
                  <span className="uppercase text-white font-semibold">
                    FC withdraw
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center h-[80px] my-[35px] px-[15px] border">
        <span className="text-white text-lg">
          Required to Withdraw 550 FC or More.
        </span>
        <span className="text-white text-lg">
          – After Placing an FC Withdrawal Order, Please Wait 5 - 30 Minutes!
        </span>
      </div>
      <table className="w-full h-[42px] border-b-2 border-gray-700 border-opacity-50">
        <thead>
          <tr className="text-white font-extralight text-lg">
            <th className="font-thin">STT</th>
            <th className="font-thin">Game ID</th>
            <th className="font-thin">FC Number</th>
            <th className="font-thin">Status</th>
            <th className="font-thin">Content</th>
            <th className="font-thin">Time</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Withdrawal;
