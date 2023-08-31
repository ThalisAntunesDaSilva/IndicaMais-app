import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 20, 
    paddingLeft: 20,
    flexDirection: 'column',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  backText: {
    marginLeft: 5,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    height: 40,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
