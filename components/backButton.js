import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

const backButton = ({ header, currentStage, setStage }) => (
<Header>{header}</Header>
  <NavigationOptions>
    <NavigationIndicator activeStage={currentStage} />
    <backButton onPress={() => setStage((currentStage) => currentStage - 1)}>
      <subHeader> back </subHeader>
    </backButton>
  </NavigationOptions>
);

export default backButton;

const NavigationIndicator = ({ activeStage }) => (
  <NavigationIndicatorContainer>
    {Array(4)
      .fill(null)
      .map((_, i) =>
        i === activeStage - 1 ? (
          <ActiveIndicator key={i} />
        ) : (
          <InactiveIndicator key={i} />
        )
      )}
  </NavigationIndicatorContainer>
);

const NavigationOptions = styled(View)`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavigationIndicatorContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;

const NavigationOptions = styled(View)`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavigationIndicatorContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;
const ActiveIndicator = styled(View)`
  width: 32px;
  height: 10px;
  background: #20bf6b;
  border-radius: 8px;
  margin-right: 12px;
`;
const InactiveIndicator = styled(View)`
  background: #c4c4c4;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: 12px;
`;

const NavigationOptions = styled(View)`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const backButton = styled(TouchableOpacity)`
  width: 68px;
  height: 45px;
  left: 0px;
  top: 0px;
  background: #20bf6b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubHeader = styled(Text)`
  margin-top: 20px;
  font-size: 18px;
  font-family: Rubik;
`;