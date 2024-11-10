import Heading from './Heading'
import StyledCard from './StyledCard'

const WhyChooseComp = ({cards,title="Why Choose Us?"})=>{

    return (
        <div>
            <Heading title={title}/>
            <div className='grid grid-rows-1 md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 '>
                {
                    cards.map((item,i)=>(
                        <StyledCard {...item} key={i}/>
                    ))
                }
            </div>
        </div>
    )
};


export default WhyChooseComp;