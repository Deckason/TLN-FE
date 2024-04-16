const ClassLevelCard = () => {
  return (
    <div>
      <div className="w-[548px] shadow-xl shadow-neutral-color/15 rounded-xl h-[509px] flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch h-[212px] py-[72px] bg-secondary-color rounded-xl flex-col justify-start items-center gap-2.5 flex">
          <div className="self-stretch text-center text-neutral-800 text-2xl font-bold font-['Inter']">
            C1-C2
          </div>
          <div className="self-stretch text-center text-neutral-800 text-2xl font-medium font-['Inter']">
            Advanced Classes
          </div>
        </div>
        <div className="w-[500px] h-[265px] flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch h-[140px] rounded-lg flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch h-[140px] flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch text-center text-neutral-500 text-xl font-normal font-['Inter'] leading-7">
                Advance your French skills to the highest level with our online
                advanced classes. Enhance your conversational abilities, master
                complex grammar, and increase career prospects with fluent
                proficiency in French.
              </div>
            </div>
          </div>
          <div className="self-stretch h-14 flex-col justify-center items-center gap-2.5 flex">
            <div className="self-stretch h-14 px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-teal-600 text-xl font-normal font-['Inter'] leading-7">
                Learn more
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassLevelCard;
