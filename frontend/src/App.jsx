import { NavBar } from "./components"
import { About,Skills,Work,Testimonials,Footer,Header, Contact } from "./containers"
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path='about' element={<About/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='work' element={<Work/>}/>
        <Route path='testimonials' element={<Testimonials/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <div>
        <NavBar/>
        <Header/>
        <About/>
        <Skills/>
        <Work/>
        <Testimonials/>
        <Footer/>
        
      </div>
    </>
  )
}

export default App
