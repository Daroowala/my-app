import Navbar from './components/Navbar';
import Textform from './components/Textform';

import './App.css';
function App() {
  return (
    <>
<Navbar title='TextUtils' aboutus='About Us'/>
<div className="container">
<Textform heading='Enter the text to analyze below'/>
</div>
    </>
  );
}

export default App;
