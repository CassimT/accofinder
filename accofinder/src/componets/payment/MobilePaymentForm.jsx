import React from "react";
import { useState} from "react";


const MobilePaymentForm = () =>{
    
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  // function for handling form submition
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, phone, amount });
  };

    return(
    <div className="w-full h-screen">
      <div className="bg-gradient-to-r to-blue-500 from-green-600 flex flex-col h-[60vh] items-center justify-center relative">
        <p className="text-2xl font-semibold font-sans -mt-32 text-center">
          Your payment is safe with us <br /> Book with
          confidence
        </p>

        {/* payment form for mobile wallet */}
        <div className="border border-gray-50 bg-[#f4f4f4] shadow-xl w-[40%] h-[60vh] rounded-xl absolute -mb-96">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4 items-center justify-center mt-8"
          >
            <h3 className="font-semibold text-xl mb-3">Mobile payment</h3>
            <label className="flex flex-col font-sm">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Cesar Medrano"
                className="py-2 px-8 rounded-lg border-2 border-gray-200 bg-gray-100"
              />
            </label>
            <label className="flex flex-col font-sm">
              Phone number
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+265"
                className="py-2 px-8  rounded-lg border-2 border-gray-200 bg-gray-100"
              />
            </label>
            <label className="flex flex-col font-sm">
              Amount
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="MK0.00"
                className="py-2 px-8 rounded-lg border-2 border-gray-200 bg-gray-100"
              />
            </label>
            <button
              type="submit"
              className="px-8 text-bold py-2 mt-5 rounded-xl bg-black text-white hover:scale-95 tranition duration-500"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}
export default MobilePaymentForm;