import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Resume from './Pages/Resume';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' component={Home} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/resume' component={Resume} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
