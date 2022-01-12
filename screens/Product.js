import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
  PixelRatio,
  FlatList,
  Pressable,
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import { globalStyles } from "../styles/globalStyles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../styles/Colors";

const users = [
  {
    name: "brynn",
    avatar:
      "https://res.cloudinary.com/duqdanglb/image/upload/v1640011404/tshirt_xw1c8q.png",
  },
  {
    name: "thot leader",
    avatar:
      "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  },
  {
    name: "jsa",
    avatar: "https://uifaces.co/our-content/donated/bUkmHPKs.jpg",
  },
  {
    name: "talhaconcepts",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "andy vitale",
    avatar: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
  },
  {
    name: "katy friedson",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
  },
];

const colorArray = [
  {
    title: "noir",
    color: "black",
  },
  {
    title: "rouge",
    color: "red",
  },
  {
    title: "bleu",
    color: "blue",
  },
];

const Product = () => {
  const [carousel, setCarousel] = useState("");
  const [activeIndex, setActiveIndex] = useState("");
  const [entries, setEntries] = useState("");

  const _renderItem = ({ item, index }) => {
    return <Image style={styles.image} source={{ uri: item.avatar }} />;
  };

  const renderColor = ({ item, index }) => {
    return (
      <Pressable
        style={{ borderColor: item.color, ...styles.detailsContainer }}
      >
        <FontAwesome name="circle" size={24} color={item.color} />
        <Text style={{ color: item.color, ...styles.textColor }}>
          {item.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={{ backgroundColor: "white", ...globalStyles.container }}>
      <SafeAreaView style={{ position: "absolute", top: 30 }}>
        <View style={{ justifyContent: "center" }}>
          <Carousel
            layout={"default"}
            ref={(ref) => setCarousel(ref)}
            data={users}
            sliderWidth={300}
            itemWidth={300}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
          <View style={styles.paginationContainer}>
            <Pagination
              dotsLength={users.length}
              activeDotIndex={activeIndex}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: "#5956E9",
              }}
              inactiveDotStyle={
                {
                  // Define styles for inactive dots here
                }
              }
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.homeCardContainer}>
        <Card
          containerStyle={{
            borderColor: "white",
            width: "100%",
            height: "100%",
            top: 15,
            left: -15,
          }}
        >
          <Card.Title>T-shirt HGDZ Classic Logo</Card.Title>
          <Text style={styles.titleColor}>Couleurs</Text>
          <FlatList
            data={colorArray}
            renderItem={renderColor}
            keyExtractor={(item) => item.id}
            horizontal
          />
          <Text style={styles.textAnnonce}>
            Atteignez 100 euros dans votre panier pour avoir la livraison
            offerte.
          </Text>
          <Text style={styles.textProductDetails}>
            HGDZ - T-shirt noir en coton, coupe classique avec logo HGDZ paris
            sérigraphier à l'avant.
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Button
              title="45 €"
              type="clear"
              titleStyle={{ color: "#5956E9" }}
            />
            <View style={styles.addToBasket}>
              <Button
                title="Ajouter au panier"
                containerStyle={{
                  width: "100%",
                  borderRadius: 20,
                  backgroundColor: "rgb(89,86,233)",
                }}
                buttonStyle={{
                  backgroundColor: "rgb(89,86,233)",
                  height: 50,
                }}
              />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    bottom: 20,
    width: 300,
    height: 250,
    marginRight: 10,
    alignSelf: "center",
  },
  homeCardContainer: {
    position: "absolute",
    width: "100%",
    top: 300,
  },
  paginationContainer: {
    position: "absolute",
    top: 225,
  },
  detailsContainer: {
    borderRadius: 10,
    borderColor: Colors.lowgrey,
    borderWidth: 1,
    width: 100,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textColor: {
    margin: 5,
    fontFamily: "Raleway_600SemiBold",
  },
  titleColor: {
    fontFamily: "Raleway_700Bold",
    fontSize: 17,
    marginBottom: 10,
  },
  textAnnonce: {
    fontFamily: "Raleway_700Bold",
  },
  textProductDetails: {
    fontFamily: "Raleway_400Regular",
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  totalText: {
    fontFamily: "Raleway_400Regular",
  },
  addToBasket: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 40,
    width: 314,
    left: 5,
  },
});

export default Product;
