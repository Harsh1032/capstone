import React from "react";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center pt-20 z-50">
      <div className="bg-white w-[598px] h-[300px] rounded-md shadow-lg">
        <div className="flex h-[61px] justify-between items-center">
          <div className="flex-1 text-center">
            <p className="text-xl font-bold text-red-600">NOTIFICATION</p>
          </div>
          <button className="text-[#333333] text-2xl pr-4" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="w-full h-[161px] border-t border-black px-5 py-4">
          <p className="font-base text-lg py-2">Welcome to <span className="font-bold">SUKIENFC.COM</span></p>
          <p className="font-bold text-lg py-2">Register now to receive free FC days!</p>
          <p className="font-base text-lg py-2">©<span className="font-bold">FC ONLINE</span></p>
        </div>
        <div className="flex w-full h-[75px] justify-end border-t border-black gap-4 p-5">
          <button
            className="hover:bg-[#32C5D2] hover:text-white bg-transparent text-[#32C5D2] border border-[#32C5D2] px-3 py-1"
            onClick={() => alert("Notification Off for 1 hour")}
          >
            OFF 1 HOUR
          </button>
          <button
            className="hover:bg-[#32C5D2] hover:text-white bg-transparent text-[#32C5D2] border border-[#32C5D2] px-3 py-1"
            onClick={onClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
