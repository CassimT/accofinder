import React from "react";
import {useForm} from "react-hook-form";

const MobilePaymentForm = () =>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    
  // function for handling form submition
  const onSubmit = (data) => {
    console.log(data);
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
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 items-center justify-center mt-8"
          >
            <h3 className="font-semibold text-xl mb-3">Mobile payment</h3>
            <label className="flex flex-col font-sm">
              Username
              <input
                type="text"
                name = "username"
                {...register("username", { required: true })}
                placeholder="Cesar Medrano"
                className="py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 border-2 border-gray-200 bg-gray-100"
              />
            </label>
            <label className="flex flex-col font-sm">
              Phone number
              <input
                type="phone"
                name="phoneNumber"
                placeholder="+265"
                {...register("phoneNumber", { required: true })}
                className="py-2 px-8 focus:outline-none focus:ring-2 focus:ring-orange-500  rounded-lg border-2 border-gray-200 bg-gray-100"
              />
            </label>
            <label className="flex flex-col font-sm">
              Amount
              <input
                type="text"
                name="amount"
                {...register("amount", { required: true })}
                placeholder="MK0.00"
                className="py-2 px-8 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg border-2 border-gray-200 bg-gray-100"
              />
            </label>
            <button
              type="submit"
              className="px-10 text-bold py-2 mt-5 rounded-xl bg-black text-white hover:scale-95 tranition duration-500"
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