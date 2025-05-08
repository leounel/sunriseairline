import './Scene.css'
import { Canvas} from "@react-three/fiber"
import { Environment, Lightformer, OrbitControls } from "@react-three/drei"
import Plane from "@/components/Plane/Plane.tsx"

function Scene() {

    return (
      <div className='canvas-container'>
        <Canvas camera={{position: [-25, 3, 0]}}>
          <Plane />
          <Environment resolution={512}>
              {/* Ceiling */}
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
              <Lightformer intensity={3} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 3, 1]} />
              <Lightformer intensity={3} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
              {/* Sides */}
              <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
              <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
              {/* Key */}
              <Lightformer form="ring" color="#FF4D00" intensity={10} scale={2} position={[8, 5, 0]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </Environment>
            <OrbitControls/>
        </Canvas>
      </div>
    )
}

export default Scene;