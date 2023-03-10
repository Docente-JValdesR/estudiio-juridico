import useScrollToTop from "../hooks/useScrollToTop";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function Layout() {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <div className="container bg-light shadow-lg mb-5 bg-body-tertiary rounded" style={{padding:0}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
