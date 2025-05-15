import React from 'react';
import { Bounded } from './components/Bounded.jsx';
import Scene2 from './Scene2.jsx';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const SkyDive = ({ }) => {

  return (
    <Bounded
      className="skydive h-screen "
    >
      <div style={{ fontFamily: "'LabsAmiga'" }} className="features_title text-2xl font-bold text-white px-8 py-2 mb-2 w-fit rounded-2xl bg-slate-900">
        FEATURES
      </div>
      <Canvas  
        gl={{ antialias: true, pixelRatio: 1 }}
        dpr={2} 
        shadows={{ enabled: true, type: THREE.BasicShadowMap }}
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 30,
        }}
        camera={{ fov: 27 }} 
        className='h-screen w-screen'
      >
        <Scene2/>
      </Canvas>
    </Bounded>
  );
};

export default SkyDive;
