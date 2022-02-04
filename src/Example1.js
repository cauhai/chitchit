import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";

const Example1 = () => {
  const topRef = useRef();
  const query = gsap.utils.selector(topRef); // all descendents
  useEffect(() => {
    gsap.to(query(".box"), {
      x: 100,
      stagger: 0.3,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
  }, []);
  return (
    <div className="example" ref={topRef}>
      <p>Two boxes (A, C), and a container having a box (B). 
        All move together thanks to GSAP <b>selector</b> util.</p>
      <Box>A</Box>
      <Container><Box>b</Box></Container>
      <Box>C</Box>
    </div>
  );
}

const Box = ({ children }) => {
  return <div className="box">{children}</div>;
}

const Container = ({ children }) => {
  return (
    <div className="container">
      <Box>Box in container</Box>
    </div>
  );
}

export default Example1;
