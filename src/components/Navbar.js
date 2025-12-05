import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>EliteAbroad</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/germany">Germany</Link>
        <Link to="/uk">UK</Link>
        <Link to="/canada">Canada</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
