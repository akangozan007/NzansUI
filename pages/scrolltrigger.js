import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const scrolltrigger = () => {
  useEffect(() => {
    gsap.to('.box', {
      scrollTrigger: '.box', // start animation when ".box" enters the viewport
      x: 500
  });
  
  }, []);

  return (
    <div>
      <h1>Efek GSAP di Next.js</h1>
      <div><h3>test</h3></div>
      <div><h3>test</h3></div>
      <div><h3>test</h3></div>
      <div><h3>test</h3></div>
      <div><h3>test</h3></div>
      <div><h3>test</h3></div>

      <div><h3>efek ini akan bergeser begitu kita scroll</h3></div>
      <div><h3>test</h3></div>
      <div><h3>test</h3></div>
      <div><h3>test</h3></div>
      <div><h3>test</h3></div>
      <div><h3>test</h3></div>
      <div className="box" style={{width: "100px", height:"100px"  ,backgroundColor: "red"}}></div>
    </div>
  );
};

export default scrolltrigger;
