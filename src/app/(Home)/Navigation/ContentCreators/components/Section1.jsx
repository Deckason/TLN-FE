import React from "react";
import img from "../../../../../Assets/ContentCreators/img.png";
import Image from "next/image";

const Section1 = () => {
	return (
		<>
         <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 text-center py-10">   
       {`  How it works?  `}
      </p>
			<div className="sm:pb-20 pt-8 pb-8">
				<div className="container mx-auto sm:px-16 px-5 ">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
						{/* <!-- Step 1 --> */}
						<div className="flex flex-col items-center ">
							<div className="flex items-center justify-center h-fit w-full px-8">
								<Image src={img} className="w-full" alt="Form Image" />
							</div>
							<div className="bg-white  rounded-lg border border-primary-color text-xl h-fit  mt-5   text-center">
								<h5 className="bg-primary-color py-3 mb-5 text-white"> STEP 1</h5>
								<p className="text-gray-600 px-6 text-center h-28">
									Connect with us by filling out our simple application
									form on the website.
								</p>
							</div>
						</div>
						{/* <!-- Step 2 --> */}

                        <div className="flex flex-col items-center ">
							<div className="flex items-center justify-center h-fit w-full px-8">
								<Image src={img} className="w-full" alt="Form Image" />
							</div>
							<div className="bg-white  rounded-lg  border border-primary-color text-xl h-fit  mt-5   text-center">
								<h5 className="bg-primary-color py-3 mb-5 text-white"> STEP 1</h5>
								<p className="text-gray-600 px-6 text-center h-28">
									Connect with us by filling out our simple application
									form on the website.
								</p>
							</div>
						</div>
						{/* <!-- Step 3 --> */}
						<div className="flex flex-col items-center">
                        <div className="flex flex-col items-center ">
							<div className="flex items-center justify-center h-fit w-full px-8">
								<Image src={img} className="w-full" alt="Form Image" />
							</div>
							<div className="bg-white  rounded-lg border border-primary-color text-xl h-fit  mt-5   text-center">
								<h5 className="bg-primary-color py-3 mb-5 text-white"> STEP 1</h5>
								<p className="text-gray-600 px-6 text-center h-28">
									Connect with us by filling out our simple application
									form on the website.
								</p>
							</div>
						</div>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section1;
