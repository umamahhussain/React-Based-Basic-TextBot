import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  return (
    <div className="App"> 
      <Navbar title='TextBot' about='About Us'/>
      <div className="container">
      <TextBox title='Text Box'/>
      </div>
    </div>
  );
}

export default App;
