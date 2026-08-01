import Footer from "../footer/Footer";
import Nav from "../Navbar/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main
        className=" flex-1 w-[95vw] mx-auto mt-[140px] mb-[60px] xs:w-[96vw] sm:w-[95vw] md:w-[94vw] lg:w-[92vw] xl:w-[90vw] 2xl:w-[88vw] 3xl:w-[86vw]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
