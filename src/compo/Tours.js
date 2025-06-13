/* Tours.js */
import React, { useState } from 'react';
import Card from './Card';

export default function Tours({ tours }) {
  const [allTours, setAllTours] = useState(tours);

  const removeTour = (id) => {
    setAllTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  if (allTours.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">No Tours Left</h2>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
          onClick={() => setAllTours(tours)}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-400">Plan Your Tour</h2>
      <div className="flex flex-wrap justify-center">
        {allTours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
}
