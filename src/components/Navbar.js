import './Navbar.css';

function Navbar() {
  return (
   <header className="navbar">
       <nav className="menu">
       <ul>
           <li><a href="#">Inicio</a></li>
           <li><a href="#">Nosotros</a></li>
           <li><a href="#">Tienda</a></li>

       </ul>
       </nav>
   </header> 
  );
}

export default Navbar;