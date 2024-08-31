import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    }).then(response => {
      if(response.data.status){
        navigate('/signin')
      }
    }).catch(err =>{
      console.log(err)
    });
  };

  return (
    <>
      <div className="p-20 bg-gray-900">
        <div className="flex justify-center items-center p-10">
          <form
            className="flex flex-col border-2 p-10 bg-gray-200 rounded-xl"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-semibold flex justify-center items-center">
              Sign Up
            </h1>

            <label htmlFor="username" className="font-semibold py-2">
              Username:
            </label>
            <input
              type="text"
              className="border-2 px-6 py-1 rounded-lg"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="email" className="font-semibold py-2">
              Email:
            </label>
            <input
              type="email"
              className="border-2 px-6 py-1 rounded-lg"
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="font-semibold py-2">
              Password:
            </label>
            <input
              type="password"
              className="border-2 px-6 py-1 rounded-lg"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="py-6">
              <button
                type="submit"
                className="bg-blue-600 text-white w-full rounded-lg py-1"
              >
                Sign Up
              </button>
              <p className="py-4">
                Have an account?
                <Link to='/signin' className="text-blue-800 font-semibold px-2">SignIn</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
