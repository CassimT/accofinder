import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function HistoryPage() {
  const location = useLocation();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { transaction, apiResponse } = location.state || {};

  useEffect(() => {
    // If transaction data is available, you can add it to the state
    if (transaction) {
      setTransactions([transaction]);  // Here you set a single transaction as an example
      setLoading(false);
    } else {
      // Fetch transactions from the backend (if not passed via state)
      fetchTransactions();
    }
  }, [transaction]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("/api/transactions");  
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching transactions");
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Booking History</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-10">
          {transactions.length > 0 ? (
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 font-semibold text-left border-b border-gray-300">Transaction ID</th>
                  <th className="py-3 px-4 font-semibold text-left border-b border-gray-300">Amount</th>
                  <th className="py-3 px-4 font-semibold text-left border-b border-gray-300">Phone</th>
                  <th className="py-3 px-4 font-semibold text-left border-b border-gray-300">Status</th>
                  <th className="py-3 px-4 font-semibold text-left border-b border-gray-300">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.transactionId} className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 border-b border-gray-200">{transaction.transactionId}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{transaction.amount}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{transaction.phone}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{transaction.status}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-6 text-center text-gray-500">No transactions found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

