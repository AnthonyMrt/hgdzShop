import React, { useState } from "react";
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Colors from "../styles/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

const HomeStack = createStackNavigator();
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

export const HomeStackNavigator = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <HomeStack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: Colors.white,
          height: 60,
        },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "black",
        headerShown: true,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item
              title="Panier"
              iconName="shoppingcart"
              onPress={() => navigation.navigate("Cart")}
            />
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
        headerTitle: () => (
          <View style={styles.searchSection}>
            <SimpleLineIcons
              style={styles.searchIcon}
              name="magnifier"
              size={20}
              color="muted.400"
            />
            <TextInput
              style={styles.input}
              placeholder="Chercher un produit..."
              onChangeText={() => navigation.navigate("Search")}
            />
          </View>
        ),
      })}
    >
      <HomeStack.Screen
        name="Accueil"
        component={Home}
        options={{ title: "Accueil" }}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.lightGrey,
    width: ScreenWidth - 120,
  },
  searchIcon: {
    color: Colors.lightGrey,
  },
  input: {
    paddingLeft: 10,
    backgroundColor: "#fff",
    color: "#424242",
    width: "80%",
  },
});
