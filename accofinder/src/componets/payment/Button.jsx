import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Button = ()=>{
  const navigate = useNavigate()
  const goToPayOptions = (props)=> {
    navigate("/options")
  }
    return(
        <div className="w-[60%]">
            <button
              type="submit"
              className="w-full text-bold py-2 m-5 rounded-xl bg-black text-white hover:scale-95 tranition duration-500"
              onClick={goToPayOptions}
            >
              Book
            </button>

        </div>
    );
}
export default Button;