import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForExam = (data) => {
  return (
    <div className="my-10">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for French Exams
      </div>
      <div className="flex flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-fit lg:gap-[18px] items-center mt-[48px]">
        {data.data.map((data, index) => (
          <div key={index} className="max-w-[548px]">
            <PreapareForExamCard data={data} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreapareForExam;
