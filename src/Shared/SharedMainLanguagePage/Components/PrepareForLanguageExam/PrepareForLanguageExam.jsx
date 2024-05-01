import PreapareForExamCard from "./PreapareForExamCard";

const PrepareForLanguageExam = ({ LanguageExams }) => {
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for {LanguageExams?.Language} Exams
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
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
