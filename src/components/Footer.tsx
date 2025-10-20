import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chocolate text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Content intentionally removed as requested */}

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Palmador Chocolatier. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
