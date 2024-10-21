'use client'
//@ts-ignore
import Scrollbar from "react-smooth-scrollbar";
import {forwardRef, PropsWithChildren} from "react";

// Custom ref type (if you are expecting a scrollbar instance)
interface ScrollbarElement extends HTMLDivElement {
  scrollbar?: {
    scrollIntoView: (element: HTMLElement, options: {
      offsetTop: number,
      damping: number
    }) => void;
  };
}

const SmoothScroll= forwardRef<ScrollbarElement, PropsWithChildren>(({children}, ref) => {

  return (
    <Scrollbar
      ref={ref}
      continuousScrolling={true}
      tabindex={-4}
      damping={0.03}
      className={"!h-screen !overflow-visible-"}
      id={"test"}
      renderByPixels={true}
      plugins={{
        overscroll: {effect: "bounce", damping: 0.3},
      }}
    >
      {children}
    </Scrollbar>
  );
});

export default SmoothScroll;