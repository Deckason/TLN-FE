import Image from "next/image";
import { title } from "process";
import React from "react";

const PlansCard = ({ data }) => {

///// Sample  Data

		// const CardsData = [
	// 	{
	// 	  title: "Hello",
	// 	  titleDescription: "A1 Level",
	// 	  BoxText: "Duration - 50 Classes",
	// 	  Description:
	// 		"Build a strong foundation with our A1 level course aimed to make you proficient at the basics of the language",
	// 	  listData: [
	// 		"Develop basic reading skills to comprehend simple texts and messages.",
	// 		"Learn to write basic sentences.and short paragraphs to express simple ideas.",
	// 		"Introduce oneself, ask simple questions and talk about hobbies and preferences.",
	// 		"Enhance listening skills to understand common phrases and simple conversations.",
	// 		"Gain awareness of basic cultural norms and customs relevant to social interactions.",
	// 		"Develop basic comprehension skills to understand straightforward spoken and written language.",
	// 		"Access free study material worth ₹2,000/-",
	// 	  ],
	// 	},
	// 	{
	// 	  title: "Hello",
	// 	  titleDescription: "A1 Level",
	// 	  BoxText: "Duration - 50 Classes",
	// 	  Description:
	// 		"Build a strong foundation with our A1 level course aimed to make you proficient at the basics of the language",
	// 	  listData: [
	// 		"Develop basic reading skills to comprehend simple texts and messages.",
	// 		"Learn to write basic sentences.and short paragraphs to express simple ideas.",
	// 		"Introduce oneself, ask simple questions and talk about hobbies and preferences.",
	// 		"Enhance listening skills to understand common phrases and simple conversations.",
	// 		// "Gain awareness of basic cultural norms and customs relevant to social interactions.",
	// 		// "Develop basic comprehension skills to understand straightforward spoken and written language.",
	// 		"Access free study material worth ₹2,000/-",
	// 	  ],
	// 	},
	// 	{
	// 	  title: "Hello",
	// 	  titleDescription: "A1 Level",
	// 	  BoxText: "Duration - 50 Classes",
	// 	  Description:
	// 		"Build a strong foundation with our A1 level course aimed to make you proficient at the basics of the language",
	// 	  listData: [
	// 		"Develop basic reading skills to comprehend simple texts and messages.",
	// 		"Learn to write basic sentences.and short paragraphs to express simple ideas.",
	// 		"Introduce oneself, ask simple questions and talk about hobbies and preferences.",
	// 		"Enhance listening skills to understand common phrases and simple conversations.",
	// 		"Gain awareness of basic cultural norms and customs relevant to social interactions.",
	// 		"Develop basic comprehension skills to understand straightforward spoken and written language.",
	// 		"Access free study material worth ₹2,000/-",
	// 	  ],
	// 	},
	//   ];



	const Card = ({ cardData }) => {
		return (
			<div className="w-full max-w-sm  bg-white border  border-gray-200   shadow-md  rounded-xl">

				
				<div className="bg-primary-color flex flex-col  text-2xl  p-3 text-center rounded-t-xl text-white">
					<h5 className="mb-2 font-medium  ">
						{cardData.title}
						{console.log(typeof cardData + data)}
					</h5>
					<p>({cardData.titleDescription}) </p>
				</div>
				<div className="flex items-center px-6">
					<button className="block  w-full  text-xl bg-white  hover:bg-primary-color border   hover:border-white text-primary-color border-primary-color hover:text-white  justify-center items-center py-3 my-6 focus:bg-indigo-700 text-center rounded-lg px-3  font-semibold">
						{cardData.BoxText}
					</button>
				</div>

				<p className="text-center pb-1 px-6 text-base font-medium ">
					{cardData.Description}
				</p>

				<ul role="list" className="px-2 space-y-5 my-7">
					{cardData.listData.map((val,index) => {
						return (
							<>
								<li className="flex items-center" key={index}>
									<svg
										className="flex-shrink-0 w-4 h-4 ms-4 text-primary-color "
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
									</svg>
									<span className="text-base font-medium leading-tight text-gray-500   ms-3">
										{val}
									</span>
								</li>
							</>
						);
					})}
				</ul>
			</div>
		);
	};

	return (
		<>
			<div className="bg-gray-50 py-4">
			<h4 className="py-12 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center"> 3 Plans</h4>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mx-auto sm:mx-10 md:mx-12 lg:mx-16  gap-4 justify-items-center">
						{data.map((val,index)=>{
								return(	<Card cardData={val} key={index} />)
						})}
					
					</div>
				</div>
			</div>
		</>
	);
};

export default PlansCard;
