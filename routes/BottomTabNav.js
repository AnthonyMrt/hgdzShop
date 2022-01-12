import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator } from "./HomeNav";
import { AntDesign } from "@expo/vector-icons";
import { ProductStackNavigator } from "./ProductNav";
import { CartStackNavigator } from "./CartNav";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
            size = focused ? 30 : 20;
          } else if (route.name === "Favorite") {
            iconName = "hearto";
            size = focused ? 30 : 20;
          } else if (route.name === "User") {
            iconName = "user";
            size = focused ? 30 : 20;
          } else if (route.name === "Cart") {
            iconName = "shoppingcart";
            size = focused ? 30 : 20;
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "#5956E9",
        inactiveTintColor: "grey",
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ title: "Accueil" }}
      />
      <Tab.Screen
        name="Favorite"
        component={ProductStackNavigator}
        options={{ title: "Favorite" }}
      />
      <Tab.Screen
        name="User"
        component={HomeStackNavigator}
        options={{ title: "User" }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          title: "Panier",
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNav;
