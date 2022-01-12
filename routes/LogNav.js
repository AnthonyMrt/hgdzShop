import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Colors from "../styles/Colors";
import Login from "../screens/Login";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const LogStackNavigator = createStackNavigator();

export const LogNavigator = () => {
  return (
    <LogStackNavigator.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.white },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "black",
        headerShown: false,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item title="Panier" iconName="shopping-cart" />
          </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item
              title="Menu"
              iconName="menu"
              onPress={() => navigation.openDrawer()}
            />
          </HeaderButtons>
        ),
      })}
    >
      <LogStackNavigator.Screen
        name="Login"
        component={Login}
        options={{ title: "Connexion" }}
      />
    </LogStackNavigator.Navigator>
  );
};
