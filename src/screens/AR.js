import React, { useState } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroBox,
  ViroMaterials,
  ViroARSceneNavigator,
  ViroAnimations,
} from '@viro-community/react-viro';
import { styles } from '../styles/style';

const PlaneDetectionScene = (props) => {
  let data=props.sceneNavigator.viroAppProps;
  const [planeWidth, setPlaneWidth] = useState(0);
  const [planeHeight, setPlaneHeight] = useState(0);
  const [planeLength, setPlaneLength] = useState(0);
  const [cubePosition, setCubePosition] = useState([0, -1, -1]);

  const _onPlaneSelected = (anchor) => {
    const { width, height, length, position } = anchor;
    setPlaneWidth(width);
    setPlaneHeight(height);
    setPlaneLength(length);
    setCubePosition(position);

    console.log('Plane detected!');
    console.log('Width:', width);
    console.log('Height:', height);
    console.log('Length:', length);
  };

  return (
    <ViroARScene>
        <ViroARPlaneSelector
        minHeight={0.01}
        minWidth={0.01}
        onPlaneSelected={_onPlaneSelected}
        alignment={ViroARPlaneSelector.HorizontalVertical}
      >
        <ViroBox
          height={2}
          length={2}
          width={2}
          position={cubePosition}
          scale={[0.2, 0.2, 0.2]}
          materials={data.object}
          animation={{ name: 'rotate', loop: true, run: true }}
        />
      </ViroARPlaneSelector>
    </ViroARScene>
  );
};

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

ViroAnimations.registerAnimations({
  rotate: {
    duration: 2500,
    properties: {
      rotateY: '+=90',
      rotateX: '+=90',
      rotateZ: '+=90',
    },
  },
});

export default function App() {
  const [currentMaterial, setCurrentMaterial] = useState('wood');
  const array=['wood','metal','polishedwood','gold','white'];
  const [num,setNum]=useState(0);
  const _handleTextureChange = () => {
    let n=num+1;
    n=n%(array.length);
    setNum(n);
    setCurrentMaterial(array[num]);;
  };
  return (
    <View style={styles.mainview}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{ scene: PlaneDetectionScene }}
        viroAppProps={{"object":currentMaterial}}
        style={{ flex: 9 }}
      />
      <View style={styles.controlsview}>
        <TouchableOpacity onPress={_handleTextureChange}>
          <Text style={styles.Buttext}>Change Texture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

