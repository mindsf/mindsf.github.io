import './styles/App.css';
import {Route,Link,Routes} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Board from './pages/board'
import Login from './pages/login';
import Register from './pages/register';
import Details from './pages/details';
import Chat from './pages/chat';
import Chatting from './pages/chatting';
function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<><Home/><Footer/></>}/>
          <Route path='/board' element={<><Board/><Footer/></>}/>
          <Route path='/login' element={<><Login/><Footer/></>}/>
          <Route path='/register' element={<><Register/><Footer/></>}/>
          <Route path='/details/:id' element={<><Details/><Footer/></>}/>
          <Route path='/chat' element={<><Chat/><Footer/></>}/>
          <Route path='chat/chatting/:id' element={<Chatting/>}/>
        </Routes>
    </div>
  );
}


export default App;
