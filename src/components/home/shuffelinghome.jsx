import React from "react";
import { NavLink } from "react-router-dom";


const textArray = ['just', 'tailored', 'Custom'];

const Home = () => {
//  make a fundtion that shuffle a word everu second 
//  and then put it in the h1 tag
//  and then make a function that shuffle the array
    const [isShown, setIsShown] = React.useState(false);
    const [text, setText] = React.useState('Custom');
     
    React.useEffect(() => {
        const interval = setInterval(() => {
            setText(textArray[Math.floor(Math.random() * textArray.length)]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div>
            <div className="home4">
          <div className="h4head">
        <div className="h4l">
        <h1>Premium Marketing made {text} for your business.</h1>
        </div>
<div className="h4r" >
  <h2>As industry leaders in content creation, we understand what it takes to elevate your brand to the next level.</h2>
  <NavLink ><span className='bbnn'   onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>{isShown?<i className="fa-solid fa-arrow-right" ></i>:"➖"} See Our Clients</span></NavLink>
</div>
          </div>
        </div>
        </div>
    )
}
  
  export default Home;
  