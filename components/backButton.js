import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

const backButton = ({
  currentStage,
  setStage,
}) => (
    
      <NavigationIndicator activeStage={currentStage} />
      <backButton onPress={() => setStage((currentStage) => currentStage - 1)}>
        <Icon name="arrow-backward" size={28} color={"#fff"} />
      </backButton>
);

export default backButton;

const NavigationIndicator = ({ activeStage }) => (

    {Array(4)
      .fill(null)
      .map((_, i) =>
        i === activeStage - 1 ? (
          <ActiveIndicator key={i} />
        ) : (
          <InactiveIndicator key={i} />
        )
      )}
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