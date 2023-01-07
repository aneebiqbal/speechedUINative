import {StyleSheet} from 'react-native';
import { Colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0E0E0',
    height: '100%',
    overflow: 'hidden'
  },
  image: {
    top: -60,
    right: -100,
    width: 500,
    height: 900,
    position:'absolute',
    backgroundColor: Colors.transparent,
  },
  box: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    position: 'absolute',
    top: 40,
    left: 40,
    fontSize: 26,
    color: 'white',
    fontWeight:'600',
  },
});
