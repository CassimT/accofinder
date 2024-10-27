import { React } from "react";
import { FaCreditCard } from "react-icons/fa";

const Payments = () => {
 
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col h-[60vh] items-center justify-center relative bg-[url('./pay3.jpg')] bg-cover bg-no-repeat">
        <p className="text-2xl font-semibold font-sans mb-14 text-center">
          Your payment is safe with us
          <br />
         Book with confidence
        </p>

        {/* card for selecting payment method */}
        <div className="flex flex-col items-center justify-center border border-gray-50 bg-[#f4f4f4] shadow-xl w-[40%] h-[55vh] rounded-xl absolute -mb-96">
          {/* button for payment via credit caard */}
          <button className="flex flex-row gap-4 hover:scale-95 transition duration-500 px-9 py-2 border-2 bg-indigo-200 border-indigo-400 rounded-lg font-sans font-semibold">
            <FaCreditCard className="mt-1" /> Pay via credit card
          </button>
          
          {/* button for mobile payment */}
         <button className="hover:scale-95 transition duration-500 px-10 py-2 border-2 bg-indigo-200 border-indigo-400 rounded-lg font-sans font-semibold">
            Mobile /Airtelmoney
          </button>
        </div>
      </div>
    </div>
  );
};
export default Payments;
