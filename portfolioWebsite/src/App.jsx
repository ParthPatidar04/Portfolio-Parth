
import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
// import Skills from './components/Skills'
// import Home from './components/Home'
// import Contact from './components/Contact'
// import About from './components/About'
import Project from './components/Project'


function App() {

  

  return (
    <div className='flex flex-col justify-between  min-h-screen'>
      <nav className='flex justify-between md:justify-around items-center shadow-[0_8px_6px_-1px_rgba(0,0,0,0.5)] h-14'>
        <Navigation />
      </nav>

      {/* <Home /> */}
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
      <Project />
      <div className='border border-black shadow-[0_-8px_6px_-1px_rgba(0,0,0,0.5)]'>
      <Footer />
      </div>
      
    </div>
  )
}

export default App