import React, { useState } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroBox,
  ViroMaterials,
  ViroARSceneNavigator,
  ViroTrackingStateConstants,
} from '@viro-community/react-viro';
import { styles } from '../styles/style';

const PlaneDetectionScene = (props) => {
  let texture = props?.sceneNavigator?.viroAppProps?.texture;
  console.log(`texture:: ${texture}`);

  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require('../../assets/images/wood_texture.jpg'),
    },
    metal: {
      diffuseTexture: require('../../assets/images/metal.jpg'),
    },
    polishedwood: {
      diffuseTexture: require('../../assets/images/polished_wood.jpg'),
    },
    gold: {
      diffuseTexture: require('../../assets/images/gold.jpg'),
    },
    white: {
      diffuseTexture: require('../../assets/images/white.jpg'),
    },
  });

  const onInitialized = (state, reason) => {
    if (state == ViroTrackingStateConstants.TRACKING_NORMAL) {
      console.log('Tracking Normal', state, reason);
      // Show my AR Scene experience    
    } else if (state == ViroTrackingStateConstants.TRACKING_LIMITED) {
      // Prompt user to move phone around
      console.log('Tracking Limited', state, reason);
    } else if (state == ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Prompt error to user
      console.log('Tracking Unavailable', state, reason);
    }
  }

  return (
    <ViroARScene 
      onTrackingUpdated={onInitialized}
      anchorDetectionTypes={['PlanesHorizontal', 'PlanesVertical']}
      onAnchorFound={() => console.log('onAnchorFound')}
      onAnchorUpdated={() => console.log('onAnchorUpdated')}
      onAnchorRemoved={() => console.log('onAnchorRemoved')}
    > 
      <ViroARPlaneSelector
        minHeight={.5}
        minWidth={.5}
        alignment='Horizontal'
        onPlaneSelected={(anchor) => console.log('plane selected:: ', anchor)}
      >
        <ViroBox
          height={0.25}
          length={2.25}
          width={1}
          position={[0, 0, 0]}
          scale={[.25, .25, .25]}
          materials={texture}
        />
        <ViroBox
          height={1.75}
          length={0.25}
          width={1}
          position={[0, 0.25, -0.25]}
          scale={[.25, .25, .25]}
          materials={texture}
        />
        <ViroBox
          height={0.25}
          length={2.25}
          width={1}
          position={[0, 0.5, 0]}
          scale={[.25, .25, .25]}
          materials={texture}
        />
        <ViroBox
          height={1.75}
          length={0.25}
          width={1}
          position={[0, 0.25, 0.25]}
          scale={[.25, .25, .25]}
          materials={texture}
        />
      </ViroARPlaneSelector>
    </ViroARScene>
  );
};

const AR = () => {
  const textures = ['wood','metal','polishedwood','gold','white'];
  const [texture, setTexture] = useState(textures[0]);

  const handleTextureChange = (index) => {
    setTexture(textures[index]);
  };

  return (
    <>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: PlaneDetectionScene,
        }}
        viroAppProps={{"texture": texture}}
        style={styles.mainview}
      />
      <View style={styles.controlsview}>
        <TouchableOpacity onPress={() => handleTextureChange(0)}>
          <Text style={styles.Buttext}>Wood</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTextureChange(1)}>
          <Text style={styles.Buttext}>Metal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTextureChange(2)}>
          <Text style={styles.Buttext}>Polished Wood</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTextureChange(3)}>
          <Text style={styles.Buttext}>Gold</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTextureChange(4)}>
          <Text style={styles.Buttext}>White</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AR;
