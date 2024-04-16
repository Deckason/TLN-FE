const BookAFreeDemoButton = () => {
  return (
    <button className="self-stretch h-[53px] flex-col justify-start items-start scale-75 md:scale-100 gap-2.5 flex">
      <div className="h-[58px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
        <div className="w-[215px] h-[30px] text-center text-neutral-50 text-2xl font-medium ">
          Book a free demo
        </div>
      </div>
    </button>
  );
};

export default BookAFreeDemoButton;
