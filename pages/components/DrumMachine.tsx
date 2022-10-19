import "antd/dist/antd.css";
import {  Row } from "antd";
import React from "react";
import { DrumsWrapper, Heading } from "../../styles/styles";
import Drum from "./Drum";
import AddDrum from "./AddDrum";
import useSound from "use-sound";
import { sounds } from "../../helpers/map";

type Props = {};





const DrumMachine = (props: Props) => {


  
  return (
    
      <DrumsWrapper>
      <Heading>Drum Machine</Heading>
      <Row justify="center" wrap={true}>
        <Drum initial={"q"}  />
        <Drum  initial={"t"} />
        <Drum  />
        <Drum   />
        <Drum   />
        <Drum   />
        <Drum   />
        <Drum   />
        <Drum   />
        <Drum   />
        <Drum   />
        <Drum   />
      </Row>
    </DrumsWrapper>
   
  );
};

export default DrumMachine;
