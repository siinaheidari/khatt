'use client'
//@ts-ignore
import Scrollbar from "react-smooth-scrollbar";
import SmoothScrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import {FC, PropsWithChildren, useEffect} from "react";

const SmoothScroll: FC<PropsWithChildren> = ({children}) => {

    return (
        <Scrollbar
            damping={0.03}
            style={{ height: '100vh' }}
            renderByPixels={true}
            plugins={{
                overscroll: {effect: "bounce", damping: 0.3},
            }}
        >
            {children}
        </Scrollbar>
    );
};

export default SmoothScroll;