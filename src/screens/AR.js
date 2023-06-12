import React, { Component } from 'react';
import { View } from 'react-native';
import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroBox,
  ViroMaterials,
  ViroARSceneNavigator,
  ViroAnimations,
  ViroConstants,
} from '@viro-community/react-viro';

export class PlaneDetectionScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planeWidth: 0,
      planeHeight: 0,
      planeLength: 0,
      cubePosition: [0, -1, -1], // Initial position of the cube
    };
  }

  _onPlaneSelected = (anchor) => {
    const { width, height, length, position } = anchor;
    this.setState({
      planeWidth: width,
      planeHeight: height,
      planeLength: length,
      cubePosition: position, // Update the cube position to the detected plane position
    });

    console.log('Plane detected!');
    console.log('Width:', width);
    console.log('Height:', height);
    console.log('Length:', length);
  };

  render() {
    const { cubePosition } = this.state;

    return (
      <ViroARScene>
        <ViroARPlaneSelector
          minHeight={0.01}
          minWidth={0.01}
          onPlaneSelected={this._onPlaneSelected}
          alignment='ViroConstants.ARPlaneAlignmentTypes.HorizontalVertical'
        >
          <ViroBox
            height={2}
            length={2}
            width={2}
            position={cubePosition} // Set the position of the cube based on the detected plane
            scale={[0.2, 0.2, 0.2]}
            materials={['wood']}
            animation={{ name: 'rotate', loop: true, run: true }}
          />
        </ViroARPlaneSelector>
      </ViroARScene>
    );
  }
}

ViroMaterials.createMaterials({
  wood: {
    diffuseTexture: require('../../assets/images/wood_texture.jpg'),
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
  return (
    <View style={{ flex: 1 }}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{ scene: PlaneDetectionScene }}
      />
    </View>
  );
}
