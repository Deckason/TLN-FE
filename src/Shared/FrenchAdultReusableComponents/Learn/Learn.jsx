const Learn = (LearnData) => {
  return (
    <div>
      <div className="w-full bg-primary-color max-sm:h-[200px] h-[380px] relative">
        <div className=" h-full flex items-center text-center text-white text-5xl max-sm:text-2xl max-lg:text-4xl font-bold justify-center">
          {LearnData.data}
        </div>
      </div>
    </div>
  );
};

export default Learn;
