import logo from './logo.svg';
import './App.css';
let name = "Rehan"
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, et obcaecati! Voluptatum autem excepturi quas voluptates sunt quibusdam fugit itaque doloremque architecto, dolore repudiandae rerum, quod beatae voluptas expedita id tempora dolorum natus aspernatur.
      </p>
      
    </div>
    </>
  );
}

export default App;
