import { About } from './components/About'
import { Features } from './components/Features'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className="bg-black min-h-screen w-full">
      <Hero />
      <About />
      <Features />
    </div>
  )
}

export default App
