import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';

function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="content"> 
        <Home />
        <Register />
      </div>
    </div>
  );
}

export default App;
