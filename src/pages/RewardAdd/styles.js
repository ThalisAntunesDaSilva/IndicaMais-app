import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF2F1',
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        paddingTop: 20,
    },
    backButton: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    backText: {
        marginLeft: 5,
         fontFamily: 'Alata-Regular'
    },
    topContainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        marginBottom: 40,
      },
      firstContainer: {
        flex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        color: 'gray',
        paddingHorizontal: 10,
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
      title: {
        paddingTop: 20,
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Alata-Regular',
       
      },
      form: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
   alignItems: 'center',
      },
      label: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'gray',
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

      loginButtonText: {
        fontFamily: 'Alata-Regular',
        fontWeight: 'bold',
        color: 'white',
      },

      addButton: {
        borderRadius: 50,
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: '#EC4760',
        justifyContent: 'center',
        alignItems: 'center',
      },
      listItem: {
        width: '100%',
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
      },
      itemText: {
        fontWeight: 'bold',
      },
      addImageButton: {
        marginTop: 40,
        width: '100%',
        height: 45,
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#EC4760',
        color: '#fff',
        borderRadius: 10,
      },
      editButton: {
        width: 75,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EC4760',
        marginRight: -100,
      },
      deleteButton: {
        width: 75,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EC4760',
      },
      buttonText: {
        color: 'white',
        alignSelf: 'center',
      },
      addImage: {
        marginTop: 150,
      }
});

export default styles;