import React from 'react'
import "./features.css"
import TheFeat from './TheFeat'
import img from "/src/assets/img1.png"
import img2 from "/src/assets/img2.png"
import img3 from "/src/assets/img3.png"
const Features = () => {
  return (
    <>
    
    <div id="feat">
    <h4>Features</h4>
        <TheFeat text={"Pull"}span={"Voting:"} img={img} text2={"Create your own polls, cast your vote, join the conversation and make an impact"}/>
        <TheFeat text={"Event"}span={"Booking:"} img={img2} text2={"“Discover, organize, and register for local events. Stay connected!”"}/>
        <TheFeat text={"Project"}span={"Funding:"} img={img3} text2={"Bring your idea to life, get fun ding and donate to support causes that matters to you"}/>
    </div>
    <br /> <br /><br />
    </>
  )
}

export default Features