const SubscribeToOur = () => {
  return (
    <div className="w-full -mt-14">
      <div className="w-full  bg-teal-600 min-h-[380px] relative flex justify-center items-center">
        <div className=" bg-teal-600 absolute w-full flex-col justify-center items-center gap-8 inline-flex">
          <div className="text-center text-white text-5xl font-bold max-lg:text-2xl">
            Subscribe to our newsletter
          </div>
          <div className="justify-center items-end gap-8 flex-wrap flex ">
            <div className="">
              <input
                required
                type="email"
                placeholder="Email ID"
                className="h-[39px] w-[309px] sm:h-12 mx-2 w-82 px-16 py-[24px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-end gap-2.5 flex grow focus:outline-none  shrink text-neutral-400 max-md:h-[39px] text-xl font-normal  leading-[34px]"
              />
            </div>
            <button className="w-[180px] max-sm:scale-90 px-8 py-2.5 bg-neutral-50 rounded-lg justify-center items-center gap-2.5 flex">
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
