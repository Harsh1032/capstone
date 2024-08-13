import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { user, loggedIn, setUser, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [userBalance, setUserBalance] = useState('');

  useEffect(() => {
    if (user) { // Check if user is not null
      setUserName(user.username);
      setUserBalance(user.balance);
    }
  }, [loggedIn, user]);

  const handleLogout = () => {
    // Clear the token from localStorage or cookie
    localStorage.removeItem('token'); // Assuming you store the token in localStorage
    // Clear user context
    setUser(null);
    setLoggedIn(false);
    // Redirect to login page or home page
    navigate('/login');
  };

  return (
    <div className="h-[100px] w-full bg-black/35 flex items-center justify-center ">
      <div className="w-[90%] h-full flex items-center justify-between px-3">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="FcMobile" width={277} height={33} />
          <Link to="/">
            <div className="w-[120px] h-[40px] flex items-center justify-center hover:bg-[#FFCB03] rounded-md hover:text-[#32c5d2] ml-5">
              <span className="text-[#FFCB03] hover:text-[#32c5d2] font-bold text-lg">
                HOME PAGE
              </span>
            </div>
          </Link>
          <Link to="/recharge?source=recharge">
            <div className="w-[120px] h-[40px] flex items-center justify-center hover:bg-[#FFCB03] rounded-md hover:text-[#32c5d2]">
              <span className="text-[#FFCB03] hover:text-[#32c5d2] font-bold text-lg">
                RECHARGE
              </span>
            </div>
          </Link>
          <Link to="/recharge?source=fc-withdraw">
            <div className="w-[150px] h-[40px] flex items-center justify-center hover:bg-[#FFCB03] rounded-md hover:text-[#32c5d2]">
              <span className="text-[#FFCB03] hover:text-[#32c5d2] font-bold text-lg">
                FC WITHDRAW
              </span>
            </div>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link to="/login">
            <button className="w-auto h-[40px] px-3 flex items-center justify-center bg-[#FFCB03] rounded-md hover:text-white font-bold text-lg">
              {loggedIn ? `${username} - ${userBalance} VND` : "Log in"}
            </button>
          </Link>
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="w-auto h-[40px] px-3 flex items-center justify-center bg-[#FFCB03] rounded-md hover:text-white font-bold text-lg"
            >
              Log out
            </button>
          ) : (
            <Link to="/signUp">
              <button className="w-auto h-[40px] px-3 flex items-center justify-center bg-[#FFCB03] rounded-md hover:text-white font-bold text-lg">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
