import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 15,
  },
  form: {
    width: '100%',
  },
  inputBackground: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  indicaInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  signupContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    borderRadius: 8,
  },
  signupLinkText: {
    color: '#EC4760',
    textDecorationLine: 'underline',
    marginBottom: 15,
    borderRadius: 10,
  },
  indiqueButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  indiqueButton: {
    width: '100%',
    backgroundColor: '#EC4760',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  indiqueButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  logosContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  titleFormulario: {
    padding: 10,
    fontWeight: 600,
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'spaceBetween',
    fontWeight: 'bold',
  },
  infoCard: {
    padding: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
});
