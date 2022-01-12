import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import LogModal from "../components/LogModal";

const Login = ({ navigation }) => {
  const [openToggle, setOpenToggle] = useState(false);

  const handleToggle = () => {
    setOpenToggle((prev) => !prev);
    console.log("test");
  };

  return (
    <LinearGradient colors={["#000", "#fff"]} style={globalStyles.container}>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>HGDZ</Text>
      </View>
      <View style={globalStyles.logo}>
        <Ionicons name="md-ice-cream-outline" size={80} color="white" />
      </View>
      <View style={globalStyles.btnLogContainer}>
        <TouchableOpacity style={globalStyles.touchable} onPress={handleToggle}>
          <View style={globalStyles.btnContainer}>
            <Text style={globalStyles.btnLogText}>S'incrire</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.touchable} onPress={handleToggle}>
          <View style={globalStyles.btnContainer}>
            <Text style={globalStyles.btnLogText}>Connexion</Text>
          </View>
        </TouchableOpacity>
      </View>
      <LogModal
        open={openToggle}
        showModal={handleToggle}
        navigation={navigation}
      />
    </LinearGradient>
  );
};

export default Login;
