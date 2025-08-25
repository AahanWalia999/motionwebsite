import React from 'react'
import Thirdpage from './Thirdpage'
import { motion} from "motion/react"

const Secondpage = () => {
  return (
    <div>
        <div style={{textAlign:"center"}}>
            <motion.h1 initial={{y:70, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.4, ease:"easeIn"}} style={{marginTop:"70px"}}>Fresh and <span style={{color:"orange"}}>Tasty Coffee</span></motion.h1>
            <motion.p initial={{scale:0.3, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.6, type:"spring", delay:0.5}} style={{marginTop:"10px", fontSize:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum <br/> ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.</motion.p>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"25px", textAlign:"center"}}>
            <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, type:"spring", delay:1}}>
                <motion.img whileHover={{scale:1.1}} src='https://coders-coffee.netlify.app/assets/coffee1-Cf01rm9W.png' width={250}></motion.img>
                <h2 style={{color:"orange", marginTop:"15px"}}>Black Coffee</h2>
                <p>lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
            </motion.div>
            <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, type:"spring", delay:1.2}}>
                <motion.img whileHover={{scale:1.1}} src='https://coders-coffee.netlify.app/assets/coffee3-DipYPMyo.png' width={250}></motion.img>
                <h2 style={{color:"orange",marginTop:"15px"}}>Hot Coffee</h2>
                <p>lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
            </motion.div>
            <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, type:"spring", delay:1.4}}>
                <motion.img whileHover={{scale:1.1}} src='https://coders-coffee.netlify.app/assets/coffee1-Cf01rm9W.png' width={250}></motion.img>
                <h2 style={{color:"orange",marginTop:"15px"}}>Cold Coffee</h2>
                <p>lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
            </motion.div>
        </div>
        <div style={{marginTop:"150px", fontStyle:"normal", display:"flex"}}>
          <motion.div transition={{type:"spring"}} style={{marginLeft:"80px"}}>
            <motion.h1 initial={{y:150, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.7, type:"spring", ease:"easeIn"}} >Buy our products<br/> from anywhere</motion.h1>
            <form style={{marginTop:"25px"}}>
              <motion.input initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.3, delay:0.2}} style={{width:"200px", height:"30px", paddingLeft:"10px"}} type='text' placeholder='Name'></motion.input>
              <motion.input initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.3, delay:0.2}}  style={{width:"260px", height:"30px", marginLeft:"20px",paddingLeft:"10px"}} type='text' placeholder='Email'></motion.input>
              <br/><br/>
              <motion.input initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.3, delay:0.4}} style={{width:"300px", height:"30px",paddingLeft:"10px"}} type='text' placeholder='Country'></motion.input>
              <motion.input initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.3, delay:0.4}} style={{width:"160px", height:"30px", marginLeft:"20px",paddingLeft:"10px"}} type='text' placeholder='Zipcode'></motion.input>
              <br/><br/><br/>
              <motion.button initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.3, delay:0.6}} style={{textAlign:"center", height:"30px", width:"510px", backgroundColor:"orange", borderRadius:"7px", color:"white", fontSize:"15px", border:"none"}}>Order Now</motion.button>
            </form>
          </motion.div>
          <motion.img initial={{scale:0.3, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.5, delay:0.8, type:"spring"}} style={{marginLeft:"230px", width:"500px", height:"270px"}} src='https://coders-coffee.netlify.app/assets/world-map-CpXg2haz.png'></motion.img>
        </div>
        <Thirdpage/>
       
    </div>
  )
}

export default Secondpage

