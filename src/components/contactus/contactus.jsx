import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const App = () => {
    // const [num, setNum] = React.useState(3000);
    return (
        <div>
        <h1>contact</h1>
        <p>This is an contact page</p>
        <AnimatedNumbers
    includeComma 
    animateToNumber={3000}
    fontStyle={{ fontSize: 100, color: "grey" }}
    configs={[
      { mass: 2, tension: 720, friction: 10 },
      // { mass: 1, tension: 480, friction: 130 },
      // { mass: 1, tension: 520, friction: 50 },
      // { mass: 1, tension: 580, friction: 15 },
      // { mass: 1, tension: 860, friction: 10 },
      // { mass: 1, tension: 510, friction: 100 },
    ]}
  ></AnimatedNumbers>
        </div>
    );
    }

export default App;