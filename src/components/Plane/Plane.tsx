import type * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import type { JSX } from 'react'


type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
    wing_R_3: THREE.Mesh
    turbine_L: THREE.Mesh
    main001: THREE.Mesh
    ceiling: THREE.Mesh
    Floor: THREE.Mesh
    Wall_1: THREE.Mesh
    Wall_2: THREE.Mesh
    ceiling2: THREE.Mesh
  }
  materials: {
    "Material.001": THREE.MeshStandardMaterial
    "Material.002": THREE.MeshPhysicalMaterial
    "Material.003": THREE.MeshStandardMaterial
    "Material.004": THREE.MeshPhysicalMaterial
    "Material.005": THREE.MeshStandardMaterial
  }
}

export default function Plane(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./src/assets/models/plane.glb') as unknown as GLTFResult
  return (
    <group {...props} position={[0, 0, 0]} dispose={null}>
      {/* <mesh
        name="Plane"
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        scale={[27.649, 1, 17.937]}
      /> */}
      <mesh
        name="wing_R_3"
        castShadow
        receiveShadow
        geometry={nodes.wing_R_3.geometry}
        material={materials['Material.002']}
        position={[8.773, 1.696, -7.983]}
      />
      <mesh
        name="turbine_L"
        castShadow
        receiveShadow
        geometry={nodes.turbine_L.geometry}
        material={materials['Material.003']}
        position={[9.196, 2.855, 2.043]}
      />
      <mesh
        name="main001"
        castShadow
        receiveShadow
        geometry={nodes.main001.geometry}
        material={materials['Material.004']}
        position={[8.179, 2.579, 0.002]}
      />
      <mesh
        name="ceiling"
        castShadow
        receiveShadow
        geometry={nodes.ceiling.geometry}
        material={materials['Material.002']}
        position={[8.773, 1.696, -7.983]}
      />
      <mesh
        name="Floor"
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials['Material.005']}
        position={[2.224, 2.066, -0.008]}
        scale={[5.161, 1.178, 1.222]}
      />
      <mesh
        name="Wall_1"
        castShadow
        receiveShadow
        geometry={nodes.Wall_1.geometry}
        material={materials['Material.005']}
        position={[-3.19, 2.344, -0.065]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        name="Wall_2"
        castShadow
        receiveShadow
        geometry={nodes.Wall_2.geometry}
        material={materials['Material.005']}
        position={[7.591, 2.203, -0.015]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        name="ceiling2"
        castShadow
        receiveShadow
        geometry={nodes.ceiling2.geometry}
        material={materials['Material.002']}
        position={[8.773, 1.696, -7.983]}
      />
    </group>
  )
}

useGLTF.preload('./src/assets/models/plane.glb')