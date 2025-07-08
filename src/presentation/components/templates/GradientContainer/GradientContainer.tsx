import { Box } from '@components/atoms';
import React, { type PropsWithChildren, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import LinearGradient, {
  type LinearGradientProps,
} from 'react-native-linear-gradient';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export type GradientContainerProps = PropsWithChildren<{
  colors: LinearGradientProps['colors'];
  animated?: boolean;
}>;

export const GradientContainer: React.FC<GradientContainerProps> = ({
  animated = true,
  colors,
  children,
  ...props
}) => {
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animated) {
      const animation = Animated.loop(
        Animated.timing(rotateAnimation, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      );
      animation.start();
      return () => animation.stop();
    }
  }, [animated]);

  const rotateInterpolation = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <AnimatedBox
        position="absolute"
        align-self="center"
        width={'120%'}
        left={'-12%'}
        aspectRatio={1}
        style={{ transform: [{ rotate: rotateInterpolation }] }}
        {...props}
      >
        <LinearGradient
          colors={colors}
          useAngle
          angle={45}
          style={{ flex: 1 }}
        />
      </AnimatedBox>
      {children}
    </>
  );
};
