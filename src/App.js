import './App.css';
import Sidebar from './components/Sidebar';
import ChatComponent from './components/ChatComponent';

function App() {
  return (
    <div className="app">
      <div className="appBody">
        <Sidebar/>
        <ChatComponent/>
      </div>
    </div>
  );
}

export default App;
