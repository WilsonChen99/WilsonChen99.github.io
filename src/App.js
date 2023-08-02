import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Resume from './Pages/Resume';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route exact path='/aboutMe' Component={AboutMe} />
        <Route exact path='/resume' Component={Resume} />
      </Routes>
    </>
  );
}

export default App;
