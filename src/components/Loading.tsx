import { useEffect, useState } from "react";
import logoImage from "@/assets/logo-palma.svg";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40); // 40ms * 50 = 2000ms (2 secondes)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-chocolate via-chocolate/90 to-copper">
      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <img 
          src={logoImage} 
          alt="Palmador" 
          className="h-16 sm:h-20 drop-shadow-lg animate-fade-in"
        />
      </div>

      {/* Progress Bar */}
      <div className="w-64 sm:w-80">
        <div className="bg-white/20 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-white to-white/80 h-full rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
