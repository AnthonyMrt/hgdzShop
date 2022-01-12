import React, { useSelector } from "react";
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
import Colors from "../styles/Colors";
import { AntDesign } from "@expo/vector-icons";

const Cart = () => {
  const renderItem = () => {
    return (
      <View>
        <Card
          containerStyle={{
            borderColor: "white",
            flexDirection: "row",
            borderRadius: 20,
            height: 150,
          }}
        >
          <Card.Image
            style={{ padding: 0, width: "50%", height: 120 }}
            source={{
              uri:
                "https://res.cloudinary.com/duqdanglb/image/upload/v1640011404/tshirt_xw1c8q.png",
            }}
          />
          <View
            style={{
              position: "relative",
              left: 120,
              top: -120,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "Raleway_600SemiBold",
                color: "black",
              }}
            >
              T-shirt HGDZ classic LOGO noir
            </Text>
          </View>
          <View style={{ position: "relative", left: 120, top: -90 }}>
            <Text style={styles.itemCardPrice}>45 €</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              left: 120,
              top: -60,
            }}
          >
            <Text style={{ fontFamily: "Raleway_500Medium" }}>Quantité</Text>
            <Icon
              name="minussquare"
              type="antdesign"
              color={Colors.purple}
              onPress={() => console.log("produitQ -1 ")}
            />
            <Text style={{ fontFamily: "Raleway_500Medium" }}>1</Text>
            <Icon
              name="plussquare"
              type="antdesign"
              color={Colors.purple}
              onPress={() => console.log("produitQ -1 ")}
            />
          </View>
        </Card>
        <View style={styles.totalCard}>
          <Text>Total: </Text>
          <Text>45 €</Text>
        </View>
        <View style={styles.checkoutButtonCard}>
          <Button
            title="Confirmer panier"
            containerStyle={{
              marginTop: 20,
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
    );
  };

  return <View style={styles.cartContainer}>{renderItem()}</View>;
};

const styles = StyleSheet.create({
  cartContainer: {
    margin: 20,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 19,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 19,
  },
  totalPrice: {
    color: Colors.green,
  },
  btnDoPayment: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: Colors.orange,
  },
  btnDoPaymentText: {
    fontSize: 19,
  },
  itemCardPrice: {
    fontWeight: "bold",
    fontFamily: "Raleway_600SemiBold",
    color: Colors.purple,
  },
  totalCard: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Cart;
