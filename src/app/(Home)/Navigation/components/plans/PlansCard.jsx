const PlansCard = ({ cardData }) => {
  return (
    <div className="w-full max-w-sm min-h-[777px] xl:w-[375px] 2xl:w-[395px] bg-white border flex flex-col justify-around  border-gray-200   shadow-md  rounded-xl ">
      <div className="h-full">
        <h5 className="bg-primary-color flex flex-col text-[19px]/[24px] sm:text-[20px]/[25px] md:text-[21px]/[26px] lg:text-[22px]/[27px] xl:text-[23px]/[28px] 2xl:text-[24px]/[29px]  py-[22px] px-[11px] text-center rounded-t-xl text-white mb-2 font-medium ">
          {cardData.title}
        </h5>

        <p className="text-center pb-1 pt-5 px-6 text-base font-medium ">
          {cardData.Description}
        </p>

        <ul role="list" className="px-2 space-y-5 my-7">
          {cardData.listData.map((val, index) => {
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
      <div className=" flex flex-col h-fit  px-6 my-6">
        <button className="block  w-full  text-xl bg-white  hover:bg-primary-color border   hover:border-white text-primary-color border-primary-color hover:text-white  justify-center items-center py-3 my-0 focus:bg-indigo-700 text-center rounded-lg px-3  font-semibold">
          {cardData.BoxText}
        </button>
      </div>
    </div>
  );
};
export default PlansCard;
