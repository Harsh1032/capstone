import React from 'react'

const GameHistory = () => {

  const handleSubmission = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-[66px] flex flex-col">
        <h3 className="text-white uppercase text-3xl font-semibold">
          Game Play History
        </h3>
        <div className="w-[30px] h-[30px] border-b-2 border-[#32C5D2]"></div>
      </div>
      <table className="w-full mt-[35px] h-[42px] border-t-2 border-gray-700 border-opacity-50">
        <thead>
          <tr className="text-white text-lg text-left">
            <th className="font-semibold">Game</th>
            <th className="font-semibold">Reward</th>
            <th className="font-semibold">Time</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default GameHistory