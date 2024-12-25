import "@/css/Custom.css";
import girlRashi from "@/Assets/Homepage/UpComingCourseCard/girlRashi.png";
import girlIshwari from "@/Assets/Spanish/Ishwari-1 1.png";
import girlPrachi from "@/Assets/Spanish/Prachi-1.png";
import Image from "next/image";
import UpcomingBatchCard from "./UpcomingBatchCard";

const UpcomingBatches = () => {
  const CardData = [
    {
      id: 1,
      name: "Abhinav Kaushal",
      language: "French",
      img: girlRashi,
      batch: "March 20th 2024",
      seats: "07",
      timing: "SAT 8:00 pm - 10:00 pm | 2 hrs",
      certificate: "Beginners French | A1",
    },
    {
      id: 2,
      name: "T. Vijayan Joseph Scott",
      language: "French",
      img: girlIshwari,
      batch: "March 15th 2024",
      seats: "07",
      timing: "SAT 10:00 pm - 11:00 pm | 1 hrs",
      certificate: "Intermediate French | A1",
    },
    {
      id: 3,
      name: "Anchal Gupta",
      language: "French",
      img: girlPrachi,
      batch: "March 20th 2024",
      seats: "07",
      timing: "SAT 9:00 pm - 11:00 pm | 3 hrs",
      certificate: "Advanced French | A1",
    },
  ];
  return (
    <div className="my-[92px] flex justify-center flex-col items-center">
      <h1 className="my-[40px] text-center self-stretch text-stone-900 2xl:text-[40px] xl:text-[40px] max-md:text-2xl max-xl:text-5xl text-[24px] font-bold  ">
        Upcoming Batches
      </h1>
      <section
        id="upComingCourseMonths"
        className="flex items-center justify-center flex-wrap gap-[16px]  p-[8px] w-fit mx-auto rounded-lg shadow-xl shadow-neutral-color/5 mb-[32px]"
      >
        <button className="upcomingCourseActive">January</button>
        <button className="upcomingCourseDeActive">February</button>
        <button className="upcomingCourseDeActive">March</button>
      </section>
      <section
        className=" flex
      justify-center items-center w-full mx-auto lg:min-w-[1000px] 2xl:max-w-[1681px] flex-col gap-4  "
        id="UpcomingCourseCards"
      >
        <div className="  gap-[17px] max-xl:grid-cols-2 max-xl:gap-x-0 grid max-sm:grid-cols-1 grid-cols-3 xl:justify-center justify-center w-full  mb-[40px]">
          {CardData.map((cardData, i) => (
            <UpcomingBatchCard key={i} data={cardData} />
          ))}
        </div>
      </section>
      {/* load more button will load more datas */}
      <div className="w-full flex justify-center mt-4">
        {" "}
        <button className="px-[32px] shadow-md hover:shadow-xl transition duration-300  text-primary-color py-3.5 rounded-lg border border-primary-color font-medium text-2xl text justify-center focus:outline-none hover:bg-primary-color focus:bg-primary-color hover:text-white focus:text-white items-center gap-2.5 inline-flex">
          Load more
        </button>
      </div>
    </div>
  );
};

export default UpcomingBatches;
