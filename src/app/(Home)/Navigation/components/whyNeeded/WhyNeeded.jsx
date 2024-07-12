import WhyCard from "./WhyCard";
const WhyNeeded = ({ institute, cardInfo }) => {
  return (
    <div className="pb-[50px]">
      <h2 className="text-[60px]/[72.61px] font-bold text-center mt-[120px] mb-[67px]">
        Why {institute} need foreign languages?
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {cardInfo.map((card) => {
          return (
            <WhyCard
              id={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default WhyNeeded;
