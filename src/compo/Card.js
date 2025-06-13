/* Card.js */
import React, { useState } from "react";

export default function Card({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  
  const text = readMore ? info : info.length > 200 ? info.substring(0, 200) + '...' : info;
  function handleClick() {
  removeTour(id);
}
  return (
    <div className="max-w-sm bg-gray-800 rounded-2xl shadow-lg overflow-hidden m-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
      <img src={image} alt={name} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xl font-semibold text-indigo-400">{name}</h4>
          <span className="text-lg font-medium text-green-400">{price}</span>
        </div>
        <p className="text-gray-300 mb-6">
          {text}
          {info.length > 200 && (
            <button
              className="ml-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? 'Show less' : 'Read more'}
            </button>
          )}
        </p>
        <button
          onClick={handleClick}
          className="w-full py-3 bg-red-600 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-red-700 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

