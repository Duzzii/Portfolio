import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className = {"menu " + (menuOpen && "active")}>
        <ul>
            <li>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#portfolio">Projects</a>
            </li>
            <li>
                <a href="#works">Qualifications</a>
            </li>
            {/* <li>
                <a href="#testimonals">Testimonals</a>
            </li> */}
            <li>
                <a href="#contact">Contacts</a>
            </li>
        </ul>
    </div>
  );
}
