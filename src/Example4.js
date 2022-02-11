import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { gsap } from "gsap";

const Example4 = () => {
  const circleRefs = useRef([]);
  
  // reset on re-renders
  circleRefs.current = [];
  useEffect(() => {
    circleRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight / 2));
    
    const onMove = ({ clientX, clientY }) => {      
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };
    window.addEventListener("pointermove", onMove);
    
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  
  const addCircleRef = ref => {
    if (ref) {
      circleRefs.current.push(ref);
    }    
  };
  
  return (
    <div className="example">   
      <p>Move your mouse HERE then around. Notice there is no screen flashing (re-render)</p>
      <Disc size="sm" ref={addCircleRef} delay={0} />
      <Disc size="md" ref={addCircleRef} delay={0.1} />
      <Disc size="lg" ref={addCircleRef} delay={0.2} />
    </div>
  );
}

const Disc = forwardRef(({ size, delay }, ref) => {
  const el = useRef();
  useImperativeHandle(ref, () => {           
    return { // our API
      moveTo(x, y) {
        gsap.to(el.current, { x, y, delay });
      }
    };
  }, [delay]);
  return <div className={`disc ${size}`} ref={el}></div>;
});

export default Example4;
