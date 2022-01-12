import React, { useState, useEffect } from "react";
import Search from "../screens/Search";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Colors from "../styles/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

const SearchTabStack = createStackNavigator();
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

export const SearchTabStackNavigator = (props, { navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [searchTextin, setSearchTextin] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        setSearchTextin(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function(item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearchTextin(newData);
      setSearchTextin(newData);
      setSearchText(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearchTextin(masterDataSource);
      setSearchText(text);
    }
  };

  return (
    <SearchTabStack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: Colors.backgrey,
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
              onChangeText={(text) => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction("")}
              value={searchText}
            />
          </View>
        ),
      })}
    >
      <SearchTabStack.Screen name="Recherche">
        {(props) => <Search {...props} extraData={searchTextin} />}
      </SearchTabStack.Screen>
    </SearchTabStack.Navigator>
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
