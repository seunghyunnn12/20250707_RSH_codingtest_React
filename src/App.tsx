// App.tsx
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index.tsx'
import Section1 from './pages/Section1.tsx'
import Test1 from './pages/Test1.tsx'
import Section3 from './pages/Section3.tsx'
import Test5 from './pages/Test5.tsx'
import Header from './components/Header.tsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/section1" element={<Section1 />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/section3" element={<Section3 />} />
        <Route path="/test5" element={<Test5 />} />
      </Routes>
    </>
  )
}

export default App
