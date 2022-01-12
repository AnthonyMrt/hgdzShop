import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  PixelRatio,
  TouchableOpacity,
} from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

const Home = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [carousel, setCarousel] = useState("");
  const [carouselItems, setCarouselItems] = useState([
    {
      title: "T-shirt",
      type: "clear",
      price: "45",
      details: "T-shirt noir HGDZ paris avec logo sérigraphier",
      color: "red",
      category: "t-shirt",
    },
    {
      title: "Sweat-Shirt",
      type: "clear",
      category: "sweatShirt",
    },
    {
      title: "Jogging",
      type: "clear",
      category: "jogging",
    },
    {
      title: "Veste",
      type: "clear",
    },
    {
      title: "test",
      type: "clear",
    },
  ]);

  useEffect(() => {
    console.log(selectedCategory);
  }, []);

  const handleCategory = (userChoice) => {
    setSelectedCategory(userChoice);
    console.log(selectedCategory);
  };

  const _renderItem = ({ item, index }) => {
    return (
      <Button
        onPress={() => handleCategory(item.category)}
        title={item.title}
        type={item.type}
        titleStyle={{ color: "#5956E9", marginRight: 15 }}
      />
    );
  };

  const _renderItem2 = ({ item, index }) => {
    if (selectedCategory !== null && item.category === selectedCategory) {
      return (
        <ScrollView>
          <View style={styles.homeCardContainer}>
            <Card>
              <Card.Title>T-shirt HGDZ Classic Logo</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ borderRadius: 200 / PixelRatio.get() }}
                source={{
                  uri:
                    "https://res.cloudinary.com/duqdanglb/image/upload/v1640011404/tshirt_xw1c8q.png",
                }}
                onPress={() => navigation.navigate("Product")}
              />
              <Text
                style={{ alignSelf: "center", padding: 5, marginBottom: 10 }}
              >
                {item.details}
              </Text>
              <Button
                title={`${item.price} €`}
                type={item.type}
                titleStyle={{ color: "#5956E9" }}
              />
            </Card>
          </View>
        </ScrollView>
      );
    } else if (selectedCategory === null) {
      return (
        <ScrollView>
          <View style={styles.homeCardContainer}>
            <Card containerStyle={{ borderRadius: 20 }}>
              <Card.Title>T-shirt HGDZ Classic Logo</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ borderRadius: 200 / PixelRatio.get() }}
                source={{
                  uri:
                    "https://res.cloudinary.com/duqdanglb/image/upload/v1640011404/tshirt_xw1c8q.png",
                }}
                onPress={() => navigation.navigate("Product")}
              />
              <Text
                style={{
                  alignSelf: "center",
                  marginTop: 5,
                  padding: 2,
                  marginBottom: 5,
                }}
              >
                {item.details}
              </Text>
              <Button
                title={`${item.price} €`}
                type={item.type}
                titleStyle={{ color: "#5956E9" }}
              />
            </Card>
          </View>
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.homeTitleContainer}>
        <Text style={styles.homeTitle}>
          Commander sur l'application et recevez chez vous.
        </Text>
      </View>
      <SafeAreaView style={styles.homeButtonContainer}>
        <FlatList
          data={carouselItems}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          initialNumToRender={5}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.homeProductContainer}>
        <FlatList
          data={carouselItems}
          renderItem={_renderItem2}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </SafeAreaView>
      <View style={styles.nextButtonContainer}>
        <Button
          icon={<Feather name="arrow-right" size={24} color="#5956E9" />}
          title="voir plus"
          iconRight
          type="clear"
          titleStyle={styles.nextButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  homeTitleContainer: {
    top: 25,
    height: 80,
    width: 260,
    left: 60,
    position: "absolute",
  },
  homeTitle: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    fontFamily: "Raleway_400Regular",
    justifyContent: "space-between",
  },
  homeButtonContainer: {
    top: 100,
    width: "100%",
    position: "absolute",
    left: 54,
  },
  homeProductContainer: {
    position: "absolute",
    top: 150,
    width: 300,
    height: 500,
  },
  homeCardContainer: {
    width: 200,
  },
  nextButtonContainer: {
    top: 250,
    left: 130,
  },
  nextButton: {
    color: "#5956E9",
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Home;

// <SafeAreaView style={{ position: "absolute", top: 100 }}>
//   <View style={{ flexDirection: "row", justifyContent: "center" }}>
//     <Carousel
//       layout={"stack"}
//       ref={(ref) => setCarousel(ref)}
//       data={carouselItems}
//       sliderWidth={300}
//       itemWidth={300}
//       renderItem={_renderItem}
//       onSnapToItem={(index) => setActiveIndex(index)}
//     />
//   </View>
// </SafeAreaView>;

// <Card>
//   <Card.Title>CARD WITH DIVIDER</Card.Title>
//   <Card.Divider />
//   {users.map((u, i) => {
//     return (
//       <View key={i} style={styles.user}>
//         <Image
//           style={styles.image}
//           resizeMode="cover"
//           source={{ uri: u.avatar }}
//         />
//         <Text style={styles.name}>{u.name}</Text>
//       </View>
//     );
//   })}
// </Card>;
