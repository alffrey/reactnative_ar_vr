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

// const PlaneDetectionScene = (props) => {
//   let data=props.sceneNavigator.viroAppProps;
//   const [planeWidth, setPlaneWidth] = useState(0);
//   const [planeHeight, setPlaneHeight] = useState(0);
//   const [planeLength, setPlaneLength] = useState(0);
//   const [cubePosition, setCubePosition] = useState([0, -1, -1]);

//   const _onPlaneSelected = (anchor) => {
//     const { width, height, length, position } = anchor;
//     setPlaneWidth(width);
//     setPlaneHeight(height);
//     setPlaneLength(length);
//     setCubePosition(position);

//     console.log('Plane detected!');
//     console.log('Width:', width);
//     console.log('Height:', height);
//     console.log('Length:', length);
//   };

//   const handleTrackingUpdated = (state, reason) => {
//     if (state == ViroTrackingStateConstants.TRACKING_NORMAL) {
//       console.log('Tracking Normal', state, reason);
//       // Show my AR Scene experience    
//     } else if (state == ViroTrackingStateConstants.TRACKING_LIMITED) {
//       // Prompt user to move phone around
//       console.log('Tracking Limited', state, reason);
//     } else if (state == ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
//       // Prompt error to user
//       console.log('Tracking Normal', state, reason);
//     }  
//   }

//   return (
//     <ViroARScene
//       onTrackingUpdated={handleTrackingUpdated}
//     >
//       <ViroARPlane>
//         <ViroBox position={[0, .5, 0]} />
//       </ViroARPlane>
//         {/* <ViroARPlaneSelector
//           minHeight={0.01}
//           minWidth={0.01}
//           onPlaneSelected={_onPlaneSelected}
//         >
//         <ViroBox
//           height={2}
//           length={2}
//           width={2}
//           position={cubePosition}
//           scale={[0.2, 0.2, 0.2]}
//           materials={data.object}
//           animation={{ name: 'rotate', loop: true, run: true }}
//         />
//       </ViroARPlaneSelector> */}
//     </ViroARScene>
//   );
// };

// ViroMaterials.createMaterials({
//   wood: {
//     diffuseTexture: require('../../assets/images/wood_texture.jpg'),
//   },
//   metal: {
//     diffuseTexture: require('../../assets/images/metal.jpg'),
//   },
//   polishedwood: {
//     diffuseTexture: require('../../assets/images/polished_wood.jpg'),
//   },
//   gold: {
//     diffuseTexture: require('../../assets/images/gold.jpg'),
//   },
//   white: {
//     diffuseTexture: require('../../assets/images/white.jpg'),
//   },
// });

// ViroAnimations.registerAnimations({
//   rotate: {
//     duration: 2500,
//     properties: {
//       rotateY: '+=90',
//       rotateX: '+=90',
//       rotateZ: '+=90',
//     },
//   },
// });

// const AR = () => {
//   // const [currentMaterial, setCurrentMaterial] = useState('wood');
//   // const array=['wood','metal','polishedwood','gold','white'];
//   // const [num,setNum]=useState(0);
//   // const _handleTextureChange = () => {
//   //   let n=num+1;
//   //   n=n%(array.length);
//   //   setNum(n);
//   //   setCurrentMaterial(array[num]);;
//   // };
  
//   return (
//     <View style={styles.mainview}>
//       <ViroARSceneNavigator
//         initialScene={{ scene: PlaneDetectionScene }}
//         autofocus={true}
//         // viroAppProps={{"object": currentMaterial}}
//         style={{ flex: 9 }}
//       />
//       {/* <View style={styles.controlsview}>
//         <TouchableOpacity onPress={_handleTextureChange}>
//           <Text style={styles.Buttext}>Change Texture</Text>
//         </TouchableOpacity>
//       </View> */}
//     </View>
//   );
// }

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
