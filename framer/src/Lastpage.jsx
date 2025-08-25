import React from 'react'
import { motion} from "motion/react"

const Lastpage = () => {
  return (
    <div style={{backgroundColor:"orange", width:"100%", height:"350px"}}>
        <div style={{ textAlign:"center", color:"white", display:"flex", justifyContent:"space-evenly"}}>
            <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, type:"spring"}} style={{marginTop:"60px"}}>
                <h1>Coders Cafe</h1>
                <br/>
                <p style={{width:"400px", textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores</p>
                <br/>
                <span>+1 (123) 456-7890</span>
                <h3>Gurugram , haryana</h3>
                </motion.div>
            <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, type:"spring", delay:0.3}} style={{marginTop:"60px"}}>
                <h1>Quick Links</h1>
                <br/>
                <ul style={{fontSize:"17px"}}>
                    <li style={{marginTop:"10px"}}>Home</li>
                    <li style={{marginTop:"10px"}}>About</li>
                    <li style={{marginTop:"10px"}}>Contact us</li>
                    <li style={{marginTop:"10px"}}>Privacy Policy</li>
                </ul>
                </motion.div>
            <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, type:"spring", delay:0.6}} style={{marginTop:"60px"}}>
                <h1>Payment Methods</h1>
                <img style={{marginTop:"30px"}} src='https://www.hostagle.com/wp-content/uploads/2022/12/payments-removebg-preview.png' width={400}></img>
                </motion.div>
                 
            


        </div>
        <br/><br/>
        <hr style={{width:"100%", height:"1px", backgroundColor:"white"}}></hr>
        <h2 style={{color:"white", textAlign:"center", fontSize:"17px", marginTop:"15px"}}>Copyright © 2024 Company Name. All rights reserved.</h2>
      
    </div>
  )
}

export default Lastpage
