const LanguageLessons = ({ LanguageLesson }) => {
  return (
    <div className="mt-[112px]  flex justify-center">
      <div className="max-w-[1680px] h-full min-h-[380px] flex-col justify-start mx-auto items-center gap-12 inline-flex">
        <div className="text-black max-sm:text-center xl:text-[60px] 2xl:text-[60px] font-bold max-lg:text-2xl">
          Online language lessons and classes
        </div>
        <div className="justify-center items-start gap-4 flex 2xl:flex-wrap max-sm:flex-col">
          {LanguageLesson?.map((card, i) => (
            <div
              key={i}
              className="w-full 2xl:w-[405px] max-sm:w-[330px] mx-auto max-sm:pb-0  rounded-lg my-4   flex-col justify-start max-sm:justify-center items-center inline-flex"
            >
              <div className="self-stretch px-4  rounded-tl-lg rounded-tr-lg max-sm:text-center justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-stone-900 2xl:text-xl font-bold text-sm">
                  {card.title}
                </div>
              </div>
              <div className="self-stretch grow shrink basis-0 px-4 flex-col lg:min-h-[230px]  justify-start max-sm:text-center items-center gap-2 flex">
                <div className="list-none self-stretch grow shrink basis-0 text-sm text-neutral-500 2xl:text-xl  font-normal  underline leading-7">
                  {card.list.map((list) => (
                    <li key={list}>
                      <a>{list}</a>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageLessons;
