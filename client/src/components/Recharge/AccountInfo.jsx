import React, {useContext} from "react";
import { AuthContext } from "../AuthContext";

const AccountInfo = () => {
  const { user, loggedIn } = useContext(AuthContext);
  
  // Format the date
  const formattedDate = new Date(user.createdat).toLocaleDateString()

  return (
    <div className="w-full h-full">
      <div className="w-full h-[66px] flex flex-col">
        <h3 className="text-white uppercase text-3xl font-semibold">
          Account Information
        </h3>
        <div className="w-[30px] h-[30px] border-b-2 border-[#32C5D2]"></div>
      </div>
      <div className="w-full mt-5">
        <table className="w-full text-[#EFEAEA]">
          <tbody>
            <tr className="bg-[#363636]">
              <th className="px-4 py-2 text-left text-xl">ID</th>
              <th className="px-4 py-2 text-left text-xl">{user.user_id}</th>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xl">User name</th>
              <th className="px-4 py-2 text-left text-xl">{user.username}</th>
            </tr>
            <tr className="bg-[#363636]">
              <th className="px-4 py-2 text-left text-xl">Current Balance</th>
              <th className="px-4 py-2 text-[#E73D4A] text-left text-xl">
                {user.balance} VND
              </th>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xl">
                Number of FCs Available
              </th>
              <th className="px-4 py-2 text-left text-xl text-[#E73D4A]">{user.points}</th>
            </tr>
            <tr className="bg-[#363636]">
              <th className="px-4 py-2 text-left text-xl">Join Date</th>
              <th className="px-4 py-2 text-left text-xl">{formattedDate}</th>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xl">Operation</th>
              <th className="px-4 py-2 text-white text-left text-xl">
                <span className="px-2 rounded-md bg-[#E73D4A] w-[275px] h-[30px] flex justify-center">
                  FC Withdrawal (Automatic)
                </span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountInfo;
