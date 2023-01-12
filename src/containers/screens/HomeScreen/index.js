import React from 'react';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, ShadowBox, ShadowCard } from '../../../components/common';
import strings from '../../../constants/strings';
import { Images } from '../../../theme';


const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const HomeScreen = ({navigation}) => {

  return (
    <ScrollView>
    <SafeAreaView style={[styles.container]}>
        <Header
          drawerLeft
          user
        />
        <ImageBackground
        source={Images.background3}
        style={styles.image}
      />
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <View style={styles.box}>
          <Image
            source={Images.homebox}
            style={styles.box}
          />
        </View>
        <Text style={styles.text}>{strings.weddingSpeeches}</Text>
      </View>

      <View style={{flexDirection:"row", justifyContent:"center", marginTop: 13}}>
        <Text style={{fontWeight:'500'}}>{strings.desiredSpeech}</Text>
      </View>

      <ShadowCard
        heading={'Bestman’s'}
        heading2={'Speech'}
        image={Images.nextButton}
        image2={Images.homeCard}
        onPress={() => navigation.navigate('CreateSpeechScreen')}
      />
      <View style={{flexDirection:"row", justifyContent: 'space-between', paddingHorizontal: 10, marginTop: -10 }}>
        <View style={{flex: 0.5}}>
          <ShadowBox
          heading={'Groom'}
          heading2={'Speech'}
          image={Images.nextButton}
          image2={Images.groomSpeech}
          onPress={() => navigation.navigate('CreateSpeechScreen')}
          />
        </View>
        <View style={{flex: 0.5}}>
          <ShadowBox
          heading={'Bride'}
          heading2={'Speech'}
          image={Images.nextButton}
          image2={Images.brideSpeech}
          onPress={() => navigation.navigate('CreateSpeechScreen')}
          />
        </View>
      </View>

      <View style={{flexDirection:"row", justifyContent: 'space-between', paddingHorizontal: 10, }}>
        <View style={{flex: 0.5, alignItems: 'stretch'}}>
          <ShadowBox
          heading2={strings.MiadOfHonor}
          image={Images.nextButton}
          image2={Images.maidOfHonor}
          imgStyle={{marginTop: 5}}
          onPress={() => navigation.navigate('CreateSpeechScreen')}
          />
        </View>
        <View style={{flex: 0.5}}>
          <ShadowBox
          heading={'Bride Father'}
          heading2={'Speech'}
          image={Images.nextButton}
          image2={Images.brideFather}
          imgStyle={{marginTop: 34}}
          onPress={() => navigation.navigate('CreateSpeechScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

HomeScreen.propTypes = propTypes;
HomeScreen.defaultProps = defaultProps;

export default HomeScreen;