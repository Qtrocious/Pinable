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
    shadowRadius: 15,
  },
  menuSlogan: {
    fontSize: 9, 
    color: "black", 
    alignSelf:'center', 
    marginLeft:35, 
    paddingVertical: 5, 
    fontWeight: "bold"
  },

})

//Hex codes: #293774, #9051A2, #FA5D66, #FFA1C5, #FDFEEC
export default styles;