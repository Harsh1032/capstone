import React, {useState, useContext} from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Login = () => {

  const { setUser, setLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password: password
        })
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem('token', data.token); // Store the JWT token
        localStorage.setItem('user', JSON.stringify(data.user)); 
        setUser(data.user); // Set user data in context
        setLoggedIn(true); // Set loggedIn state to true
        alert('Login successful!');
        navigate('/'); // Navigate to the home page after successful login
      } else {
        alert(`Login failed: ${data.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="w-full py-4">
      <form className="w-[90%] h-[590.25px] bg-black bg-opacity-80 mx-auto px-3 py-4" onSubmit ={handleLogin}>
        <div className="h-[561px] flex flex-col justify-center items-center border border-[#EFEAEA] gap-4">
          <span className="text-white font-bold text-2xl mb-2">Sign in</span>
          <input
            type="text"
            className="w-[360px] h-[34px] py-2 px-4 bg-white outline-none rounded-md"
            placeholder="Enter Login Account..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-[360px] h-[34px] py-2 px-4 bg-white outline-none rounded-md"
            placeholder="Enter Login Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between w-[360px] ">
            <div className="flex items-center w-[150px] gap-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 h-3 w-3"
              />
              <label className="text-white text-lg h-full cursor-pointer">
                Memorize
              </label>
            </div>
            <p className="text-white text-lg italic cursor-pointer">
              Forgot Pssword?
            </p>
          </div>
          <button className="flex justify-center items-center w-[360px] h-[36px] rounded-md bg-[#5E9CD1] text-white mt-4 ">
            {" "}
            Log in{" "}
          </button>
          <p className="flex justify-center items-center w-[360px] text-white text-xl">
            - OR -
          </p>
          <Link to="/signUp">
            <div className="flex items-center w-[171px] h-[35px] bg-[#DD4B39] px-2 cursor-pointer">
              <FaRegUser color="white" />
              <div className="h-full flex items-center border-l border-gray-900 border-opacity-20 ml-2 px-2">
                <p className="text-white font-medium">Create Account</p>
              </div>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
