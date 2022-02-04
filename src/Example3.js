import React, { useRef, useEffect, useState, createContext, useContext } from 'react';
import { gsap } from "gsap";

const ColourContext = createContext();

const colours = [ 'gold', 'purple', 'salmon', 'fuchsia', 'olive', 'thistle', 'royalblue', 'goldenrod', 'aqua', 'grey' ];

const Example3 = () => {
  const [ colour, setColour ] = useState(0);
  return (
    <ColourContext.Provider value={colour}>
      <div className="example">
        <p>Using React <i>context</i> in child components.
        </p>
        <button onClick={() => setColour(Math.floor(Math.random()*10.0))}>Random colour</button> 
        <Text />
      </div>
    </ColourContext.Provider>
  );
}

const Text = () => {
  const el = useRef();
  const colourIndex = useContext(ColourContext);
  const styling = { color: `${colours[colourIndex]}`, fontSize: '300%' };
  useEffect(() => {
    gsap.to(el.current, { x: 400, y: -80 });
  }, []);

  return <div ref={el} style={styling}>{colours[colourIndex]}</div>;
}

export default Example3;
