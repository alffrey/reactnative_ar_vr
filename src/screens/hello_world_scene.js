import React, {useState} from 'react';
import {
    ViroARScene,
    ViroText,
    ViroTrackingStateConstants,
  } from '@viro-community/react-viro';
  import { styles } from '../styles/style';

  export default function HelloWorldSceneAR() {
    const [text, setText] = useState('Initializing AR...');
  
    function onInitialized(state, reason) {
      console.log('guncelleme', state, reason);
      if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
        setText('Hello Tharun!');
      } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
        // Handle loss of tracking
      }
    }
  
    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        <ViroText
          text={text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
      </ViroARScene>
    );
  };

 