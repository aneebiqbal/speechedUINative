import {StyleSheet} from 'react-native';
import { Colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0E0E0',
    height: '100%',
    overflow: 'hidden'
  },
  image: {
    top: 10,
    left: -130,
    width: 600,
    height: 900,
    position:'absolute',
    backgroundColor: Colors.transparent,
  },
  
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 25
},
  text: {
    position: 'absolute',
    top: 40,
    left: 40,
    fontSize: 26,
    color: 'white',
    fontWeight:'600',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  highlighted: {
    backgroundColor: '#E2B65C',
  },
  GeneralInfo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#E2B65C',
    borderWidth: 5,
    overflow: 'hidden',
    justifyContent:"center"
  },
  image2: {
    width: 140,
    height: 90,
    right: 25,
    backgroundColor: Colors.transparent
  },
  inputFieldContainer: {
    marginTop: 40,
    margin: 20,
  },
});
