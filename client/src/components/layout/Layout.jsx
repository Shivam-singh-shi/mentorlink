import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "../common/ScrollProgress";
import BackToTop from "../common/BackToTop";

const Layout = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
