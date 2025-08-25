import React from 'react'
import { motion} from "motion/react"
import Lastpage from './Lastpage'

const Thirdpage = () => {
  return (
    <div>
        <div style={{position: 'relative', minHeight: '70vh', paddingBottom: '100px'}}>
            <img style={{marginTop:"160px", width:"1200px", height:"400px", marginLeft:"125px", borderRadius:"30px", position:"absolute", zIndex:0}} src='src/assets/image5.jpeg'></img>
            <div>
            <motion.h1 initial={{ y:200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.8, type:"spring"}} style={{position:"absolute", marginLeft:"930px", marginTop:"250px", fontSize:"35px", zIndex:1}}>Download the app</motion.h1>
            <motion.p initial={{ y:200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.8, type:"spring", delay:0.2}}  style={{position:"absolute", marginLeft:"870px", marginTop:"330px", fontSize:"20px", width:"400px", textAlign:"center", zIndex:1}}>Lorem ipsum dolor sit amet consedolor sit amet consectetur adipisicing elit. Officiis</motion.p>
            <motion.img initial={{ y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.8, type:"spring", delay:0.4}}  style={{position:"absolute", marginLeft:"850px", marginTop:"420px", width:"430px", zIndex:1}} src='https://forums.mobirise.com/uploads/editor/hn/bjllgl5iba8y.png'></motion.img>
            </div>
        </div>
        <Lastpage/>
      
    </div>
  )
}

export default Thirdpage
