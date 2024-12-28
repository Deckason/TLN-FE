import React, { useState } from 'react';
import ResponsibilitiesModal from './ResponsibilitiesModal';
import ApplyModal from './ApplyModal';
import Image from 'next/image';
import positionsimg from "../../../../Assets/career-screen/open_positions.svg";
import { useGetPositionsQuery } from '../../../../store/apiSlice';

const OpenPositions = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showMorePositions, setShowMorePositions] = useState(false);
  const [showResponsibilities, setShowResponsibilities] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  // const positions = ["Business Development", "Operations", "Graphic Designer", "Marketing", "Business Analyst", "Designer"];

   const { data: positions, isLoading, isError } = useGetPositionsQuery();
  
    if (isLoading) {
      return <div className="text-center">Loading Positions...</div>;
    }
  
    if (isError) {
      return <div className="text-center text-red-500">Failed to load positions. Please try again later.</div>;
    }

  const displayedPositions = showMorePositions ? positions : positions.slice(0, 4);

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
    setShowResponsibilities(true);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-8 m-5 md:m-0">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Open Positions</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-md w-[1200px] max-w-full">
        
        <div className="flex flex-col p-4 md:w-1/2 space-y-4">

          {displayedPositions.map((position, index) => (
            <button
              key={index}
              onClick={() => handlePositionSelect(position)}
              className="w-full p-3 border rounded-md bg-gray-100 text-gray-700 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <div
                dangerouslySetInnerHTML={{ __html: position.title }}
              />
      </button>
          ))}

          {positions.length > 4 && <button
            onClick={() => setShowMorePositions(!showMorePositions)}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 mt-4 w-1/2"
          >
            {showMorePositions ? "Less" : "More"}
          </button>}
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 md:ml-6">
          <Image
            src={positionsimg} // Replace with the actual image path
            alt="Team Image"
            className="w-full max-w-xs object-cover rounded-md"
          />
        </div>
      </div>

      {/* Responsibilities Modal */}
      {showResponsibilities && selectedPosition && (
        <ResponsibilitiesModal
          positions={selectedPosition}
          onApply={() => setShowApplyModal(true)}
          onClose={() => setShowResponsibilities(false)}
        />
      )}

      {/* Apply Modal */}
      {showApplyModal && (
        <ApplyModal onClose={() => setShowApplyModal(false)} />
      )}
    </div>
  );
};

export default OpenPositions;
