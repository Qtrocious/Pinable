import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  menuWelcome: {
    flex: 1,
    backgroundColor: '#FDFEEC',
    alignItems: 'center',
    justifyContent: 'center',
    },
  menuText: {
    fontSize: 22, 
    fontFamily: "Arial",
    color: "white",  
  },
  menuButton: {
    backgroundColor: '#FA5D66',
    padding: 10,
    borderRadius: 15,
    borderWidth: 3,
    marginTop: 20,
    shadowColor: '#293774',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5, 
    shadowRadius: 5,
  },
    menuStarted: {
    backgroundColor: '#293774',
    padding: 50,
    marginTop: 20,
    borderRadius: 100,
    borderWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1, 
    shadowRadius: 5,
  },
  menuSlogan: {
    fontSize: 9.5, 
    color: "black", 
    alignSelf:'center', 
    marginLeft:35, 
    paddingVertical: 5, 
    fontWeight: "bold"
  },
  menuImage: {
    height: 200, 
    width:200, 
    position: 'relative', 
    top: -50,
    marginBottom: -50,},
    
  menuNextPage: {
    backgroundColor: '#FFA1C5',
    padding: 10,
    borderRadius: 15,
    borderWidth: 3,
    marginTop: 20,
    shadowColor: '#293774',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5, 
    shadowRadius: 5,
  },
})

//Hex codes: #293774, #9051A2, #FA5D66, #FFA1C5, #FDFEEC
export default styles;