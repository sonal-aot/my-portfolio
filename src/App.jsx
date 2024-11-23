import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className='mainContainer'>
      <Header />
      <Profile />
      <Projects />
      <Skills/>
    </div>
  )
}

export default App
