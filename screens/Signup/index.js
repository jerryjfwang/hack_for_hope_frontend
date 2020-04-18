import React, { useState } from "react";
import { View } from "react-native";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import styled from "styled-components";
import GroceryStoreBackground from "../../components/GroceryStoreBackground";

const Signup = () => {
  const [stage, setStage] = useState(1);
  const [preferences, setPreferences] = useState({
    desiredTime: "",
    timeOfDay: "",
    maxDuration: 15,
    travelMethod: "driving",
  });

  return (
    <SignupContainer>
      <View style={{ zIndex: 1, height: "100%" }}>
        <GroceryStoreBackground />
      </View>
      {stage === 1 && <Step1 setStage={setStage} />}
      {stage === 2 && (
        <Step2
          setStage={setStage}
          preferences={preferences}
          setPreferences={setPreferences}
        />
      )}
      {stage === 3 && (
        <Step3
          setStage={setStage}
          preferences={preferences}
          setPreferences={setPreferences}
        />
      )}
      {stage === 4 && (
        <Step4
          setStage={setStage}
          preferences={preferences}
          setPreferences={setPreferences}
        />
      )}
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled(View)`
  display: flex;
  background: #7bed9f;
  height: 100%;
  width: 100%;
  position: relative;
`;
