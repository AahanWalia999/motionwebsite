import React from 'react'

const Secondpage = () => {
  return (
    <div>
        <div style={{textAlign:"center"}}>
            <h1 style={{marginTop:"70px"}}>Fresh and <span style={{color:"orange"}}>Tasty Coffee</span></h1>
            <p style={{marginTop:"10px", fontSize:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum <br/> ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.</p>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"25px", textAlign:"center"}}>
            <div>
                <img src='https://coders-coffee.netlify.app/assets/coffee1-Cf01rm9W.png' width={250}></img>
                <h2 style={{color:"orange", marginTop:"15px"}}>Black Coffee</h2>
                <p>lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
            </div>
            <div>
                <img src='https://coders-coffee.netlify.app/assets/coffee3-DipYPMyo.png' width={250}></img>
                <h2 style={{color:"orange",marginTop:"15px"}}>Hot Coffee</h2>
                <p>lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
            </div>
            <div>
                <img src='https://coders-coffee.netlify.app/assets/coffee1-Cf01rm9W.png' width={250}></img>
                <h2 style={{color:"orange",marginTop:"15px"}}>Cold Coffee</h2>
                <p>lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
            </div>
        </div>
        <div style={{marginTop:"150px", fontStyle:"normal", display:"flex"}}>
          <div style={{marginLeft:"80px"}}>
            <h1>Buy our products<br/> from anywhere</h1>
            <form style={{marginTop:"25px"}}>
              <input style={{width:"200px", height:"30px", paddingLeft:"10px"}} type='text' placeholder='Name'></input>
              <input style={{width:"260px", height:"30px", marginLeft:"20px",paddingLeft:"10px"}} type='text' placeholder='Email'></input>
              <br/><br/>
              <input style={{width:"300px", height:"30px",paddingLeft:"10px"}} type='text' placeholder='Country'></input>
              <input style={{width:"160px", height:"30px", marginLeft:"20px",paddingLeft:"10px"}} type='text' placeholder='Zipcode'></input>
              <br/><br/><br/>
              <button style={{textAlign:"center", height:"30px", width:"510px", backgroundColor:"orange", borderRadius:"7px", color:"white", fontSize:"15px", border:"none"}}>Order Now</button>
            </form>
          </div>
          <img style={{marginLeft:"250px", width:"400px"}} src='https://coders-coffee.netlify.app/assets/world-map-CpXg2haz.png'></img>
        </div>
       
    </div>
  )
}

export default Secondpage

