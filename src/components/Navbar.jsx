import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Tau Hai La Chinh</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/category">Categories</Link>
        <Link to="/about" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>About author</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;