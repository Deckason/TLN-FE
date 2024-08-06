const SubscribeToOur = () => {
  return (
    <div className="w-full -mt-14">
      <div className="w-full  bg-teal-600 min-h-[380px] relative flex justify-center items-center">
        <div className=" bg-teal-600 absolute w-full flex-col justify-center items-center gap-8 inline-flex">
          <div className="text-center text-white text-[24px]/[29px] sm:text-[40px]/[55px] md:text-[45px]/[60px] lg:text-[50px]/[65px] xl:text-[55px]/[70px] 2xl:text-[60px]/[72px] font-bold">
            Subscribe to our newsletter
          </div>
          <div className="justify-center items-end gap-8 flex-wrap flex ">
            <div className="">
              <input
                required
                type="email"
                placeholder="Email ID"
                className="h-[39px] xl:h-[60px] w-[309px] sm:h-12 mx-2 w-82 px-4 py-[24px] text-[18px]/[24px] md:text-[24px]/[48px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-end gap-2.5 flex grow focus:outline-none shrink text-neutral-400 max-md:h-[39px] font-normal "
              />
            </div>
            <button className="h-[39px] xl:h-[60px] w-[180px] px-8 py-[24px] bg-neutral-50 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-center text-teal-600 text-2xl font-medium ">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeToOur;
