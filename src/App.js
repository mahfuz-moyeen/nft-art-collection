import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Menubar from './components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/collectibles" element={<Dashboard />} />
        <Route path="/art" element={<Dashboard />} />
        <Route path="/Sports" element={<Dashboard />} />
        <Route path="/gaming" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
