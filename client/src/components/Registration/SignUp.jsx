import React, {useState} from 'react'
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/user', {
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
        alert('Signup successful!');
        navigate('/');
      } else {
        alert(`Signup failed: ${data.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }

  }

  return (
    <div className="w-full py-4">
      <div className="w-[90%] h-[590.25px] bg-black bg-opacity-80 mx-auto px-3 py-4">
        <form className="h-[561px] flex flex-col justify-center items-center border border-[#EFEAEA] gap-4" onSubmit={handleSignUp}>
          <span className="text-white font-bold text-2xl mb-2">Create System Account</span>
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
           <input
            type="password"
            className="w-[360px] h-[34px] py-2 px-4 bg-white outline-none rounded-md"
            placeholder="Re-enter Login Password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="flex justify-center items-center w-[360px] h-[36px] rounded-md bg-[#5E9CD1] text-white mt-4 text-lg">
            Create Account
          </button>
          <p className="flex justify-center items-center w-[360px] text-white text-xl">
            - OR -
          </p>
          <Link to="/login">
            <div className="flex items-center w-[105px] h-[35px] bg-[#DD4B39] px-2 cursor-pointer">
              <FaRegUser color="white" />
              <div className="h-full flex items-center border-l border-gray-900 border-opacity-20 ml-2 px-2">
                <p className="text-white font-medium">Log in</p>
              </div>
            </div>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp