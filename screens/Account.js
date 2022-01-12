import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Account = () => {
  return (
    <View style={styles.container}>
      <Text>Mon Compte</Text>
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
});

export default Account;
