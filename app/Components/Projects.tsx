import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
{
    id : 0,
    title : "CV Resume",
    desc : " A react & typescript  based app for managing your task efficiently.",
    img : "/pic2.png",
    tags :["React" , "Node" , "Css" , "Typescript"],

},
{
 id : 1,
 title : "Countdown Timer",
 desc : " A Html css & typescript  powered website to track time  with an interactive  countdown feature",
 img : "/timer.png",
 tags : ["Html" , "Node" , "CSS" , "typescript"],
},
{
  id : 2,
  title : "Calculator",
  desc : "Creating calculators with HTML, CSS, and JavaScript allows me to build interactive and functional tools for a variety of applications." ,
  img : "/pic4.png",
  tags : ["Html" , "Css" , "javascript" , "Node"],
},
];


const Projects = () => {

  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My projects' />
      <div className='grid gap-10 xl:gap xl:gap-y-10 md-grid-cols-3 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
      
    </div>
  )
}

export default Projects
