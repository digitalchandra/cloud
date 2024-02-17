
import './App.css';
import { Link, Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
        <h1> File Upload With Cloudneary  </h1>
        <Link to="/"> HOME</Link> | <Link to="upload"> Upload </Link> | <Link to="secureupload"> Secure Upload</Link>
   <Outlet/>
    </div>
  );
}

export default App;
