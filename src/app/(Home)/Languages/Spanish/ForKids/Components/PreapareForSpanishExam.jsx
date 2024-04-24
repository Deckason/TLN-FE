import delf from "@/Assets/Spanish/DELE.png";

import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForSpanishExam = () => {
  const levelDatas = [
    {
      title: "DELE Junior",
      img: delf,
      description:
        "We specialize in DELE Junior exam training for young learners, providing tailored courses for kids to excel. With experienced instructors, personalized attention, and engaging activities, we empower children for success.   ",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Spanish Exams
      </div>
      <div className="xl:grid-cols-1 xl:max-w-[548px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-1 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForSpanishExam;
