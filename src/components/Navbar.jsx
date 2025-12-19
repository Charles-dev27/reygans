import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Reygan's Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-sky-400">Home</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="text-3xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-gray-800 px-4 py-4 space-y-2">
          <a href="#hero" className="hover:text-sky-400">Home</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
