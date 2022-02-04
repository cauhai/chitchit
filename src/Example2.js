import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";

const Example2 = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline()
      .to(q(".box"), { rotate: 300, repeat: 3 })
      .to(q(".disc"), { x: 100, repeat: 2 });
  }, []);
  return (
    <div className="example" ref={el}>
      <p>The box X animates first (spins a few times), then the disc Y animates after.
        Using GSAP <b>timeline</b>.<br/>
        In order to avoid creating a new timeline on every render, 
        it's important to create the timeline <i>inside an effect</i> and
        store it in a <i>ref</i>.
      </p>
      <Box>X</Box>
      <Disc>Y</Disc>
    </div>
  );
}

const Box = ({ children }) => {
  return <div className="box">{children}</div>;
}

const Disc = ({ children }) => {
  return <div className="disc">{children}</div>;
}

export default Example2;
