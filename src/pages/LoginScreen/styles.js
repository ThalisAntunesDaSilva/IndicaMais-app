import { StyleSheet } from "react-native";

export default StyleSheet.create({  

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
   
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '100%',
    
        height: 400,
      
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
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

    },
    inputContainer: {
        marginBottom: 10,
    },

      inputContainer: {
        marginBottom: 10,
      },
      passwordInputWrapper: {

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
        width: '100%',
      },
      loginButtonContainer: {
        marginTop: 270,
        alignItems: 'center',
      },
      loginButton: {
        marginTop: 40,
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