import React from "react";

const Button = ()=>{
    return(
        <div className="w-[60%]">
            <button
              type="submit"
              className="w-full text-bold py-2 mt-5 rounded-xl bg-black text-white hover:scale-95 tranition duration-500"
            >
              Pay
            </button>

        </div>
    );
}
export default Button;