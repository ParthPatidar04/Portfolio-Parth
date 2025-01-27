
import './App.css'
import Navigation from './components/Navigation'
import ThemeBtn from './components/ThemeBtn'
// import Home from './components/Home'


function App() {

  

  return (
    <>
      <nav className='flex justify-between md:justify-around items-center shadow-[0_8px_6px_-1px_rgba(0,0,0,0.5)] h-14'>
        <Navigation />
        <ThemeBtn />
      </nav>

      {/* <Home /> */}
    </>
  )
}

export default App