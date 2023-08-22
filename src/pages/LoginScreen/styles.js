import { StyleSheet } from "react-native";

export default StyleSheet.create({  

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      form: {
        width: '100%',
      },
      input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      signupContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      signupText: {
        fontSize: 16,
      },
      signupLinkText: {
        color: '#EC4760',
        textDecorationLine: 'underline',
        marginLeft: 5,
      },
      passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, 
        borderColor: 'gray',  
        paddingHorizontal: 20,
      },
      passwordInput: {
        flex: 1,
        height: 40,
        paddingVertical: 5,
        paddingRight: 5,
      },
      inputContainer: {
        marginBottom: 10,
      },
      passwordInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
      },
      passwordIcon: {
        marginRight: 10,
      },
      inputLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left', 
        color: '#A7A6A5',
      },
      loginButtonContainer: {
        marginTop: 270,
        alignItems: 'center',
      },
      loginButton: {
        width: '60%', 
        paddingVertical: 15,
        paddingHorizontal: 30, 
        backgroundColor: '#EC4760',
        borderRadius: 20, 
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputBackground: {
        backgroundColor: '#EFF2F1', 
        borderWidth: 0,
        borderRadius: 8, 
      },
      loginButtonText: {
        fontWeight: 'bold',
        color: 'white',
      }
})