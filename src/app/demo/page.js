import React from 'react'
import Plan from '../../M2/Corporate-training-3plans'
import Plan3 from '../../M2/3Plans'
import Plan4 from '../../M2/SchoolB2BForm'

const page = () => {


  const CardsData = [
    {
      title: "Hello",
      titleDescription: "A1 Level",
      BoxText: "Learn More",
      Description:
        "Build a strong foundation with our A1 level course aimed to make you proficient at the basics of the language",
      listData: [
        "Develop basic reading skills to comprehend simple texts and messages.",
        "Learn to write basic sentences.and short paragraphs to express simple ideas.",
        "Introduce oneself, ask simple questions and talk about hobbies and preferences.",
        "Enhance listening skills to understand common phrases and simple conversations.",
        "Gain awareness of basic cultural norms and customs relevant to social interactions.",
        "Develop basic comprehension skills to understand straightforward spoken and written language.",
        "Access free study material worth ₹2,000/-",
      ],
    },
    {
      title: "Hello",
      titleDescription: "A1 Level",
      BoxText: "Learn More",
      Description:
        "Build a strong foundation with our A1 level course aimed to make you proficient at the basics of the language",
      listData: [
        "Develop basic reading skills to comprehend simple texts and messages.",
        "Learn to write basic sentences.and short paragraphs to express simple ideas.",
        "Introduce oneself, ask simple questions and talk about hobbies and preferences.",
        "Enhance listening skills to understand common phrases and simple conversations.",
        // "Gain awareness of basic cultural norms and customs relevant to social interactions.",
        // "Develop basic comprehension skills to understand straightforward spoken and written language.",
        "Access free study material worth ₹2,000/-",
      ],
    },
    {
      title: "Hello",
      titleDescription: "A1 Level",
      BoxText: "Learn More",
      Description:
        "Build a strong foundation with our A1 level course aimed to make you proficient at the basics of the language",
      listData: [
        "Develop basic reading skills to comprehend simple texts and messages.",
        "Learn to write basic sentences.and short paragraphs to express simple ideas.",
        "Introduce oneself, ask simple questions and talk about hobbies and preferences.",
        "Enhance listening skills to understand common phrases and simple conversations.",
        "Gain awareness of basic cultural norms and customs relevant to social interactions.",
        "Develop basic comprehension skills to understand straightforward spoken and written language.",
        "Access free study material worth ₹2,000/-",
      ],
    },
  ];
  return (<>
  
   <Plan3 data={CardsData} />
   <Plan4  />
  </>
  )
}

export default page;