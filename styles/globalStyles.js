import { StyleSheet, Dimensions } from "react-native";
import Colors from "./Colors";

const windowHeight = Dimensions.get("window").height;
console.log(windowHeight);

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    color: Colors.white,
    fontFamily: "Raleway_800ExtraBold",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 50,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 9,
    textAlign: "center",
    fontSize: 19,
    marginVertical: 19,
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Raleway_400Regular",
  },
  logo: {
    marginBottom: 50,
  },
  touchable: {
    marginVertical: 9,
  },
  btnLogContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContainer: {
    backgroundColor: Colors.black,
    borderRadius: 7,
    padding: 9,
    margin: 10,
  },

  btnTextLog: {
    color: Colors.white,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginBottom: "12%",
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  inputLog: {
    borderRadius: 25,
    alignItems: "center",
    textAlign: "center",
    fontSize: 19,
    marginVertical: 5,
    width: "100%",
    color: Colors.black,
  },
  titleLog: {
    color: "black",
    fontFamily: "Raleway_600SemiBold",
    fontSize: 25,
  },
  btnAuthContainer: {
    backgroundColor: Colors.black,
    borderRadius: 7,
    padding: 9,
    margin: 10,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  btnLogText: {
    color: Colors.white,
    fontFamily: "Raleway_400Regular",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerSearch: {
    borderRadius: 25,
  },
});

// infoContainer: {
//   width: "100%",
//   paddingVertical: 20,
//   flexDirection: "row",
//   justifyContent: "space-around",
//   alignItems: "center",
// },
// infos: {
//   fontSize: 20,
//   fontFamily: "InriaSans_300Light",
// },
// titleText: {
//   fontSize: 25,
//   padding: 9,
//   fontFamily: "InriaSans_700Bold",
// },
// titleTextBis: {
//   fontSize: 25,
//   color: Colors.lightBrown,
// },
// imgContainer: {
//   width: "100%",
// },
// profileImg: {
//   width: "100%",
//   height: windowHeight < 600 ? windowHeight / 2 : windowHeight / 4,
//   borderRadius: 15,
// },
// profileItem: {
//   padding: 15,
//   justifyContent: "center",
//   alignItems: "center",
// },

// portofolioContainer: {
//   justifyContent: "center",
// },
// text: {
//   fontSize: 25,
//   fontFamily: "InriaSans_700Bold_Italic",
// },
// smallDeviceContainer: {
//   flexDirection: "row",
//   width: "100%",
// },
// smallImgContainer: {
//   width: "70%",
// },
// smallInfoContainer: {
//   flexGrow: 1,
//   paddingLeft: 9,
//   alignSelf: "flex-start",
// },
// smallTitleText: {
//   fontSize: 25,
//   fontFamily: "InriaSans_700Bold",
//   marginBottom: 10,
// },
// smallInfos: {
//   marginBottom: 5,
// },
