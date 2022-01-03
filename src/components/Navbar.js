import "../styles/new.css";

function Navbar() {
  // #13 Create Logout function
  const logout = async () => {
    window.location = "/";
  };
  // #13 Create About function
  const about = async () => {
    window.location = "/about";
  };
  // #13 Create Contact function
  const contact = async () => {
    window.location = "/contact";
  };
  // #13 Create Contact function
  const dashboard = async () => {
    window.location = "/dashboard";
  };
  // #13 Create Contact function
  const profile = async () => {
    window.location = "/profile";
  };

  return (
    <>
      <div className="nav1">
        <a href="/dashboard" className="navword" onClick={dashboard}>
          Dashboard
        </a>
        <a href="/profile" className="navword" onClick={profile}>
          Profile
        </a>
        <a href="/about" className="navword" onClick={about}>
          About
        </a>
        <a href="/contact" className="navword" onClick={contact}>
          Contact
        </a>
        <a href="logout" className="navword" onClick={logout}>
          Logout
        </a>
      </div>
    </>
  );
}

export default Navbar;
