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

//Travel function that uses a destructured object to get preferences
const Travel = ({ preferences, setPreferences }) => {
  //Two destructured arrays to check if the duration/travel options are t/f
  const [showDurationOptions, setShowDurationOptions] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [showTravelOptions, setTravelOptions] = useState(false);

  //Func returns:
  return (
    //View is to retrieve button width for the duration/travel options
    <View
      style={{ marginTop: 12 }}
      onLayout={({ nativeEvent }) => setButtonWidth(nativeEvent.layout.width)}
    >
      {/* Duration Option Start*/}
      <DropdownButton
        //When button pressed
        onPress={() =>
          //Show dropdown menu
          setShowDurationOptions(true)
        }
      >
        {/* View for dropdown*/}
        {/* Views = Div */}
        <View>
          <Icon name="expand-more" size={16} color={"#fff"} />
        </View>
        {/* For setting preferences with property maxDur to show default/selected minutes */}
        <View>
          <DropdownText>{preferences.maxDuration} minutes</DropdownText>
        </View>
        <View>
          <Icon name="expand-more" size={20} color={"#000"} />
        </View>
      </DropdownButton>

      <Menu
        //Menu by default false (hidden)
        visible={showDurationOptions}
        onDismiss={() => setShowDurationOptions(false)}
        //Anchor for dropdown
        anchor={<View style={{ width: "100%", height: 5 }} />}
        //Styling is buttonWidth (see styling below)
        style={{ width: buttonWidth }}
      >
        {/* Suggestion if pressed will change value of maxDuration*/}
        {/* 5 Min Button */}
        <Suggestion
          onPress={() => {
            setPreferences((p) => ({ ...p, maxDuration: 5 }));
            setShowDurationOptions(false);
          }}
        >
          <DropdownStyling>5 min</DropdownStyling>
        </Suggestion>

        <Divider />

        {/* 15 Min Button */}
        <Suggestion
          onPress={() => {
            setPreferences((p) => ({ ...p, maxDuration: 15 }));
            setShowDurationOptions(false);
          }}
        >
          <DropdownStyling>15 min</DropdownStyling>
        </Suggestion>

        <Divider />

        {/* 30 Min Button */}
        <Suggestion
          onPress={() => {
            setPreferences((p) => ({ ...p, maxDuration: 30 }));
            setShowDurationOptions(false);
          }}
        >
          <DropdownStyling>30 min</DropdownStyling>
        </Suggestion>

        <Divider />

        {/* 45 Min Button */}
        <Suggestion
          onPress={() => {
            setPreferences((p) => ({ ...p, maxDuration: 45 }));
            setShowDurationOptions(false);
          }}
        >
          <DropdownStyling>45 min</DropdownStyling>
        </Suggestion>
      </Menu>

      {/* travel method Option Start*/}
      <DropdownButton
        //When button pressed
        onPress={() =>
          //Show dropdown menu
          setTravelOptions(true)
        }
      >
        {/* View for dropdown*/}
        {/* Views = Div */}
        <View>
          <Icon name="expand-more" size={16} color={"#fff"} />
        </View>
        {/* For setting preferences with property maxDur to show default/selected minutes */}
        <View>
          <DropdownText>{preferences.travelMethod} </DropdownText>
        </View>
        <View>
          <Icon name="expand-more" size={20} color={"#000"} />
        </View>
      </DropdownButton>

      <Menu
        //Menu by default false (hidden)
        visible={showTravelOptions}
        onDismiss={() => setTravelOptions(false)}
        //Anchor for dropdown
        anchor={<View style={{ width: "100%", height: 5 }} />}
        //Styling is buttonWidth (see styling below)
        style={{ width: buttonWidth }}
      >
        {/* Suggestion if pressed will change value of maxDuration*/}
        {/* driving Min Button */}
        <Suggestion
          onPress={() => {
            setPreferences((p) => ({ ...p, travelMethod: "driving" }));
            setTravelOptions(false);
          }}
        >
          <DropdownStyling>driving</DropdownStyling>
        </Suggestion>

        <Divider />

        {/* biking Button */}
        <Suggestion
          onPress={() => {
            setPreferences((p) => ({ ...p, travelMethod: "biking" }));
            setTravelOptions(false);
          }}
        >
          <DropdownStyling>biking</DropdownStyling>
        </Suggestion>

        <Divider />

        {/* walking Button */}
        <Suggestion
          onPress={() => {
            setPreferences((p) => ({ ...p, travelMethod: "walking" }));
            setTravelOptions(false);
          }}
        >
          <DropdownStyling>walking</DropdownStyling>
        </Suggestion>
      </Menu>
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
const DropdownStyling = styled(Text)`
  color: ${({ active }) => (active ? "#FFFFFF" : "#000")};
  font-family: Rubik;
  text-align: center;
  font-size: 18px;
`;
const Suggestion = styled(TouchableOpacity)`
  padding: 12px;
`;
