const Banner = ({title , description,buttonText="Apply Now"}) => {
  return <div className="flex flex-col md:flex-row p-24 pb-0 gap-12">
  <div className="flex flex-col items-start gap-5">
      <p className="text-[40px] font-bold">
          {title}
      </p>
      <p className="text-[15px]">{description}</p>
      <button className="text-white bg-primary-color py-[14px] px-[32px] rounded-md">{buttonText}</button>
  </div>
  <div>   
      <div className="min-w-[300px] min-h-[300px] bg-gray-300"></div>
  </div>
</div>
};

export default Banner;
