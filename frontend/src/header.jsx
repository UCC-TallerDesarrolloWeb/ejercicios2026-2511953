import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="header">
      <span className="header__logo">Gimnasio</span>

      <nav className="header__nav">
        <NavLink to="/" end>Home</NavLink>
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        <NavLink to="/actividades">Actividades</NavLink>
      </nav>

      {isLoggedIn && (
        <button className="header__logout" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;