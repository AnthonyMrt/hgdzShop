import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Colors from "../styles/Colors";
import Product from "../screens/Product";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const ProductStack = createStackNavigator();

export const ProductStackNavigator = () => {
  return (
    <ProductStack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.white },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "black",
        headerShown: true,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item title="Favoris" iconName="hearto" />
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
      <ProductStack.Screen
        name="Product"
        component={Product}
        options={{ title: "Catalogue" }}
      />
    </ProductStack.Navigator>
  );
};
