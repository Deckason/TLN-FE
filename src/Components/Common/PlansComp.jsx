import Heading from './Heading'

const CourseCard = ({ 
    title, 
    level, 
    duration, 
    description, 
    bulletPoints, 
    buttonText = "Learn more" 
  }) => {
    return (
      <div className="max-w-sm  bg-white rounded-lg shadow-md  text-center border  border-primary-color flex flex-col">
        {/* Title Section */}
        <div className="bg-primary-color text-white rounded-t-lg py-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm">({level})</p>
        </div>
  
        {/* Duration Section */}
        {duration && <div className="my-4 flex justify-center">
          <p className="text-primary-color font-semibold w-fit border border-primary-color rounded-md p-2">{duration}</p>
        </div>}
  
        {/* Description Section */}
        <p className="text-sm text-black mb-4 font-normal p-4">{description}</p>
  
        {/* Bullet Points */}
        <ul className="text-left text-sm text-gray-700 space-y-3 p-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-6 h-6 text-white font-bold bg-primary-color p-1 shrink-0 rounded-full flex justify-center items-center">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
  
        {/* Button Section */}
        <button className="mt-auto w-fit self-center mb-6 border border-primary-color text-primary-color py-2 px-6 rounded-md hover:bg-opacity-90">
          {buttonText}
        </button>
      </div>
    );
  };
  

const PlansComp = ({cardsData})=>{


    return (
        <div>
            <Heading title={"3 Plans"}/>
            {/* cards */}
            <div className='flex flex-col md:flex-row gap-4 justify-center p-4 md:p-0'>
                {
                    cardsData.map((item,i)=>(
                        <CourseCard title={item.title} level={item.level} duration={item.duration} description={item.description} bulletPoints={item.bulletPoints} key={i}/>
                    ))
                }
            </div>
        </div>
    )
};

export default PlansComp;