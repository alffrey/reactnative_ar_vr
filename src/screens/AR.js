import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, PanResponder } from 'react-native';
import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroBox,
  ViroSphere,
  ViroMaterials,
  ViroARSceneNavigator,
  ViroNode,
  ViroAnimations,
} from '@viro-community/react-viro';
import { styles } from '../styles/style';


const PlaneDetectionScene = (props) => {
  let data = props.sceneNavigator.viroAppProps;
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
  const [boxPosition, setBoxPosition] = useState([0, 0, -1]);
  
    const handleDrag = (draggedPos, source) => {
      // Update the position of the box based on the drag position
      setBoxPosition([draggedPos[0], draggedPos[1], -1]);
    };

  const renderObject = () => {
    if (data.object) {
      return (
        <ViroNode position={[0, -1, -1]} rotation={[0, 0, 0]} scale={[4, 3, 4]} onDrag={handleDrag}>
        {[...Array(16)].map((_, index) => (
          <ViroNode
            key={index}
            position={[(index % 4) * 0.4, Math.floor(index / 4) * 0.4, -1]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
          >
            <ViroBox
              height={0.2}
              length={2}
              width={2}
              position={[0, -0.4, -1]}
              scale={[0.2, 0.2, 0.2]}
              materials={data.texture}
            />
            <ViroBox
              height={0.2}
              length={2}
              width={2}
              position={[0, -0, -1]}
              scale={[0.2, 0.2, 0.2]}
              materials={data.texture}
            />
            {/* <ViroBox
              height={2}
              length={0.2}
              width={2}
              position={[0, -0.2, -1.2]}
              scale={[0.2, 0.2, 0.2]}
              materials={data.texture}
            /> */}
            <ViroBox
              height={2}
              length={2}
              width={0.2}
              position={[0.2, -0.2, -1]}
              scale={[0.2, 0.2, 0.2]}
              materials={data.texture}
            />
            <ViroBox
              height={2}
              length={2}
              width={0.2}
              position={[-0.2, -0.2, -1]}
              scale={[0.2, 0.2, 0.2]}
              materials={data.texture}
            />
          </ViroNode>
        ))}
      </ViroNode>
      );
    } else {
      return (
        <ViroNode position={[0, -1, -1]} rotation={[0, 0, 0]} scale={[4, 3, 4]}>
  <ViroNode position={[0, -0.4, -1]} scale={[0.4, 0.4, 0.4]}>
    {/* Top surface of the table */}
    <ViroBox
      height={0.1}
      length={2.4}
      width={2.4}
      materials={data.texture}
    />

    {/* Legs of the table */}
    <ViroBox
      height={1.5}
      length={0.2}
      width={0.2}
      position={[0.8, -0.7, 0.8]}
      materials={data.texture}
    />
    <ViroBox
      height={1.5}
      length={0.2}
      width={0.2}
      position={[0.8, -0.7, -0.8]}
      materials={data.texture}
    />
    <ViroBox
      height={1.5}
      length={0.2}
      width={0.2}
      position={[-0.8, -0.7, 0.8]}
      materials={data.texture}
    />
    <ViroBox
      height={1.5}
      length={0.2}
      width={0.2}
      position={[-0.8, -0.7, -0.8]}
      materials={data.texture}
    />
  </ViroNode>
</ViroNode>

      );
    }
  };
  
  return (
    <ViroARScene>
         
      {renderObject()}
      
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
  const [isBoxVisible, setIsBoxVisible] = useState(true);
  const array = ['wood', 'metal', 'polishedwood', 'gold', 'white'];
  const imageSources = {
    wood: require('../../assets/images/wood_texture.jpg'),
    metal: require('../../assets/images/metal.jpg'),
    polishedwood: require('../../assets/images/polished_wood.jpg'),
    gold: require('../../assets/images/gold.jpg'),
    white: require('../../assets/images/white.jpg'),
  };
  const [showTextureSelection, setShowTextureSelection] = useState(true);
  
  const _handleTextureChange = (material) => {
    setCurrentMaterial(material);
  };

  const _handleButtonClick = () => {
    setShowTextureSelection(false);
  };

  const _handleObjectChange = () => {
    if(isBoxVisible==true)
     setIsBoxVisible(false);
    else
     setIsBoxVisible(true); // Change the material of the objects
  };

  return (
    <View style={styles.mainview}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{ scene: PlaneDetectionScene }}
        viroAppProps={{ texture: currentMaterial, object: isBoxVisible }}
        style={{ flex: 9 }}
      />
      {showTextureSelection ? (
        <View style={styles.controlsview}>
          <TouchableOpacity onPress={_handleButtonClick} style={styles.button}>
            <Text style={styles.buttonText}>Change Texture</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.controlsview}>
          {array.map((material, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => _handleTextureChange(material)}
              style={[styles.circle]}
            >
              <Image source={imageSources[material]} style={styles.circleImage} />
            </TouchableOpacity>
          ))}
        </View>
      )}
      <TouchableOpacity onPress={_handleObjectChange} style={styles.button}>
        <Text style={styles.buttonText}>Change Object</Text>
      </TouchableOpacity>
    </View>
  );
}



