import { React } from "react";
import { FaCreditCard } from "react-icons/fa";
import bgPath from "../asserts/pay3.jpg"
import { useNavigate,useLocation } from "react-router-dom"; 


function PaymentSelection(){
  const navigate = useNavigate()
  const goToMobilePayment = () => {
    navigate("/payment")
  }
 
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col h-[60vh] items-center justify-center relative      
        bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgPath})` }}>
        <p className="text-2xl font-semibold font-sans mb-14 text-center">
          Your payment is safe with us
          <br />
         Book with confidence
        </p>

        {/* card for selecting payment method */}
        <div className="flex flex-col items-center justify-center border border-gray-50 bg-[#f4f4f4] shadow-xl w-[40%] h-[55vh] rounded-xl absolute -mb-96">
          <button className="flex flex-row w-[70%] gap-4 hover:scale-95 transition duration-500 px-9 py-2 border-2 bg-indigo-200 border-indigo-400 rounded-lg font-sans font-semibold">
            <FaCreditCard className="mt-1" /> Pay via credit card

          </button>
        <p className="m-3">OR</p>
         <button 
            onClick={goToMobilePayment}
            className="hover:scale-95 w-[70%] transition duration-500 px-10 py-2 border-2 bg-indigo-200 border-indigo-400 rounded-lg font-sans font-semibold">
            Mobile /Airtelmoney
          </button>
        </div>
      </div>
    </div>
  );
};
export default PaymentSelection;
