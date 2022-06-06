import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Menubar from './components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
