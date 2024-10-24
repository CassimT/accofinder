import React from "react";

function Payments(){
    return(
        <div className="w-full bg-gray-200 flex flex-col items-center justify-center">
            <p className="text-xl font-medium font-sans text-center">  Your payment is safe with us. We use secure encryption and trusted{" "}
          <br />
          payment gateways to protect your information <br /> Book with
          confidence</p>
            <div className="border border-gray-100 shadow-xl w-1/3 h-[60vh]">
                <form>
                    <label>
                        Username
                        <input type="text" placeholder="Username" className="py-2 px-4 border-none rounded"/>
                    </label>
                    <label>
                        Phone number
                        <input type="phone" placeholder="Phone number" className="py-2 px-4 border-none rounded"/>
                    </label>
                    <label>
                        Amount
                        <input type="text" placeholder="Amount" className="py-2 px-4 border-none rounded"/>
                    </label>
                </form>
            </div>
        </div>
    )
}
export default Payments;