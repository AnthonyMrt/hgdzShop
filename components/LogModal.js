import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Colors from "../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
//import { Input } from "react-native-elements";

import {
  Input,
  Icon,
  Stack,
  Button,
  FormControl,
  IconButton,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const LogModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleModal = () => {
    props.showModal;
    props.navigation.replace("Home");
  };

  return (
    <View style={globalStyles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.open}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={globalStyles.centeredView}></View>
        <View style={globalStyles.modalView}>
          <Text style={globalStyles.titleLog}>
            {isSignUp ? "Créer un compte" : "Connexion"}
          </Text>
          <Stack space={4} w="100%" alignItems="center">
            <FormControl isRequired style={globalStyles.inputLog}>
              <FormControl.Label>Votre email</FormControl.Label>
              <Input
                w={{
                  base: "75%",
                  md: "25%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="mail-outline" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="email@adress.com"
              />
            </FormControl>
            <FormControl isRequired style={globalStyles.inputLog}>
              <FormControl.Label>Votre mot de passe</FormControl.Label>
              <Input
                type={show ? "text" : "password"}
                w={{
                  base: "75%",
                  md: "25%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="lock-outline" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                InputRightElement={
                  <IconButton
                    size="sm"
                    variant="solig"
                    _icon={{
                      as: MaterialIcons,
                      name: "remove-red-eye",
                    }}
                    onPress={handleClick}
                  />
                }
                placeholder="Password"
              />
            </FormControl>
          </Stack>
          <TouchableOpacity
            style={globalStyles.touchable}
            onPress={handleModal}
          >
            <View style={globalStyles.btnAuthContainer}>
              <Text style={globalStyles.btnLogText}>Valider</Text>
            </View>
          </TouchableOpacity>
          <Pressable onPress={() => setIsSignUp((prevState) => !prevState)}>
            <Text style={{ textAlign: "center", marginTop: 9 }}>
              {isSignUp ? "Vers Connexion" : "Créer un compte"}
            </Text>
          </Pressable>
          <Pressable onPress={() => setIsSignUp((prevState) => !prevState)}>
            <Text style={{ textAlign: "center", marginTop: 9 }}>
              mot de passe oublié?
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginTop: "50%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default LogModal;
