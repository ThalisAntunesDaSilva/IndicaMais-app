import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  viewTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    width: "100%",
    marginBottom: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 15,
    fontFamily: 'Alata-Regular',
  },
  form: {
    width: "100%",
  },
  infoCardLabel:{
    fontFamily: 'Alata-Regular',
  },
  inputBackground: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  indicaInput: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  signupContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    borderRadius: 8,
  },
  signupLinkText: {
    color: "#EC4760",
    textDecorationLine: "underline",
    marginBottom: 15,
    borderRadius: 10,
  },
  indiqueButtonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  indiqueButton: {
    width: "100%",
    backgroundColor: "#EC4760",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  indiqueButtonText: {
    fontFamily: 'Alata-Regular',
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  logosContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },

  titleFormulario: {
    fontFamily: 'Alata-Regular',
    padding: 10,
    fontWeight: 600,
    color: "black",
    fontSize: 20,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
  infoCard: {
    padding: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },},
    buttonCloseModalLogin:{
      marginTop: 20,
      fontFamily: 'Alata-Regular',
      backgroundColor: '#EC4760',
      width: 90,
      height: 30,
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  
    },
    buttonTextCloseModalLogin:{
      fontWeight: 'bold',
      color: 'white',
    },
});
