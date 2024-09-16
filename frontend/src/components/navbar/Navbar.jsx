import React from "react";
import Axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    Axios.get("http://localhost:3000/auth/logout", { withCredentials: true })
    .then(res=>{
      if(res.data.status){
        navigate('/signin')
      }
    }).catch(err=>{console.log(err)})
  }
  return (
    <>
      <div className="border-b-2 border-black ">
        <div className="flex justify-between px-4 bg-blue-100 p-2 shadow-xl">
          <div>
            <div className="flex flex-col justify-center items-center underline">
              <h1 className="text-3xl font-semibold">
                <i>
                  <span className="text-yellow-800">G</span>et
                </i>
              </h1>
              <h1 className="text-3xl font-semibold">
                <i>
                  <span className="text-yellow-800">i</span>n
                </i>
              </h1>
              <h1 className="text-3xl font-semibold">
                <i>
                  <span className="text-yellow-800">T</span>ouch
                </i>
              </h1>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-semibold ">
              Welcome the Akash World{" "}
            </h1>
            <h1 className="text-xl font-semibold">
              {" "}
              Here you explore your knowlage ,
            </h1>
          </div>
          <div>
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              className="w-32 rounded-full"
              alt="img"
            />
          </div>
        </div>

        <div className="bg-blue-400 text-black pr-28">
          <div className=" flex justify-end ">
            <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <Link to='/' className="hover:text-white">Home</Link>
            <Link to='/dashboard' className="hover:text-white">Dashboard</Link>
            <Link to='/about' className="hover:text-white">About</Link>
            <Link to='/gallary' className="hover:text-white">Gallary</Link>
            <Link to='/contact' className="hover:text-white">Ask Q</Link>
            <button className="hover:text-white" onClick={handleLogout}>LogOut</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
