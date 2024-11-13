import React from 'react';
import { StatusBar, HStack, ScrollView, VStack,Box,SafeAreaView } from '@/components/ui';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Video,ResizeMode  } from 'expo-av';
import { Keyboard,StyleSheet, Platform } from "react-native";

type GuestLayoutProps = {
  children: React.ReactNode;
};

export default function GuestLayout(props: GuestLayoutProps) {
  const videoPath = 'public/videos/aigei.mp4';  // 直接引用 public 中的资源路径

  const VideoBackground = () => {
    // if (Platform.OS === 'web') {
      return (
        <div style={{ 
          position: 'fixed', // 使用 fixed 定位，确保视频铺满整个屏幕
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: -1, // 确保视频在背景
        }}>
        <video autoPlay loop muted style={{
        width: '100%',
        height: '100%',objectFit: 'cover' }}>
          <source src={videoPath} type="video/mp4" />
        </video>
        </div>
      );  
    // }else{  
      // const videoSource = require("@/shared/assets/videos/aigei.mp4");

    // return (
    //   <VStack></VStack>
      // <Video
      //   // source={videoSource}
      //   style={styles.video}
      //   shouldPlay
      //   isLooping
      //   isMuted
      //   resizeMode={ResizeMode.COVER}
      // />
  //  );
  //  }
  };
  return (
    <SafeAreaView className="w-full h-full">
      
      <VideoBackground />
        <Box className="w-full h-full flex-1">
          <ScrollView
            className="w-full h-full"
            contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
            }}
            bounces={false}
          >
            <VStack className="md:items-center md:justify-center flex-1 w-full md:gap-10 gap-16 md:m-auto md:w-1/2 h-full">
              {props.children}
            </VStack>
          </ScrollView>
        </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
