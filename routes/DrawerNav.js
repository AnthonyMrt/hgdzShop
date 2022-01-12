import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { HomeStackNavigator } from "./HomeNav";
import BottomTabNav from "./BottomTabNav";
import Colors from "../styles/Colors";
import { ProductStackNavigator } from "./ProductNav";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SearchTabStackNavigator } from "./SearchTabNav";
import { CartStackNavigator } from "./CartNav";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNav}
        options={{
          title: "Accueil",
          drawerIcon: () => (
            <AntDesign name="home" size={24} color={Colors.purple} />
          ),
          drawerActiveTintColor: "#5956E9",
        }}
      />
      <Drawer.Screen
        name="Product"
        component={ProductStackNavigator}
        options={{
          title: "Catalogue",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="tshirt-crew"
              size={24}
              color={Colors.purple}
            />
          ),
          drawerActiveTintColor: "#5956E9",
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchTabStackNavigator}
        options={{
          title: "Recherche",
          drawerIcon: () => (
            <SimpleLineIcons
              name="magnifier-add"
              size={24}
              color={Colors.purple}
            />
          ),
          drawerActiveTintColor: "#5956E9",
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={BottomTabNav}
        options={{
          title: "Panier",
          drawerIcon: () => (
            <AntDesign name="shoppingcart" size={24} color={Colors.purple} />
          ),
          drawerActiveTintColor: "#5956E9",
        }}
      />
    </Drawer.Navigator>
  );
};
