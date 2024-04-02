/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, {useRef} from 'react'
import {useGLTF} from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const {nodes, materials} = useGLTF('/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_body015.geometry} material={materials.plastic} />
      <mesh geometry={nodes.Mesh_body015_1.geometry} material={materials.paintBlue} />
      <mesh geometry={nodes.Mesh_body015_2.geometry} material={materials._defaultMat} />
      <mesh geometry={nodes.Mesh_body015_3.geometry} material={materials.window} />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft025.geometry}
        material={nodes.Mesh_wheel_frontLeft025.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft025_1.geometry}
        material={nodes.Mesh_wheel_frontLeft025_1.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft025_2.geometry}
        material={nodes.Mesh_wheel_frontLeft025_2.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft026.geometry}
        material={nodes.Mesh_wheel_frontLeft026.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft026_1.geometry}
        material={nodes.Mesh_wheel_frontLeft026_1.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft026_2.geometry}
        material={nodes.Mesh_wheel_frontLeft026_2.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft027.geometry}
        material={nodes.Mesh_wheel_frontLeft027.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft027_1.geometry}
        material={nodes.Mesh_wheel_frontLeft027_1.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft027_2.geometry}
        material={nodes.Mesh_wheel_frontLeft027_2.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft012.geometry}
        material={nodes.Mesh_wheel_frontLeft012.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft012_1.geometry}
        material={nodes.Mesh_wheel_frontLeft012_1.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft012_2.geometry}
        material={nodes.Mesh_wheel_frontLeft012_2.material}
      />
    </group>
  )
}

useGLTF.preload('/model.gltf')
