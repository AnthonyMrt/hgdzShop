import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { SearchBar, TextInput } from "react-native-elements";
import { globalStyles } from "../styles/globalStyles";
import { Text, Card, Button, Icon } from "react-native-elements";
import Colors from "../styles/Colors";
import FlipCard from "react-native-flip-card";

const imageArray = [
  {
    photo:
      Array[
        ("https://i.pinimg.com/564x/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.jpg",
        "https://images.squarespace-cdn.com/content/v1/5bc5931a9d414971907514c3/1595225799007-9O86NQPI0WFM216057XN/T-Shirt+Black+Back.png?format=300w")
      ],
  },
];

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const windowWidth = Dimensions.get("window").width;

  const handleGoProductPage = () => {
    props.navigation.navigate("Product");
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
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
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item, navigation }) => {
    return (
      <View
        style={{ width: "50%", justifyContent: "center", alignItems: "center" }}
      >
        <Card
          containerStyle={{
            borderRadius: 30,
            width: 170,
          }}
        >
          <FlipCard flipHorizontal={true} flipVertical={false}>
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  "https://i.pinimg.com/564x/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.jpg",
              }}
            />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  "https://images.squarespace-cdn.com/content/v1/5bc5931a9d414971907514c3/1595225799007-9O86NQPI0WFM216057XN/T-Shirt+Black+Back.png?format=300w",
              }}
            />
          </FlipCard>
          <Text
            style={{
              fontFamily: "Raleway_600SemiBold",
              textTransform: "uppercase",
              alignSelf: "center",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            HGDZ
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "Raleway_600SemiBold",
              textTransform: "uppercase",
              alignSelf: "center",
              fontSize: 15,
            }}
          >
            T-shirt logo
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="À partir de 45 €"
            type="clear"
            titleStyle={{
              color: Colors.purple,
              fontWeight: "bold",
              fontFamily: "Raleway_600SemiBold",
            }}
            onPress={handleGoProductPage}
          />
        </Card>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={props.extraData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
  },
  itemStyle: {
    padding: 10,
  },
});

export default Search;

// // Flat List Item
// <Text style={styles.itemStyle} onPress={() => getItem(item)}>
//   {item.id}
//   {"."}
//   {item.title.toUpperCase()}
// </Text>
