import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './styles/Layout.scss';

const Layout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="layout">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        {/* Acá se renderiza la página de la ruta hija activa */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;