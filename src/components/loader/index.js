import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Loader = () => {
  const {isLoading} = useSelector(state => state.loader);
  // *
  const [animation, setAnimation] = useState();

  // *
  useEffect(() => {
    if (isLoading) {
      animation.play();
    }

    return () => {
      if (isLoading) {
        animation.reset();
      }
    };
  }, [animation]);

  const animationLottieRef = anim => {
    setAnimation(anim);
  };

  return (
    <>
      {isLoading && (
        <View style={styles.loading}>
          <LottieView
            ref={animationLottieRef}
            source={require('../../assets/animations/loader.json')}
            loop={true}
            autoplay
            style={{
              width: wp(35),
            }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // opacity: 0.5,
  },
});

export default Loader;
