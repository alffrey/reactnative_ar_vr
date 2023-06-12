import React, {useState} from 'react';
import {
    ViroARScene,
    ViroText,
    ViroBox,
    ViroTrackingStateConstants,
    ViroMaterials,
    ViroAnimations,
  } from '@viro-community/react-viro';
  import { styles } from '../styles/style';

  export default function HelloWorldSceneAR() {
    ViroMaterials.createMaterials({
      wood:{
        diffuseTexture:require('../../assets/images/wood_texture.jpg')
      }
    })
    ViroAnimations.registerAnimations({
      rotate:{
          duration:2500,
          properties:{
            rotateY:'+=90'
          }
      }
    })
    return (
      <ViroARScene >
        <ViroBox 
          height={2}
          lenght={2}
          width={2}
          position={[0,-1,-1]}
          scale={[0.2,0.2,0.2]}
          materials={["wood"]}
          animation={{name:'rotate',loop:true,run:true}}
        />
      </ViroARScene>
    );
  };

 