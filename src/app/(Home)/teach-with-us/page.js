import States from "../../../Shared/SharedAdultsPage/Components/States";


const TeachWithUs = ()=>{
    

    return (
        <div>
            {/* hero section */}
            <div className="flex p-24 pb-0 gap-12">
                <div className="flex flex-col items-start gap-5">
                    <p className="text-[40px] font-bold">
                        Teach With Us!
                    </p>
                    <p className="text-[15px]">Become a Teacher with The Language Network! Share your expertise and passion while reaping the rewards of spreading knowledge. Join our team of 200+ expert trainers and make a difference from the comfort of your home. Empower others, expand your horizons, and embark on a fulfilling journey with The Language Network!</p>
                    <button className="text-white bg-primary-color py-[14px] px-[32px] rounded-md">Apply Now</button>
                </div>
                <div>
                    <div className="min-w-[300px] min-h-[300px] bg-gray-300"></div>
                </div>
            </div>
            {/* stats */}
            <div className="px-12">
                <States/>
            </div>
        </div>
    )
}

export default TeachWithUs;