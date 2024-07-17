"use client";
import React, { useState } from "react";
import Image from "next/image";
import formImage from "../../../../../../public/startYourJourney/school.png";

const SchoolForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    instagramUsername: "",
    language: "",
    referral: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
  };

  return (
    <>
      <div className="min-w-screen InterFont.className min-h-screen  flex items-center justify-center px-1 sm:px-20 py-5">
        <div className="  w-full overflow-hidden">
          <p className="text-2xl pt-6 sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl  text-center font-bold">
            Start Your Journey
          </p>
          <div className="text-gray-500 md:flex w-full">
            <div className="hidden md:block w-1/2 py-10 px-10  ">
              <div className="flex items-center justify-center h-full">
                <Image src={formImage} className="w-full" alt="Form Image" />
              </div>
            </div>

            <div className="w-full md:w-1/2 py-10 px-1 text-base my-auto md:px-2">
              <div className="flex flex-col text-xl gap-3 font-normal">
                <p className="py-4 px-3 text-black">
                  Fill out the form below to become part of our vibrant
                  community.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/2 w-full  px-3 mb-5">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full   pl-3 pr-3 py-2 rounded-lg border-2 border-gray-400   bg-gray-50 outline-none focus:border-indigo-500"
                        placeholder="Your Full Name "
                      />
                    </div>
                    <div className="sm:w-1/2 w-full px-3 mb-5">
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full  pl-3 pr-3 py-2 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
                        placeholder="Official Contact No."
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs italic">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/2 w-full  px-3 mb-5">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full   pl-3 pr-3 py-2 rounded-lg border-2 border-gray-400   bg-gray-50 outline-none focus:border-indigo-500"
                        placeholder="Your Designation"
                      />
                    </div>
                    <div className="sm:w-1/2 w-full px-3 mb-5">
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full  pl-3 pr-3 py-2 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
                        placeholder="Official Email ID"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs italic">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-3 mb-5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full  pl-3 pr-3 py-2 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
                      placeholder="School’s Name  "
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs italic">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="w-full px-3 mb-5">
                    <input
                      type="text"
                      id="instagramUsername"
                      name="instagramUsername"
                      value={formState.instagramUsername}
                      onChange={handleChange}
                      className="w-full  pl-3 pr-3 py-2 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
                      placeholder="School Address"
                    />
                    {errors.instagramUsername && (
                      <p className="text-red-500 text-xs italic">
                        {errors.instagramUsername}
                      </p>
                    )}
                  </div>
                  <div className=" h-fit px-3 ">
                    <select
                      value={formState.language}
                      onChange={handleChange}
                      id="language"
                      name="language"
                      class="  mb-6 text-gray-400  rounded-lg border-2 border-gray-400  bg-gray-50  pl-3 pr-5  py-2 w-full "
                    >
                      <option selected>
                        Language {`You’re`} Looking to Introduce
                      </option>
                      <option value="French"> French</option>
                      <option value="German">German </option>
                      <option value="Korean">Korean</option>
                      <option value="Spanish"> Spanish</option>
                      <option value="Mandarin"> Mandarin</option>
                      <option value="English">English </option>
                    </select>
                  </div>
                  <div className=" px-3 ">
                    <select
                      value={formState.referral}
                      onChange={handleChange}
                      id="referral"
                      name="referral"
                      class="  mb-6   rounded-lg text-gray-400  border-2 border-gray-400  bg-gray-50   pl-3 pr-5  py-2 w-full "
                    >
                      <option selected>How did you hear about us </option>
                      <option value="Website">Website</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Linekdin">Linekdin</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Medium">Medium </option>
                      <option value="Pinterest">Pinterest</option>
                      <option value="Referral">Referral</option>
                      <option value="">Other (Please Specify)</option>h
                    </select>
                  </div>
                  <div className=" px-3 mb-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs text-xl bg-primary-color border hover:bg-transparent hover:border-primary-color hover:text-primary-color   text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      Send enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolForm;
