import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Button } from "antd";  // Import Ant Design components
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import FormData from "form-data";

const MobilePaymentForm = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    amount: '50',  // Set default amount if it's fixed
  });

  const [alertMessage, setAlertMessage] = useState(null);  // State for alert
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setAlertMessage(null);  // Clear previous messages

    try {
      const response = await axios.post("http://localhost:3000/api/aitel-access/mobile/pay", data, {
          //headers to be included
      });
      // Show success alert
      setAlertMessage({ type: "success", message: "processing payement!" });
      gotohistory()
    } catch (error) {
      // Show error alert
      gotohistory()
      setAlertMessage({ type: "error", message: "Payment processing failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const gotohistory =  ()=> {
    navigate("/history")
  }

  return (
    <div className="w-full h-screen">
      <div className="bg-gradient-to-r to-blue-500 from-green-600 flex flex-col h-[60vh] items-center justify-center relative">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold -mt-32 text-center px-4">
          Your payment is safe with us <br /> Book with confidence
        </p>

        <div className="border border-gray-50 bg-[#f4f4f4] shadow-xl w-[80%] sm:w-[70%] md:w-[60%] lg:w-[40%] h-[60vh] rounded-xl absolute -mb-96 p-6">
          {alertMessage && (
            <Alert
              message={alertMessage.message}
              type={alertMessage.type}
              showIcon
              closable
              className="mb-4"
            />
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4 items-center justify-center mt-4">
            <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3">Mobile Payment</h3>

            <label className="w-[80%] sm:w-[70%] md:w-[60%] flex flex-col font-sm">
              Username
              <input
                type="text"
                name="username"
                {...register("username", { required: true })}
                placeholder="Cesar Medrano"
                className="py-2 px-4 sm:px-6 md:px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 border-2 border-gray-200 bg-gray-100"
              />
            </label>
            {errors.username && <span className="text-red-500 text-sm">Username is required</span>}

            <label className="w-[80%] sm:w-[70%] md:w-[60%] flex flex-col font-sm">
              Phone number
              <input
                type="tel"
                name="phone"
                {...register("phone", { required: true })}
                placeholder="+265"
                className="py-2 px-4 sm:px-6 md:px-8 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg border-2 border-gray-200 bg-gray-100"
              />
            </label>
            {errors.phoneNumber && <span className="text-red-500 text-sm">Phone number is required</span>}

            <label className="w-[80%] sm:w-[70%] md:w-[60%] flex flex-col font-sm">
              Amount
              <input
                type="text"
                name="amount"
                value={formData.amount}
                readOnly
                {...register("amount", { required: true })}
                className="py-2 px-4 sm:px-6 md:px-8 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg border-2 border-gray-200 bg-gray-100"
              />
            </label>

            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="mt-4 w-[80%] sm:w-[70%] md:w-[60%]"
            >
              {isLoading ? 'Processing...' : 'Submit Payment'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobilePaymentForm;
