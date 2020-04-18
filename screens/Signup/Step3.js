import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BottomSheet from "../../components/BottomSheet";
import styled from "styled-components";

//Create Step 3 with the destructured array setStage, preferences, setPreferences
const Step3 = ({ setStage, preferences, setPreferences }) => (
  <BottomSheet
    //Feeds information to the styled BottomSheet
    header="Time of day"
    subHeader="Any preference of time of day?"
    currentStage={3}
    setStage={setStage}
    children={
        //Preferences are equal to the preferences from TimeOptions
      <TimeOptions preferences={preferences} setPreferences={setPreferences} />
    }
  />
);

const TimeOptions = ({ preferences, setPreferences }) => (
  <View style={{ marginTop: 12 }}>

    {/* Morning Button */}
    <OptionButton
        //The button will be active when the preferences.desiredTime is equal to morning
      active={preferences.desiredTime === "morning"}
      //When button pressed
      onPress={() =>
        //Change the current preference to morning
        setPreferences((currentPref) => ({
          ...currentPref,
          desiredTime: "morning",
        }))
      }
    >
        {/*  Option will be active when preferences.desiredTime equal to morning */}
      <Option active={preferences.desiredTime === "morning"}>morning</Option>
    </OptionButton>

    {/* Afternoon Button */}
    <OptionButton
      active={preferences.desiredTime === "afternoon"}
      onPress={() =>
        setPreferences((pref) => ({ ...pref, desiredTime: "afternoon" }))
      }
    >
      <Option active={preferences.desiredTime === "afternoon"}>afternoon</Option>
    </OptionButton>

    {/* Evening Button */}
    <OptionButton
      active={preferences.desiredTime === "evening"}
      onPress={() =>
        setPreferences((pref) => ({ ...pref, desiredTime: "evening" }))
      }
    >
      <Option active={preferences.desiredTime === "evening"}>evening</Option>
    </OptionButton>

      {/* No preference */}
      <OptionButton
      active={preferences.desiredTime === "no preference"}
      onPress={() =>
        setPreferences((pref) => ({ ...pref, desiredTime: "no preference" }))
      }
    >
      <Option active={preferences.desiredTime === "no preference"}>no preference</Option>
    </OptionButton>
  </View>
);

export default Step3;

const OptionButton = styled(TouchableOpacity)`
    border-radius: 10px;
    background: ${({ active }) => (active ? "#20BF6B" : "#FFFFFF")};
    border: ${({ active }) =>
      active ? "0px" : "1px solid rgba(170, 170, 170, 0.8)"};
    width: 100%
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 14px;
    margin-top: 16px;
`;
const Option = styled(Text)`
  color: ${({ active }) => (active ? "#FFFFFF" : "#000")};
  font-family: Rubik-Bold;
  text-align: center;
  font-size: 18px;
`;
