import Image from "next/image";
import { title } from "process";
import React from "react";
import cicleSvg from "../Assets/Icons/circleTick.svg";
const PlansCard = ({ data }) => {
	// SAmple Data
	// const CardsData = [
	// 	{
	// 		title: "Starter",
	// 		BoxText: "Learn More",
	// 		Description:
	// 			"Dive into the essentials in just 10 days with our intensive workshop, covering everything from basics to practical communication.",
	// 		listData: [
	// 			"Learn greetings, self-introductions, and polite expressions.",
	// 			"Build vocabulary on colours, numbers, days, and months.",
	// 			"Engaging role-plays, games, and discussions for experiential learning.",
	// 			"Improve spoken communication through guided exercises and audio files.",
				
	// 			"Explore cultural aspects for better understanding and communication.",
	// 			" Assess participant progress and offer feedback for improvement.",
				
	// 		],
	// 	},
	// 	{
	// 		title: "Scholar",
	// 		BoxText: "Learn More",
	// 		Description:
	// 			"In just 36 classes, acquire essential A1 level language skills with our comprehensive course, covering vocabulary, grammar, and communication.",
	// 		listData: [
	// 		"Scholar's 36-class program ensures adept handling of daily tasks at A1 level.",
	// 			"Students proficiently express needs and engage in simple interactions.",
	// 			"A1 learners grasp common expressions and essential phrases.",
	// 			" Students confidently engage in basic conversations.",
	// 			"Engaging sessions and games enhance learning and curiosity.",
	// 			"Includes tracking and free study materials for improvement.",
	// 		],
	// 	},
	// 	{
	// 		title: "Stellar",
	// 		BoxText: "Learn More",
	// 		Description:
	// 			"3-year program covering A1 to B1 levels, integrating seamlessly into your curriculum.",
	// 		listData: [
	// 			"Stellar's 3-year program, spanning A1 to B1 levels, offers interactive learning with games, activities, and presentations.",
	// 			"Students understand and create text, handle travel scenarios, and articulate experiences and aspirations.",
	// 			"Students will deliver clear directives, grasp instructions, and communicate effectively.",
	// 			"Progressing to B1 level opens career prospects and equips learners for advancement.",
	// 			" Stellar instills confidence in verbal expression and proficiency in communication.",
	// 			"The program tracks progress, provides study materials, ensuring continual enhancement",
			
	// 		],
	// 	},
	// ];

	const Card = ({ cardData }) => {
		return (
			<div className="w-full max-w-sm min-h-[777px] bg-white border flex flex-col justify-around  border-gray-200   shadow-md  rounded-xl ">
				<div className="h-full">
					<div className="bg-primary-color flex flex-col  text-2xl  p-3 text-center rounded-t-xl text-white">
						<h5 className="mb-2 font-medium  ">
							{cardData.title}
							{console.log(typeof cardData + data)}
						</h5>
					</div>

					<p className="text-center pb-1 pt-5 px-6 text-base font-medium ">
						{cardData.Description}
					</p>

					<ul role="list" className="px-2 space-y-5 my-7">
						{cardData.listData.map((val, index) => {
							return (
								<>
									<li className="flex items-center" key={index}>
										<Image
											alt="circle"
											className="text-primary-color"
											src={cicleSvg}
										></Image>
										<span className="text-sm font-medium leading-tight text-gray-500   ms-3">
											{val}
										</span>
									</li>
								</>
							);
						})}
					</ul>
				</div>
				<div className=" flex flex-col h-fit  px-6 my-6">
					<button className="block  w-full  text-xl bg-white  hover:bg-primary-color border   hover:border-white text-primary-color border-primary-color hover:text-white  justify-center items-center py-3 my-0 focus:bg-indigo-700 text-center rounded-lg px-3  font-semibold">
						{cardData.BoxText}
					</button>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="bg-gray-50 py-4">
				<h4 className="py-12 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
					{" "}
					3 Plans
				</h4>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mx-auto sm:mx-10 md:mx-12 lg:mx-16  gap-4 justify-items-center">
						{data.map((val, index) => {
							return <Card cardData={val} key={index} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default PlansCard;
