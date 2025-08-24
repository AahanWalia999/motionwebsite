import React, { useEffect } from 'react'
import { motion} from "motion/react"
import Secondpage from './Secondpage'


const Firstpage = () => {
  return (
    <div>
      <div style={{position: 'relative', minHeight: '100vh', paddingBottom: '100px'}}>
        <div>
          <a href='#'><img style={{position:"absolute", zIndex:3, marginLeft:"1300px", marginTop:"50px"}} width={30} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'></img></a>
          <motion.h2 initial={{y:-80}} animate={{y:0}} transition={{ duration:1, type:"spring"}} style={{position:"absolute", zIndex:3, color:"orange", margin:"55px"}}><b>CODERS</b></motion.h2>
           <motion.h2 initial={{y:-80}} animate={{y:0}} transition={{ duration:1, type:"spring"}} style={{position:"absolute", zIndex:3, color:"white", margin:"55px", marginLeft:"162px"}}><b>COFFEE.</b></motion.h2>
           <motion.h1 initial={{x:-20, y:-150}} whileInView={{x:0, y:0}} transition={{duration:0.5, delay:0.3 }} style={{position:"absolute", zIndex:2, marginLeft:"720px", fontSize:"150px", color:"grey"}}>BLVCK</motion.h1>
           <motion.h1 initial={{x:-20, y:-350}} whileInView={{x:0, y:0}} transition={{duration:0.5, delay:0.5 }} style={{position:"absolute", zIndex:2, marginLeft:"715px", fontSize:"180px", marginTop:"150px", color:"GrayText"}}>Tumbler</motion.h1>
           <motion.h1 initial={{ x:-386}} whileInView={{ x:0}} transition={{delay:1.5, type:"spring", duration:1}} style={{position:"absolute", zIndex:4, margin:"10%", marginTop:"220px", fontSize:"70px", color:"wheat"}}>BLVCK</motion.h1>
           <motion.h1 initial={{x:-438}} whileInView={{x:0}} transition={{delay:1.5, type:"spring", duration:1.5}} style={{position:"absolute", zIndex:4, margin:"10%", marginTop:"300px", fontSize:"80px", color:"wheat"}}>Tumbler</motion.h1>
        </div>
        <div>
          <motion.div initial={{x:-420}} whileInView={{x:0}} transition={{delay:2 , duration:0.5, type:"spring"}} style={{position:"absolute", zIndex:6,marginTop:"500px", marginLeft:"70px", width:"350px", color:"wheat" }}>
            <h2>Black Lifestyle Lover,</h2>
            <br></br>
            <p style={{wordSpacing:"2px", lineHeight:2}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus</p>
          </motion.div>
          <motion.div initial={{x:490}} whileInView={{x:0}} transition={{delay:2 , duration:0.5 ,type:"spring"}} style={{position:"absolute", zIndex:6,marginTop:"500px", marginLeft:"950px", width:"350px", color:"wheat" }}>
            <h2>Black Tumbler</h2>
            <br></br>
            <p style={{wordSpacing:"2px", lineHeight:2}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem </p>
          </motion.div>
          <div style={{backgroundColor:"#333333", position:"absolute", zIndex:5, width:"230px", height:"200px", marginTop:"475px", marginLeft:"50px"}}></div>
          <div style={{backgroundColor:"#333333", position:"absolute", zIndex:5, width:"230px", height:"200px", marginTop:"475px", marginLeft:"1110px"}}></div>
        </div>
         <img style={{ width:"100%", height:"100%", zIndex:1, position:"absolute"}} src='src/assets/image.jpeg'></img>
         <motion.img initial={{scale:0}} animate={{scale:1}} transition={{duration:1, type:"spring"}} style={{ zIndex:22, position:"absolute", margin:"5%", marginLeft:"530px"}} src='https://coders-coffee.netlify.app/assets/black-Dl2umTo2.png'></motion.img>
         <motion.img initial={{scale:0}} whileInView={{scale:1}} transition={{delay:1, duration:1, type:"spring"}} style={{ zIndex:21, position:"absolute", margin:"10%", marginLeft:"760px", width:"190px"}} src='https://freepngimg.com/save/30004-circle-image/1800x1800'></motion.img>
         
      </div>
      
      <Secondpage/>
       
      
    </div>
    
  )
}

export default Firstpage
