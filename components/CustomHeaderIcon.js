import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { AntDesign } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import Colors from "../styles/Colors";

const CustomHeaderIcon = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={AntDesign}
      iconSize={24}
      color={Colors.purple}
    />
  );
};

export default CustomHeaderIcon;
