import React from "react";
import { filter } from "../data/Data";

export default function Filtering({ onSelect }) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mt-2">
      {filter.map((val, index) => {
        const { text } = val;
        return (
          <div key={index}>
            <button
              className="px-3 py-1 transition duration-500 hover:scale-95 border border-black rounded-xl font-semibold text-sm"
              onClick={() => onSelect(val)}
            >
              {text}
            </button>
          </div>
        );
      })}
    </div>
  );
}
