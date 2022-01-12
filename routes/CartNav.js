import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Colors from "../styles/Colors";
import Cart from "../screens/Cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const CartStack = createStackNavigator();

export const CartStackNavigator = () => {
  return (
    <CartStack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.white },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "black",
        headerShown: true,
        headerTitleAlign: "center",
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item title="Favoris" iconName="delete" />
          </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item
              title="Menu"
              iconName="menu-fold"
              onPress={() => navigation.openDrawer()}
            />
          </HeaderButtons>
        ),
      })}
    >
      <CartStack.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Panier" }}
      />
    </CartStack.Navigator>
  );
};
