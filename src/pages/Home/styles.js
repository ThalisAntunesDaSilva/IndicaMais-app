import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
    width: "100%",
    height : "100%"
  },

  containerHeader:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: '#fff',
    width: "100%",
  },

  viewInformation:{
    display: "flex",
    flexDirection: "column",
  },
  nameText:{
fontSize: 25
  },

  containerButtons:{

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: '#fff',
    width: "100%",
    height : "70%"
  },
      buttonHome: {
        backgroundColor: '#EC4760',
        width: '90%',
        height: 120,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

      },

      buttonHomeTextTitle: {
        fontSize: 20,
        color: '#fff'
      },
      buttonHomeTextSubtitle: {
        color: '#fff'
      }

})