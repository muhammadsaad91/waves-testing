import React from 'react';
import Item from './homeitem';
// import { NavLink } from 'react-router-dom';
import "./home.css";
import img1 from "./Content-Marketing-Strategy.jpg"
import img2 from "./Customer-Retention-Retargeting.jpg"
import img3 from "./Paid-Media.jpg"
import img4 from "./Website-Creation-Optimization.jpg"
import img5 from "./Branding.jpg"
import Home4 from './shuffelinghome';




const Home = () => {
  const [isShown, setIsShown] = React.useState(false);
 
  return (
       <div className='MainHome'>
         <div className='home'>
            <div className="hflex">
            <h1>Welcome To Waves Agency</h1>
            </div>
            {/* <br /><br /> */}
              <div className="homehh">
              <h5>| Revolutionizing Digital Commerce |</h5>
             <h5>Delivering Results</h5>
              </div>
             <div className='after'></div>
        </div>
        <div className='home2'>
          <div className="home2head">
          <div className="home2h">
          <h1>What We Do</h1>
          </div>
          </div>
          <div className='itemshome2'>
          <Item link={img1} name="Content Marketing" />
          <Item link={img2} name="Customer Retation" />
          <Item link={img3} name="Paid Media" />
          <Item link={img4} name="Web Development" />
          <Item link={img5} name="Branding" />
          </div>
          <div className='contenthome2'>
            <div className='contentleft'>
              <h1>Hello. We’re Waves, A Strategic & Innovative Marketing Agency Located Everywhere, Catering To Our Clients Worldwide. </h1>
            </div>
            <div className='contentright'>
              <h4>Waves Agency has you covered, so you can focus on what you do best. Our international team can help you take your brand to the next level.</h4>
              <button>Find Out More</button>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fillOpacity="1" d="M0,288L60,250.7C120,213,240,139,360,144C480,149,600,235,720,250.7C840,267,960,213,1080,181.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <div className="home3" id='home3'>
          <div className="home3head">
            <h1>We Make Beautiful Things & Create Results</h1>
            </div>
            <div className="home3content">
              <div className="home3contentleft">
                <div className="hc3lbg">
                  <div className="contentggg">
                <h2>JOHNNY DANG</h2><h2>JD&CO</h2>
                </div>
                </div>
                <div className="lowerleft">
                <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                 <h2>"Really appreciate you.. you got the best service. That’s what I love, to do business with good people.”</h2>
                </div>
                </div>
                <div className="home3contentright">
                   <div className="head"><h1>Just Ask Our Clients.</h1></div>
                   <div className="hc3lbg1">
                   <div className="contentggg">
                <h2>NEXTDEV LIMITED</h2><h2>@grandvideokecanada</h2>
                </div>
                   </div>
                   <div className="lowerleft">
                <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                 <h2>“They have helped with Facebook Conversions and brought a huge increase in sales, more than TWICE than what we were making last year! Those who are selling things Online you have to work with Waves Agency they’ve been giving me really good results”</h2>
                </div>
                  </div>
                  </div>
                  
        </div>

        <svg className="nectar-shape-divider" aria-hidden="true" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"></path> <path d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"></path> <path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path>
             </svg>
        <Home4/>

        <div className="home5">
          <div className="home5bk">
            <marquee behavior="scroll" direction="left"><h1 className='ccccccc'>We Can Make A Difference For You.</h1></marquee>
            </div>
          </div>


      <div className="hm6">
      <div className="home6">
         
         <h1>Don't wait any longer, take advantage today.</h1>
        <h4>Reach out for a free quote on your desired services.</h4>
        <button className='btt' onMouseEnter={() => setIsShown(true)} 
        onMouseLeave={() => setIsShown(false)}>Contact 
        {isShown?  <i className="fa-solid fa-arrow-right"></i> :
        <p className='butcc'>  </p>}</button>
         </div>

       
      </div>

       </div>
    );
}

export default Home;