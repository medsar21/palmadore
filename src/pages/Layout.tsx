import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsappButton from "@/components/WhatsappButton";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Contact />
      <WhatsappButton />
    </div>
  );
};

export default Layout;


