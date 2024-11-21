import { React } from "react";
import { FaCreditCard } from "react-icons/fa";
import bgPath from "../asserts/pay3.jpg";
import { useNavigate } from "react-router-dom";

function PaymentSelection() {
  const navigate = useNavigate();
  
  const goToMobilePayment = () => {
    navigate("/payment");
  };
 
  return (
    <div className="w-full h-screen">
      <div
        className="flex flex-col h-[60vh] items-center justify-center relative bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgPath})` }}
      >
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-14 text-center px-4">
          Your payment is safe with us
          <br />
          Book with confidence
        </p>

        {/* card for selecting payment method */}
        <div className="flex flex-col items-center justify-center border border-gray-50 bg-[#f4f4f4] shadow-xl w-[80%] sm:w-[60%] md:w-[40%] h-[55vh] rounded-xl absolute -mb-96">
          <button className="flex flex-row w-[80%] sm:w-[70%] text-white gap-4 hover:scale-95 transition duration-500 px-6 sm:px-9 py-3 border-2 bg-orange-600 rounded-full font-semibold">
            <FaCreditCard className="mt-1" /> Pay via credit card
          </button>
          <p className="m-3">OR</p>
          <button 
            onClick={goToMobilePayment}
            className="hover:scale-95 w-[80%] sm:w-[70%] transition duration-500 px-8 sm:px-10 py-3 border-2 border-gray-600 text-gray-600 bg-gray-90 rounded-full font-semibold">
            Mobile /Airtelmoney
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSelection;
