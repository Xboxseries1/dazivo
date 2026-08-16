"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#090909]/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">

          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-2"
          >
            <span className="text-xl font-black tracking-[0.18em]">
              DAZIVO
            </span>

            <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)] transition-transform duration-300 group-hover:scale-125" />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            <a href="#servicii" className="rounded-xl px-4 py-2 text-sm font-medium text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white">
              Servicii
            </a>

            <a href="#portofoliu" className="rounded-xl px-4 py-2 text-sm font-medium text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white">
              Portofoliu
            </a>

            <a href="#proces" className="rounded-xl px-4 py-2 text-sm font-medium text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white">
              Proces
            </a>

            <a href="#contact" className="rounded-xl px-4 py-2 text-sm font-medium text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 md:flex md:items-center md:gap-2"
          >
            Cere o ofertă
            <span>→</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:bg-white/[0.08] md:hidden"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-[5px] block h-[2px] w-5 rounded-full bg-white transition duration-300 ${
                  menuOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[10px] block h-[2px] w-5 rounded-full bg-white transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[15px] block h-[2px] w-5 rounded-full bg-white transition duration-300 ${
                  menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "mt-2 max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-2xl border border-white/10 bg-[#101010]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">
            <a href="#servicii" onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold text-white/65 transition hover:bg-white/[0.05] hover:text-white">
              Servicii <span className="text-white/25">01</span>
            </a>

            <a href="#portofoliu" onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold text-white/65 transition hover:bg-white/[0.05] hover:text-white">
              Portofoliu <span className="text-white/25">02</span>
            </a>

            <a href="#proces" onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold text-white/65 transition hover:bg-white/[0.05] hover:text-white">
              Proces <span className="text-white/25">03</span>
            </a>

            <a href="#contact" onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold text-white/65 transition hover:bg-white/[0.05] hover:text-white">
              Contact <span className="text-white/25">04</span>
            </a>

            <div className="my-2 h-px bg-white/10" />

            <a href="#contact" onClick={closeMenu} className="flex items-center justify-center rounded-xl bg-orange-500 px-4 py-4 text-sm font-bold text-black transition hover:bg-orange-400">
              Cere o ofertă
              <span className="ml-2">→</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
