import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const goToPayOptions = (props) => {
    navigate("/options");
  };

  return (
    <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%]">
      <button
        type="submit"
        className="w-full sm:w-[70%] sm:px-10 text-bold py-2 m-5 rounded-xl bg-black text-white hover:scale-95 transition duration-500"
        onClick={goToPayOptions}
      >
        Book
      </button>
    </div>
  );
};

export default Button;
