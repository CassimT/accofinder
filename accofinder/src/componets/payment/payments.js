import { useState, React } from "react";

function Payments() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  // function for handling form submition
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, phone, amount });
  };

  return (
    <div className="w-full h-screen">
      <div className="bg-gradient-to-r to-blue-500 from-green-600 flex flex-col h-[60vh] items-center justify-center relative">
        <p className="text-2xl font-semibold font-sans mb-14 text-center">
          Your payment is safe with us. We use secure encryption and trusted
          <br />
          payment gateways to protect your information <br /> Book with
          confidence
        </p>

        {/* payment form for mobile wallet */}
        <div className="border border-gray-50 bg-[#f4f4f4] shadow-xl w-[45%] h-[60vh] rounded-xl absolute -mb-96">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-5 items-center justify-center mt-10"
          >
            <div className="flex fle-row gap-2">
              <input type="radio" id="mobile" />
              <label for="mobile" className="text-lg font-medium font-sans">
                Mobile wallet
              </label>
            </div>

            <label className="flex flex-col">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="py-2 px-4 rounded-xl "
              />
            </label>
            <label className="flex flex-col">
              Phone number
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="py-2 px-4  rounded-xl "
              />
            </label>
            <label className="flex flex-col">
              Amount
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="py-2 px-4 border-none rounded-xl "
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
  );
}
export default Payments;
