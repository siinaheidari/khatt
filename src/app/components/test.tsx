'use client'

import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import {useRef} from "react";

const Test = () => {
  const ref = useRef(null);

  const options = {
    smooth: true,
  }
  return (

      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
          <section className="intro" >
            <h1>This is the Introduction section</h1>
          </section>
          <section className="contents" >
            <h1>I Love React</h1>
          </section>
          <section className="footer" >
            <h1>Let's end the application with this Footer</h1>
          </section>
        </main>
      </LocomotiveScrollProvider>

  );
};

export default Test;
