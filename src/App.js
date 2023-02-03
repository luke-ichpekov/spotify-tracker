import './App.css';
import {useState} from 'react';
import Auth from './components/Auth';
import MainDashboard from './components/MainDashboard';
function App() {

const [token, setToken] = useState("")



console.log(token);
  return (
    <div className="App">
      <header className="App-header">
        {!token ? <Auth token={token} setToken={setToken}/> :
        <MainDashboard token={token} setToken={setToken}/> }
    </header>

    </div>
  );
}

export default App;
