'use client'

import React from "react";
import styled from "styled-components";
import {Controller, Scene} from "react-scrollmagic";
import WhatWeDo from "./what-we-do";


const Sticky2Styled = styled.div`
  overflow: hidden;

  .section {
    position: relative;
    height: 70vh;
    background: linear-gradient(160deg, #f47c66 0%, #e51906 100%);
  }

  .sticky,
  .sticky2 {
    height: 100vh;
    width: 100%;
    background: linear-gradient(160deg, #7c66 0%, #e51906 100%);

    & .animation,
    .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;

      & svg {
        opacity: 1;
        position: absolute;
        width: 300px;
        height: 300px;
      }
    }

    .heading {
      position: absolute;
      height: 100%;
      width: 100%;

      h2 {
        font-size: 40px;
        position: absolute;
        bottom: 10%;
        left: 10%;
        margin: 0;
      }
    }
  }
`;

const Sticky2 = () => (


  <Controller>
    <Scene triggerHook="onLeave" duration={1000} pin>

      <div className="sticky sticky-one !text-white">
        <WhatWeDo/>
      </div>

    </Scene>

  </Controller>


);

export default Sticky2;
