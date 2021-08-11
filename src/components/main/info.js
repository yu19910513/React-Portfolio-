import React from 'react';
import headphoto from '../../img/rex.jpeg';

const style = {
    headerPhoto: {
        borderRadius: '50%',
        width:'15%',
        height:'15%'
        }
}
export default function Info() {
  return (
<div className="container text-center mt-5 mb-5 bigHead">
<img src={headphoto} alt="portfolio" className="headerPhoto mb-4" style={style.headerPhoto}/>
    <h1>Dr. Rex Yu, PharmD</h1>
    Over the past 10 years, I have had the pleasure of working in the clinical frontline providing healthcare services. Yet, as the healthcare industry has been transforming rapidly over the COVID-19 pandemic, patients rely on digital resources for medical opinions more than ever. Unfortunately, healthcare information for the general public on the internet is often inaccurate, and the misinformation may lead to patient harm and significant expense of healthcare dollars. Technological implementation has been proven effective for error prevention and medication stewardship. Healthcare informatics however remains untouched. Therefore, I urged myself to learn the computing skills in an agile manner. My goal is to excel in the skills of programming, troubleshooting, and software development, and be able to deliver meaningful projects across two professions.
    I am self-driven and detail-oriented. With strong planning and troubleshooting skills, I was able to complete all of assignements and projetcs on time and go beyond what was required throughout the boot camp. I am eager to learn new skills and computer languages, and open for any constructive criticism. For the future, the goal is to be a healthcare engineer.

</div>
)
        }
