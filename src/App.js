import { useEffect,useState } from 'react';
import Pusher from 'pusher-js';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatComponent from './components/ChatComponent';
import Axios from './Axios'   //from Axios.js

function App() {
  
  const[messages,setMessages] = useState([]);

  useEffect(()=>{
    Axios.get('/messages/sync')
    .then(response =>{
      setMessages(response.data)
    })
  },[])

  useEffect(() => {
    //once
    const pusher = new Pusher('38b182dc4068dfda3e2b', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  console.log(messages)


  return (
    <div className="app">
      <div className="appBody">
        <Sidebar/>
        <ChatComponent messages={messages}/>
      </div>
    </div>
  );
}

export default App;
