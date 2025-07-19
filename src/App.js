//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    <div className="container my-3">
      <TextForm heading="Enter your text to analyze" />
    </div>
    </>
  );
}

export default App;
