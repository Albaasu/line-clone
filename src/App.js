import './App.css';
import SingnIn from './components/SingnIn.js';
import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import Line from './components/Line.js';

function App() {
  const [user] = useAuthState(auth);
  return <div>{user ? <Line /> : <SingnIn />}</div>;
}

export default App;
