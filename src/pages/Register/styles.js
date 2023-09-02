import { StyleSheet } from "react-native";

export default StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 100,
        paddingHorizontal: 20,
      },
      title: {
        fontFamily: "Alata",
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        marginBottom: 20,
      },
      label: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5,
        alignSelf: "flex-start",
        color: "black",
      },
      input: {
        width: "100%",
        height: 90,
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 18,
        color: "black",
        fontFamily: "Alata",
      },
      buttonRegister: {
        backgroundColor: "#ec4760",
        borderRadius: 8,
        fontFamily: "Alata-Regular",
        height: 50,
        display: 'flex',
        flexDirection: "column",

        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        borderRadius: 15,
      },
      listFormRegister:{
        width: "100%",
      }

})