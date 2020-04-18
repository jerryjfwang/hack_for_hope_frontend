import React from "react";
import BottomSheet from "../../components/BottomSheet";
import backButton from "../../components/backButton";

const Step1 = ({ setStage }) => (

  <backButton
    header = "Sup"
  />

  <BottomSheet
    header="Welcome!"
    subHeader="Help us find the safest grocery store for you by answering a few quick questions"
    currentStage={1}
    setStage={setStage}
  />
);

export default Step1;
