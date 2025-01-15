import React from 'react';

const ResponsibilitiesModal = ({ positions, onApply, onClose }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto m-5 md:m-0">
        <h3 className="text-xl font-bold mb-4">{positions.title}</h3>
        
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <h4 className="text-lg font-semibold mb-2">Responsibilities:</h4>
            <ul className="space-y-2">
              {positions.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">
                    <div
                      dangerouslySetInnerHTML={{ __html: task }}
                    />
                    </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-2">Skills required:</h4>
            <ul className="space-y-2">
              {positions.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">
                    <div
                      dangerouslySetInnerHTML={{ __html: skill }}
                    />
                    </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg">
            Close
          </button>
          <button onClick={onApply} className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsibilitiesModal;
