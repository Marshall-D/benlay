import "../styles/Mobile.css";
import { Link } from "react-router-dom";

function Mobile() {
  const reload = () => {
    window.location.reload(false);
  };
  return (
    <div className="container-2">
      <div className="content2">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu" onClick={reload}>
              <li className="menu-li">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-li">
                <Link to="/about"> About</Link>
              </li>
              <li className="menu-li">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Mobile;
