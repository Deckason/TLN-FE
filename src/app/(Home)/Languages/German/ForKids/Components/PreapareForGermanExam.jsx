import delf from "@/Assets/GermanMainPage/Gothe.svg";

import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForGermanExam = () => {
  const levelDatas = [
    {
      title: "The Goethe-Zertifikat A1",
      img: delf,
      description:
        "Fit in Deutsch 1 is a German exam for children and beginners. It certifies that candidates have acquired very basic language skills and corresponds to the first level (A1) on the six-level scale of competence laid down in the Common European Framework of Reference for Languages (CEFR).",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for German Exams
      </div>
      <div className="xl:grid-cols-1 xl:max-w-[548px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-1 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForGermanExam;
