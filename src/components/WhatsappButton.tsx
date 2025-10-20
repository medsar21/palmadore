import { useMemo } from "react";

const PHONE = "+212660436040"; // WhatsApp phone number (no spaces)

const WhatsappButton = () => {
  const href = useMemo(() => {
    const base = "https://wa.me/";
    // Optional prefilled message can be added here if desired
    return `${base}${PHONE}`;
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="group relative w-14 h-14 rounded-full bg-[hsl(25_55%_50%)] shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center transition-transform duration-200 hover:scale-105">
        {/* WhatsApp icon as inline SVG to avoid extra deps */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7 text-white"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.51.02.26 5.27.27 11.8c0 2.08.54 4.09 1.58 5.88L0 24l6.49-1.69a11.77 11.77 0 0 0 5.55 1.41h.01c6.53 0 11.78-5.25 11.78-11.78 0-3.15-1.23-6.1-3.31-8.18ZM12.05 21.5h-.01a9.7 9.7 0 0 1-4.95-1.35l-.35-.2-3.85 1 1.03-3.75-.23-.38a9.64 9.64 0 0 1-1.46-5.12C2.23 6.45 6.57 2.1 12.03 2.1c2.59 0 5.03 1 6.86 2.83a9.65 9.65 0 0 1 2.84 6.86c0 5.46-4.45 9.71-9.68 9.71Zm5.6-7.26c-.31-.16-1.82-.9-2.1-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.55-.08-.16-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.08-.79.39-.27.31-1.03 1-1.03 2.43 0 1.43 1.06 2.81 1.21 3 .15.2 2.07 3.17 5.02 4.44.7.3 1.25.47 1.67.6.7.22 1.34.19 1.85.12.57-.09 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.07-.14-.27-.22-.58-.38Z" />
        </svg>

        {/* soft ring / highlight */}
        <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-200" />
      </div>
    </a>
  );
};

export default WhatsappButton;



