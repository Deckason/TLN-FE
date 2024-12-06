import Image from 'next/image';
import React from 'react';

const DynamicForm = ({ 
    showAttachCV = true, 
    showTextarea = true, 
    howDidYouHearAboutoptions, 
    inputFields = [], 
    imageSrc="",
    showSubmitBtn = true,
    children 
}) => {
    return (
        <div className="flex flex-col md:flex-row  p-2 md:p-10">
            {/* Image Placeholder */}
            <div className="flex-1">
                <Image src={imageSrc}/>
                {/* <div className="min-w-40 min-h-full bg-gray-400"></div> */}
            </div>

            {/* Form Section */}
            <div className="flex-1">
                <div className="max-w-lg mx-auto p-2 md:p-6 bg-white">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Fill out the form below to become part of our vibrant community.
                    </h2>
                    <form className="space-y-4">
                        {/* Default Input Fields */}
                        {inputFields.map((field) => (
                            <input
                                key={field.id}
                                type={field.type}
                                placeholder={field.placeholder}
                                className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                            />
                        ))}

                        {/* Custom Fields Passed as Children */}
                        {children}

                        {/* Conditionally render "Attach CV" field */}
                        {showAttachCV && (
                            <div>
                                <label className="block text-teal-600 cursor-pointer border border-gray-300 rounded-md p-2 text-center hover:bg-gray-50">
                                    Attach CV
                                    <input type="file" className="hidden" />
                                </label>
                            </div>
                        )}

                        {/* Conditionally render textarea */}
                        {showTextarea && (
                            <textarea
                                placeholder="Tell us something about yourself"
                                className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                                rows="3"
                            ></textarea>
                        )}

                        {/* How did you hear about us */}
                        {howDidYouHearAboutoptions && (
                            <select
                                className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                            >
                                <option>How did you hear about us</option>
                                {howDidYouHearAboutoptions.map((option, index) => (
                                    <option key={index} value={option.toLowerCase()}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        )}

                        {/* Submit Button */}
                        {showSubmitBtn && <button
                            type="submit"
                            className="w-fit bg-teal-600 text-white rounded-md  font-semibold hover:bg-teal-700 focus:outline-none px-12 py-2"
                        >
                            Submit
                        </button>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DynamicForm;
