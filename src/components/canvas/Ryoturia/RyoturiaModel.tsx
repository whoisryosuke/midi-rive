/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 E:\3D Design\Projects\2024\MIDI Input Test\web\MIDI to Keyframe - Piano Template - Web V1.glb -t 
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    WhiteKeyC: THREE.Mesh;
    ["BlackKeyC#"]: THREE.Mesh;
    ["BlackKeyG#"]: THREE.Mesh;
    WhiteKeyD: THREE.Mesh;
    WhiteKeyE: THREE.Mesh;
    WhiteKeyF: THREE.Mesh;
    WhiteKeyG: THREE.Mesh;
    WhiteKeyA: THREE.Mesh;
    WhiteKeyB: THREE.Mesh;
    ["BlackKeyD#"]: THREE.Mesh;
    ["BlackKeyF#"]: THREE.Mesh;
    ["BlackKeyA#"]: THREE.Mesh;
    ScreenBorder: THREE.Mesh;
    CaseR3: THREE.Mesh;
    ScreenInside: THREE.Mesh;
    ["BlackKeyG#Bool"]: THREE.Mesh;
    ["BlackKeyF#Bool"]: THREE.Mesh;
    ["BlackKeyD#Bool"]: THREE.Mesh;
    ["BlackKeyC#Bool"]: THREE.Mesh;
    ["BlackKeyA#Bool"]: THREE.Mesh;
    ButtonsC: THREE.Mesh;
    ["ButtonsC#"]: THREE.Mesh;
    ButtonsD: THREE.Mesh;
    ["ButtonsD#"]: THREE.Mesh;
    ButtonsE: THREE.Mesh;
    ButtonsF: THREE.Mesh;
    ["ButtonsF#"]: THREE.Mesh;
    ButtonsG: THREE.Mesh;
    ["ButtonsG#"]: THREE.Mesh;
    ButtonsA: THREE.Mesh;
    ["ButtonsA#"]: THREE.Mesh;
    ButtonsB: THREE.Mesh;
    Buttons013: THREE.Mesh;
    Buttons014: THREE.Mesh;
  };
  materials: {
    ["PianoKey.White"]: THREE.MeshStandardMaterial;
    ["PianoKey.Black"]: THREE.MeshStandardMaterial;
    ["Piano.Screen.Border"]: THREE.MeshStandardMaterial;
    PianoCase: THREE.MeshStandardMaterial;
    ["Piano.Screen.Inside"]: THREE.MeshStandardMaterial;
    ["PianoKey.Black.001"]: THREE.MeshStandardMaterial;
    ["Button.DynamicText.001"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function RyoturiaModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/MIDI to Keyframe - Piano Template - Web V2.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.WhiteKeyC.geometry}
        material={materials["PianoKey.White"]}
        position={[-0.488, 0.901, -5.421]}
      />
      <mesh
        geometry={nodes["BlackKeyC#"].geometry}
        material={materials["PianoKey.Black"]}
        position={[-0.096, 1.014, -5.417]}
      />
      <mesh
        geometry={nodes["BlackKeyG#"].geometry}
        material={materials["PianoKey.Black"]}
        position={[4.304, 1.014, -5.417]}
      />
      <mesh
        geometry={nodes.WhiteKeyD.geometry}
        material={materials["PianoKey.White"]}
        position={[0.578, 0.901, -5.421]}
      />
      <mesh
        geometry={nodes.WhiteKeyE.geometry}
        material={materials["PianoKey.White"]}
        position={[1.644, 0.901, -5.421]}
      />
      <mesh
        geometry={nodes.WhiteKeyF.geometry}
        material={materials["PianoKey.White"]}
        position={[2.71, 0.901, -5.421]}
      />
      <mesh
        geometry={nodes.WhiteKeyG.geometry}
        material={materials["PianoKey.White"]}
        position={[3.775, 0.901, -5.421]}
      />
      <mesh
        geometry={nodes.WhiteKeyA.geometry}
        material={materials["PianoKey.White"]}
        position={[4.841, 0.901, -5.421]}
      />
      <mesh
        geometry={nodes.WhiteKeyB.geometry}
        material={materials["PianoKey.White"]}
        position={[5.907, 0.901, -5.421]}
      />
      <mesh
        geometry={nodes["BlackKeyD#"].geometry}
        material={materials["PianoKey.Black"]}
        position={[1.111, 1.014, -5.417]}
      />
      <mesh
        geometry={nodes["BlackKeyF#"].geometry}
        material={materials["PianoKey.Black"]}
        position={[3.217, 1.014, -5.417]}
      />
      <mesh
        geometry={nodes["BlackKeyA#"].geometry}
        material={materials["PianoKey.Black"]}
        position={[5.357, 1.014, -5.417]}
      />
      <mesh
        geometry={nodes.ScreenBorder.geometry}
        material={materials["Piano.Screen.Border"]}
        position={[2.815, 1.423, -8.023]}
      />
      <mesh
        geometry={nodes.CaseR3.geometry}
        material={materials.PianoCase}
        position={[-0.682, 1.109, -2.962]}
      />
      <mesh
        geometry={nodes.ScreenInside.geometry}
        material={materials["Piano.Screen.Inside"]}
        position={[2.815, 1.414, -8.023]}
        scale={0.991}
      />
      <mesh
        geometry={nodes["BlackKeyG#Bool"].geometry}
        material={materials["PianoKey.Black.001"]}
        position={[4.304, 1.014, -5.902]}
        scale={1.132}
      />
      <mesh
        geometry={nodes["BlackKeyF#Bool"].geometry}
        material={materials["PianoKey.Black.001"]}
        position={[3.217, 1.014, -5.902]}
        scale={1.132}
      />
      <mesh
        geometry={nodes["BlackKeyD#Bool"].geometry}
        material={materials["PianoKey.Black.001"]}
        position={[1.111, 1.014, -5.902]}
        scale={1.132}
      />
      <mesh
        geometry={nodes["BlackKeyC#Bool"].geometry}
        material={materials["PianoKey.Black.001"]}
        position={[-0.096, 1.014, -5.902]}
        scale={1.132}
      />
      <mesh
        geometry={nodes["BlackKeyA#Bool"].geometry}
        material={materials["PianoKey.Black.001"]}
        position={[5.357, 1.014, -5.902]}
        scale={1.132}
      />
      <mesh
        geometry={nodes.ButtonsC.geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes["ButtonsC#"].geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes.ButtonsD.geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes["ButtonsD#"].geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes.ButtonsE.geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes.ButtonsF.geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes["ButtonsF#"].geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes.ButtonsG.geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes["ButtonsG#"].geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes.ButtonsA.geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes["ButtonsA#"].geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes.ButtonsB.geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes.Buttons013.geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
      <mesh
        geometry={nodes.Buttons014.geometry}
        material={materials["Button.DynamicText.001"]}
        position={[-0.518, 1.453, -6.839]}
      />
    </group>
  );
}

export default RyoturiaModel;

useGLTF.preload("/models/MIDI to Keyframe - Piano Template - Web V2.glb");