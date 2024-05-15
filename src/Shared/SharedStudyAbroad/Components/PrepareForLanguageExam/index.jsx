import PreapareForExamCard from "./PreapareForExamCard";

const PrepareForLanguageExam = ({ LanguageExams }) => {
  return (
    <div>
      <div className="text-black max-md:text-2xl lg:text-4xl max-lg:text-3xl xl:text-[60px] my-12 text-center font-bold ">
        Prepare for {LanguageExams?.Language} Exams
      </div>
      <div
        className={`${
          LanguageExams?.CardData?.length === 3 && "xl:grid-cols-3"
        } ${LanguageExams?.CardData?.length === 2 && "xl:grid-cols-2"} ${
          LanguageExams?.CardData?.length === 1 && "xl:flex max-lg:grid-cols-1"
        }   2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 max-md:px-4 px-5 mx-auto w-full lg:gap-[18px] lg:grid-cols-2 grid items-center mt-[48px] `}
      >
        {LanguageExams?.CardData?.map((data, index) => (
          <div key={index} className="max-w-[548px]">
            <PreapareForExamCard data={data} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrepareForLanguageExam;
