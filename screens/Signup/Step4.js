import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BottomSheet from "../../components/BottomSheet";
import { Menu, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
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

const Travel = ({ preferences, setPreferences }) => {
  const [showDurationOptions, setShowDurationOptions] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);

  return (
    <View
      style={{ marginTop: 12 }}
      onLayout={({ nativeEvent }) => setButtonWidth(nativeEvent.layout.width)}
    >
      {/* Duration Option */}
      <DropdownButton
        //When button pressed
        onPress={() =>
          //Change the current preference to morning
          setShowDurationOptions(true)
        }
      >
        <View>
          <Icon name="expand-more" size={16} color={"#fff"} />
        </View>
        {/*  Option will be active when preferences.timeOfDay equal to morning */}
        <View>
          <DropdownText>{preferences.maxDuration} minutes</DropdownText>
        </View>
        <View>
          <Icon name="expand-more" size={20} color={"#000"} />
        </View>
      </DropdownButton>
      <Menu
        visible={showDurationOptions}
        onDismiss={() => setShowDurationOptions(false)}
        anchor={<View style={{ width: "100%", height: 5 }} />}
        style={{ width: buttonWidth }}
      >
        <Suggestion
          onPress={() => {
            setPreferences((p) => ({ ...p, maxDuration: 5 }));
            setShowDurationOptions(false);
          }}
        >
          <Text>5 min</Text>
        </Suggestion>
        <Divider />
        <Suggestion>
          <Text>5 min</Text>
        </Suggestion>
        <Divider />
        <Suggestion>
          <Text>5 min</Text>
        </Suggestion>
        <Divider />
        <Suggestion>
          <Text>5 min</Text>
        </Suggestion>
      </Menu>

      {/* Means of Travel Button */}
      <DropdownButton
        active={preferences.timeOfDay === "driving"}
        onPress={() =>
          setPreferences((pref) => ({ ...pref, timeOfDay: "driving" }))
        }
      >
        <DropdownText active={preferences.timeOfDay === "driving"}>
          driving
        </DropdownText>
      </DropdownButton>
    </View>
  );
};

export default Step4;

const DropdownButton = styled(TouchableOpacity)`
    border-radius: 10px;
    background: ${({ active }) => (active ? "#20BF6B" : "#FFFFFF")};
    border: ${({ active }) =>
      active ? "0px" : "1px solid rgba(170, 170, 170, 0.8)"};
    width: 100%
    display: flex;
  flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 14px;
    margin-top: 16px;
`;
const DropdownText = styled(Text)`
  color: ${({ active }) => (active ? "#FFFFFF" : "#000")};
  font-family: Rubik-Bold;
  text-align: center;
  font-size: 18px;
`;
const Suggestion = styled(TouchableOpacity)`
  padding: 12px;
`;
