import {StyleSheet} from 'react-native';
import { Colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    overflow: 'hidden'
  },
  image: {
    top: 120,
    left: 3,
    width: 400,
    height: 700,
    position:'absolute',
    backgroundColor: Colors.transparent,
  },
  
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 25
},
dividerMargin: {
  marginVertical: 15,
  marginHorizontal: 15,
  borderWidth: 0.2
},

buttonContainer: {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  
},
buttonLeft: {
  flex: 1,
  padding: 18,
  paddingLeft: 150
},
buttonRight: {
  flex: 1,
  padding: 26,
},
buttonText: {
  color: 'white',
  //textAlign: 'center',
}
});
