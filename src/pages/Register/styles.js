import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 90,
    paddingHorizontal: 10,
  },
  titleRegister:{
    fontFamily: 'Alata-Regular',
    fontSize: 30,
    color: "black",
    marginBottom: 5,
  },

  label: {
    fontFamily: 'Alata-Regular',
    fontSize: 16,
    marginBottom: 5,
    alignSelf: "flex-start",
    color: "black",
  },

  input: {
    width: "100%",
    height: 45,
    borderColor: "gray",
    borderWidth: 2,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  inputLabelRegister: {
    width: "100%",
    fontSize: 16,
    fontFamily: 'Alata-Regular',
    marginBottom: 5,
    color: "#A7A6A5",
    width: "100%",
  },
  buttonRegister: {
    width: "90%",
    backgroundColor: "#EC4760",
    borderRadius: 20,
    fontFamily: "Alata-Regular",
    height: 70,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonTextRegister: {
    color: "#F4F6F5",
    fontFamily: "Alata-Regular",
    fontSize: 16,
    borderRadius: 16,
    marginBottom: 0,
  },
  listFormRegister: {
    width: "100%",
  },
  signupContainer: {
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 3,
    marginVertical: 20,
  },
  signupTextRegister: {
    fontSize: 16,
    color: "#A7A6A5",
    fontFamily: "Alata-Regular",
  },
  signupLinkTextRegister: {
    color: "#EC4760",
    textDecorationLine: "underline",
    marginLeft: 5,
    fontFamily: "Alata-Regular",
  },
});
