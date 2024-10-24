import React from "react"
import {useState} from "react";

function Payments(){

    const [value, setValue] = useState({
        username:'',
        phone:'',
        amount:''
    });

    const handleValueChange = (e)=>{
        setValue(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
    };

    return(
        <div className="w-full h-screen">
        <div className="bg-gradient-to-r to-blue-500 from-green-600 flex flex-col h-[60vh] items-center justify-center relative">
            <p className="text-2xl font-semibold font-sans mb-14 text-center">  Your payment is safe with us. We use secure encryption and trusted{" "}
          <br />
          payment gateways to protect your information <br /> Book with
          confidence</p>
                    {/* payment form for mobile wallet */}
            <div className="border border-gray-50 bg-[#f4f4f4] shadow-xl w-[45%] h-[55vh] rounded-xl absolute -mb-96">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 items-center justify-center m-10">
                    <label className="flex flex-col">
                        Username
                        <input type="text" name="username" value={inputValue} onChange={handleInputChange} placeholder="Username" className="py-2 px-4 rounded-xl "/>
                    </label>
                    <label className="flex flex-col">
                        Phone number
                        <input type="phone" name="phone" value={inputValue} onChange={handleInputChange} placeholder="Phone number" className="py-2 px-4  rounded-xl "/>
                    </label>
                    <label className="flex flex-col">
                        Amount
                        <input type="text" name="amount" value={inputValue} onChange={handleInputChange} placeholder="Amount" className="py-2 px-4 border-none rounded-xl "/>
                    </label>
                    <button type="submit" className="px-8 text-bold py-2 rounded-xl bg-black text-white hover:scale-95 tranition duration-500">
                      Pay
                    </button>
                </form>
            </div>
        </div>
        </div>
    )
}
export default Payments;