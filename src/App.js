import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Resume from './Pages/Resume';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects'/>
      </Routes>
    </>
  );
}

export default App;
