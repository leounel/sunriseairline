import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Landing from './pages/Landing'
import Scene from '@/components/Scene/Scene'

gsap.registerPlugin(useGSAP)

function App() { 
  return (
    <>
      <Scene/>
      <Landing/>
      {/* </div>
      <div className='intro-container'>
        <button onClick= {onAnimationGo} type='button'>ANIMACION</button>
          <h1 className='omegalul'>Sunrise Airlines</h1>
      </div> */}
    </>
  )
}
export default App
