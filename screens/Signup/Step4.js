import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BottomSheet from "../../components/BottomSheet";
import styled from "styled-components";

//Create Step 4 with the destructured array setStage, preferences, setPreferences
const Step4 = ({ setStage, preferences, setPreferences }) => (
    <BottomSheet
      //Feeds information to the styled BottomSheet
      header="Distance"
      subHeader="How far are you willing to travel?"
      currentStage={4}
      setStage={setStage}
      children={
          //Preferences are equal to the preferences from TimeOptions
        <Travel preferences={preferences} setPreferences={setPreferences} />
      }
    />
  );
  
  const Travel = ({ preferences, setPreferences }) => (
    <View style={{ marginTop: 12 }}>
  
      {/* Duration Option */}
      <DropdownButton
          //The button will be active when the preferences.timeOfDay is equal to morning
        active={preferences.timeOfDay === "selected"}
        //When button pressed
        onPress={() =>
          //Change the current preference to morning
          setPreferences((currentPref) => ({
            ...currentPref,
            timeOfDay: "selected",
          }))
        }
      >
          {/*  Option will be active when preferences.timeOfDay equal to morning */}
        <Dropdown active={preferences.timeOfDay === "selected"}>selected</Dropdown>
      </DropdownButton>
  
      {/* Means of Travel Button */}
      <DropdownButton
        active={preferences.timeOfDay === "driving"}
        onPress={() =>
          setPreferences((pref) => ({ ...pref, timeOfDay: "driving" }))
        }
      >
        <Dropdown active={preferences.timeOfDay === "driving"}>driving</Dropdown>
      </DropdownButton>
    </View>
  );

export default Step4;

const DropdownButton = styled(TouchableOpacity)`
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
const Dropdown = styled(Text)`
  color: ${({ active }) => (active ? "#FFFFFF" : "#000")};
  font-family: Rubik-Bold;
  text-align: center;
  font-size: 18px;
`;