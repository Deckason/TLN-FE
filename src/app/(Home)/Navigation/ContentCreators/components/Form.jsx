import React from 'react'
import Image from "next/image";
import formImage from "../../../../../Assets/ContentCreators/form.png";

const Form = () => {
  return (
    <>
    <div className="min-w-screen min-h-screen  flex items-center justify-center px-1 sm:px-20 py-5">
				<div className="  w-full overflow-hidden">
					<p className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl  text-center font-bold">
						Start Your Journey
					</p>
					<div className="text-gray-500 md:flex w-full">
						<div className="hidden md:block w-1/2 py-10 px-10  ">
							<div className="flex items-center justify-center h-full">
								<Image
									src={formImage}
									className="w-full"
									alt="Form Image"
								/>
							</div>
						</div>

						<div className="w-full md:w-1/2 py-10 px-1 text-base my-auto md:px-2">
							<div className="flex flex-col text-xl gap-3 font-normal">
								<p className="py-4 px-3 text-black">
									Fill out the form below to become part of our vibrant
									community.
								</p>
								<div className="flex flex-col sm:flex-row">
									<div className="sm:w-1/2 w-full  px-3 mb-5">
										<input
											type="text"
											className="w-full   pl-10 pr-3 py-1.5 rounded-lg border-2 border-gray-400   bg-gray-50 outline-none focus:border-indigo-500"
											placeholder="Full Name "
										/>
									</div>
									<div className="sm:w-1/2 w-full px-3 mb-5">
										<input
											type="text"
											className="w-full  pl-10 pr-3 py-1.5 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
											placeholder="Contact No."
										/>
									</div>
								</div>

								<div className="w-full px-3 mb-5">
									<input
										type="email"
										className="w-full  pl-10 pr-3 py-1.5 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
										placeholder="Email Address "
									/>
								</div>

								<div className="w-full px-3 mb-12">
									<input
										type="password"
										className="w-full  pl-10 pr-3 py-1.5 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
										placeholder="Instagram Username"
									/>
								</div>

								<div className=" ">
									<div className=" px-3 mb-5">
										<button className="block w-full max-w-xs text-xl bg-primary-color border hover:bg-transparent hover:border-primary-color hover:text-primary-color  focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default Form