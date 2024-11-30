import React from 'react'
import "./howitworks.css"
// import Button from '../join/Button'
import Btn from './btn'
import home from "/src/assets/home.png"
import welcome from "/src/assets/welcome.png"
import google from '/src/assets/google.png'
import apple from '/src/assets/apple.png'
import Pages from './Pages'
const HowItWorks = () => {
  return (
    <div id='work'>
      <h3>How it <span>Works</span></h3>
      <p>“VoteCity is easy to use! Here’s how you can start making a difference in your community.”</p>
      <div id='step1'>
        <p><span>Step 1:</span> Download App <br /> "Available on both Andriod and IOS."</p>
        <div id="body">
          <Btn idd={"idd"}  fon=
            {'none'} the={"rgba(224, 224, 224, 1)"} bod={"1px solid rgba(224, 224, 224, 1)"} href={"/#"} id={"id"} img={apple} text={"Download"}></Btn>
          <Btn img={google} idd={"idd"} bod={"1px solid rgba(224, 224, 224, 1)"} fon=
            {'none'} the={"rgba(224, 224, 224, 1)"} href={"/#"}
            text={"Download"}></Btn>
        </div>
      </div>
      <Pages pp={"p"} step={"Step 2"} textSt={"Create Your Account  "} ttt={"Sign up in minutes"} img={welcome}/>
      <Pages pp={"p"} step={"Step 3"} textSt={"Explor and Engage"} ttt={"“Join polls, donate, register for events,"} img={home}/>
    </div>
  )
}

export default HowItWorks