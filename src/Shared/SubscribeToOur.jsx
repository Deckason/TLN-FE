const SubscribeToOur = () => {
  return (
    <div className="w-full -mt-14">
      <div className="w-full bg-teal-600 min-h-[380px] relative flex justify-center items-center">
        <div className=" bg-teal-600 absolute flex-col justify-center items-center gap-8 inline-flex">
          <div className="text-center text-white text-5xl font-bold max-lg:text-2xl">
            Subscribe to our newsletter
          </div>
          <div className="justify-center items-end gap-8 flex-wrap flex ">
            <div className="">
              <input
                required
                type="email"
                placeholder="Email ID"
                className="h-12 max-sm:w-full mx-6 px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center gap-2.5 flex grow focus:outline-none  shrink basis-0 text-neutral-400 max-md:h-[39px] text-xl font-normal  leading-[34px]"
              />
            </div>
            <button className="w-[180px] max-sm:scale-90 px-8 py-3.5 bg-neutral-50 rounded-lg justify-center items-center gap-2.5 flex">
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
