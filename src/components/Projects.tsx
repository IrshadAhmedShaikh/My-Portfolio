import React from 'react'
import { Heading } from './Heading'
import { Card } from './Card'



const data=[
    {
    id:0,
    title:"Todo List",
    desc:"A React & Typescript based app for managigng and organizing your tasks efficiently",
    img:"/pic todo.jpg",
    tags:["React","Node","CSS","Typescript"],
},
{
    id:1,
    title:"Countdown Timer",
    desc:"A Next js and Typescript powered website to track time with an interactive countdown features",
    img:"/pic counter.jpg",
    tags:["Next.js","Node","CSS","typescript"]
},
{
    id:2,
    title:"Weather Widget",
    desc:"A Next.js and typescript based tools for fetching and displaying real-time weather data ",
    img:"/pic weather.jpg",
    tags:["Next","Node","CSS","typescript"]
},
{
    id:3,
    title:"corrency-converter project",
    img:"/pic weather.jpg",
    desc:"A simpple HTML and typescript powered tools for converting currencies with real time rate",
    tags:["HTML","Node","CSS","typescript"]
},
{
id:4,
title:"simple calculator project",
img:"/calculator.webp",
desc:"A basic HTML and CSS and typecsript calculator for performing essential arithmetic operations",
tags:["HTML","Node","CSS","typescript"]
}



]

export const Projects = () => {
  return (
    <div id='projects' className='container pt-10' >

        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=>(<Card

            key={el.id}
            img={el.img}
            title={el.title}
            desc={el.desc}
        
            tags={el.tags}
                
                
                
                
                />))}

        </div>
        

    </div>
  )
}


  

