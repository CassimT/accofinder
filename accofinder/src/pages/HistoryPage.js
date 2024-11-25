import React from "react";
import { bookings } from "../componets/data/Data";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Booking History</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-10">
          {bookings.length > 0 ? (
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 font-semibold text-left border-b border-gray-300">Listing</th>
                  <th className="py-3 px-4 font-semibold text-left border-b border-gray-300">Date</th>
                  <th className="py-3 px-4 font-semibold text-left border-b border-gray-300">Price</th>
                  <th className="py-3 px-4 font-semibold text-left border-b border-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    <td className="py-3 px-4 border-b border-gray-200">{booking.listingName}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{booking.date}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{booking.price}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{booking.status}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-6 text-center text-gray-500">
              No bookings found. Start exploring and make your first booking!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
