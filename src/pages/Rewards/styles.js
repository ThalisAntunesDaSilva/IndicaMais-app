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
    flex: 50,
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 40,
  },
  title: {
    paddingTop: 20,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Alata-Regular',
  },
  titleScore: {
    fontSize: 16,
    fontFamily: 'Alata-Regular',
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
    borderRadius: 10,
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
    width: 60,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC4760',
    marginRight: -100,
  },
  deleteButton: {
    width: 60,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC4760',
    marginRight: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;
