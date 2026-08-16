"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "AUTOFIX",
    category: "Service Auto",
    description:
      "Website modern pentru un service auto, construit pentru prezentarea serviciilor și generarea programărilor.",
    image: "/images/autofix.jpg",
    url: "https://service-auto-demo-six.vercel.app/",
  },
  {
    title: "NOIR BARBER",
    category: "Barber Shop",
    description:
      "Website premium pentru un barber shop, cu servicii, galerie, recenzii și sistem de programare.",
    image: "/images/noir-barber.jpg",
    url: "https://noir-barber-peach.vercel.app/",
  },
  {
    title: "MORA",
    category: "Restaurant & Wine Bar",
    description:
      "Website elegant pentru un restaurant, construit pentru prezentarea meniului și rezervări.",
    image: "/images/mora.jpg",
    url: "https://mora-restaurant-demo.vercel.app/",
  },
];

const services = [
  {
    number: "01",
    title: "Site de prezentare",
    text: "Website modern pentru firme, servicii și afaceri locale.",
  },
  {
    number: "02",
    title: "Landing page",
    text: "Pagini construite pentru promovarea unui serviciu, produs sau campanii.",
  },
  {
    number: "03",
    title: "Magazine online",
    text: "Magazine online moderne, optimizate pentru mobil și conversii.",
  },
  {
    number: "04",
    title: "Redesign",
    text: "Transformăm un website vechi într-o experiență modernă și rapidă.",
  },
];

const processSteps = [
  [
    "01",
    "Discutăm",
    "Înțelegem afacerea, obiectivele și ce trebuie să facă website-ul pentru tine.",
  ],
  [
    "02",
    "Construim",
    "Realizăm designul și dezvoltăm website-ul adaptat brandului tău.",
  ],
  [
    "03",
    "Lansăm",
    "Configurăm domeniul, publicăm website-ul și verificăm totul înainte de lansare.",
  ],
  [
    "04",
    "Susținem",
    "Rămânem disponibili pentru modificări, actualizări și mentenanță.",
  ],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      {/* NAVBAR */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#090909]/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-sm sm:px-5">
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

            {/* DESKTOP NAV */}

            <nav className="hidden items-center gap-1 md:flex">
              <a
                href="#servicii"
                className="rounded-xl px-4 py-2 text-sm font-medium text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white"
              >
                Servicii
              </a>

              <a
                href="#portofoliu"
                className="rounded-xl px-4 py-2 text-sm font-medium text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white"
              >
                Portofoliu
              </a>

              <a
                href="#proces"
                className="rounded-xl px-4 py-2 text-sm font-medium text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white"
              >
                Proces
              </a>

              <a
                href="#contact"
                className="rounded-xl px-4 py-2 text-sm font-medium text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white"
              >
                Contact
              </a>
            </nav>

            {/* DESKTOP CTA */}

            <a
              href="#contact"
              className="hidden rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 md:flex md:items-center md:gap-2"
            >
              Cere o ofertă
              <span>→</span>
            </a>

{/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] md:hidden"
              aria-label="Deschide meniul"
            >
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </button>

          </div>

          {/* MOBILE MENU */}

          <div
            className={`relative z-[90] overflow-hidden md:hidden ${
menuOpen
  ? "mt-2 max-h-[500px] opacity-100"
  : "pointer-events-none max-h-0 opacity-0"
            }`}
          >
            <nav className="rounded-2xl border border-white/10 bg-[#101010]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <a
                href="#servicii"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold text-white/65 transition hover:bg-white/[0.05] hover:text-white"
              >
                Servicii
                <span className="text-white/25">01</span>
              </a>

              <a
                href="#portofoliu"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold text-white/65 transition hover:bg-white/[0.05] hover:text-white"
              >
                Portofoliu
                <span className="text-white/25">02</span>
              </a>

              <a
                href="#proces"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold text-white/65 transition hover:bg-white/[0.05] hover:text-white"
              >
                Proces
                <span className="text-white/25">03</span>
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold text-white/65 transition hover:bg-white/[0.05] hover:text-white"
              >
                Contact
                <span className="text-white/25">04</span>
              </a>

              <div className="my-2 h-px bg-white/10" />

              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center rounded-xl bg-orange-500 px-4 py-4 text-sm font-bold text-black transition hover:bg-orange-400"
              >
                Cere o ofertă
                <span className="ml-2">→</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="absolute left-[45%] top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[60px]" />

          <div className="absolute right-[-150px] top-[15%] h-[450px] w-[450px] rounded-full bg-orange-500/[0.06] blur-[50px]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pt-40">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                Web Design • Development
              </div>

              <h1 className="text-6xl font-black leading-[0.88] tracking-[-0.04em] sm:text-7xl lg:text-[7.5rem]">
                SITE-URI
                <br />
                CARE
                <br />
                <span className="text-orange-500">VÂND.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50 sm:text-xl">
                Construim website-uri moderne pentru afaceri care vor să arate
                profesionist, să fie găsite online și să transforme vizitatorii
                în clienți.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#portofoliu"
                  className="group rounded-full bg-orange-500 px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  Vezi portofoliul
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 font-bold transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                >
                  Hai să discutăm
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-8 rounded-[3rem] bg-orange-500/[0.07] blur-xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010]/90 p-7 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                        DAZIVO
                      </p>

                      <p className="mt-2 text-sm text-white/50">
                        Digital experiences
                      </p>
                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                    </div>
                  </div>

                  <div className="py-10">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                      Built for business
                    </p>

                    <h2 className="mt-5 text-4xl font-black leading-tight">
                      Website-ul tău
                      <br />
                      trebuie să
                      <br />
                      <span className="text-orange-500">
                        lucreze pentru tine.
                      </span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-lg font-black">01</p>
                      <p className="mt-2 text-xs leading-5 text-white/40">
                        Design premium
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-lg font-black">02</p>
                      <p className="mt-2 text-xs leading-5 text-white/40">
                        Mobile first
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-lg font-black">03</p>
                      <p className="mt-2 text-xs leading-5 text-white/40">
                        Lansare rapidă
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / INTRO */}

<section className="relative overflow-hidden border-y border-white/10 py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    {/* STATS */}

    <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4">

      <div className="border-b border-white/10 p-7 sm:border-r lg:border-b-0">
        <p className="text-4xl font-black tracking-tight">
          03<span className="text-orange-500">+</span>
        </p>

        <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
          Proiecte demonstrative
        </p>
      </div>

      <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
        <p className="text-4xl font-black tracking-tight">
          100<span className="text-orange-500">%</span>
        </p>

        <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
          Design personalizat
        </p>
      </div>

      <div className="border-b border-white/10 p-7 sm:border-r sm:border-b-0">
        <p className="text-4xl font-black tracking-tight">
          01<span className="text-orange-500">:01</span>
        </p>

        <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
          Comunicare directă
        </p>
      </div>

      <div className="p-7">
        <p className="text-4xl font-black tracking-tight">
          24<span className="text-orange-500">/7</span>
        </p>

        <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
          Website-uri online
        </p>
      </div>

    </div>

    {/* INTRO TEXT */}

    <div className="mt-28 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

      <div>

        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-10 bg-orange-500" />

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            De ce contează
          </p>
        </div>

        <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Prima impresie a unei afaceri
          <span className="text-white/35">
            {" "}începe online.
          </span>
        </h2>

      </div>

      <div>

        <p className="max-w-xl text-lg leading-8 text-white/45">
          Un website bun nu trebuie doar să arate bine. Trebuie să transmită
          încredere, să explice clar ce oferi și să facă următorul pas cât mai
          simplu pentru client.
        </p>

      </div>

    </div>

    {/* BENEFITS */}

    <div className="mt-20 grid gap-4 md:grid-cols-3">

      <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.04]">

        <div className="mb-10 flex items-center justify-between">
          <span className="text-sm font-bold text-orange-500">
            01
          </span>

          <span className="text-xl text-white/20 transition group-hover:text-orange-500">
            ↗
          </span>
        </div>

        <h3 className="text-xl font-bold">
          Arată profesionist
        </h3>

        <p className="mt-3 leading-7 text-white/40">
          Design modern, adaptat identității și domeniului afacerii tale.
        </p>

      </div>


      <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.04]">

        <div className="mb-10 flex items-center justify-between">
          <span className="text-sm font-bold text-orange-500">
            02
          </span>

          <span className="text-xl text-white/20 transition group-hover:text-orange-500">
            ↗
          </span>
        </div>

        <h3 className="text-xl font-bold">
          Se mișcă rapid
        </h3>

        <p className="mt-3 leading-7 text-white/40">
          Experiență fluidă și optimizată pentru desktop, tabletă și telefon.
        </p>

      </div>


      <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.04]">

        <div className="mb-10 flex items-center justify-between">
          <span className="text-sm font-bold text-orange-500">
            03
          </span>

          <span className="text-xl text-white/20 transition group-hover:text-orange-500">
            ↗
          </span>
        </div>

        <h3 className="text-xl font-bold">
          Convinge clienții
        </h3>

        <p className="mt-3 leading-7 text-white/40">
          Structură clară și CTA-uri gândite pentru ca vizitatorul să știe ce
          are de făcut.
        </p>

      </div>

    </div>

  </div>
</section>

      {/* SERVICII */}

      <section id="servicii" className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                  Ce facem
                </p>
              </div>

              <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
                Servicii.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-white/40">
              De la prima idee până la lansare, construim experiențe digitale
              potrivite pentru obiectivele afacerii tale.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] p-6 transition duration-500 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-[#151515] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-5 -top-8 text-[7rem] font-black leading-none text-white/[0.025] transition duration-500 group-hover:text-orange-500/[0.05]">
                  {service.number}
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-bold text-orange-500">
                      {service.number}
                    </span>

                    <span className="text-2xl text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
                      ↗
                    </span>
                  </div>

                  <div className="mt-8 max-w-2xl">
                    <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-base leading-7 text-white/40">
                      {service.text}
                    </p>
                  </div>

                  <div className="mt-7 h-px w-full bg-white/10 transition duration-500 group-hover:bg-orange-500/30" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-bold">Nu știi exact de ce ai nevoie?</p>

              <p className="mt-1 text-sm text-white/40">
                Spune-ne ce afacere ai și îți recomandăm soluția potrivită.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold transition duration-300 hover:border-orange-500/50 hover:bg-orange-500 hover:text-black"
            >
              Vorbim despre proiect
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
{/* DE CE DAZIVO */}

<section className="relative overflow-hidden py-28">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

      {/* LEFT */}

      <div>

        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-orange-500" />

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            De ce DAZIVO
          </p>
        </div>

        <h2 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl">
          Nu doar un site.
          <br />
          <span className="text-white/35">
            O imagine pentru afacerea ta.
          </span>
        </h2>

        <p className="mt-8 max-w-lg text-lg leading-8 text-white/40">
          Construim website-uri care îți reprezintă afacerea, explică rapid
          ceea ce oferi și îi fac clientului următorul pas cât mai simplu.
        </p>

        <a
          href="#contact"
          className="mt-9 inline-flex items-center rounded-full bg-orange-500 px-6 py-3.5 font-bold text-black hover:bg-orange-400"
        >
          Hai să discutăm
          <span className="ml-2">
            →
          </span>
        </a>

      </div>


      {/* RIGHT */}

      <div className="grid gap-4 sm:grid-cols-2">

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30">

          <div className="mb-12 flex items-center justify-between">

            <span className="text-sm font-black text-orange-500">
              01
            </span>

            <span className="text-xl text-white/20">
              ✦
            </span>

          </div>

          <h3 className="text-xl font-bold">
            Design personalizat
          </h3>

          <p className="mt-3 leading-7 text-white/40">
            Nu pornim de la un design generic. Construim experiența în jurul
            afacerii și imaginii brandului tău.
          </p>

        </div>


        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30">

          <div className="mb-12 flex items-center justify-between">

            <span className="text-sm font-black text-orange-500">
              02
            </span>

            <span className="text-xl text-white/20">
              ↗
            </span>

          </div>

          <h3 className="text-xl font-bold">
            Mobile first
          </h3>

          <p className="mt-3 leading-7 text-white/40">
            Website-ul este gândit să arate bine și să fie ușor de folosit
            indiferent de dispozitiv.
          </p>

        </div>


        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30">

          <div className="mb-12 flex items-center justify-between">

            <span className="text-sm font-black text-orange-500">
              03
            </span>

            <span className="text-xl text-white/20">
              ⚡
            </span>

          </div>

          <h3 className="text-xl font-bold">
            Rapid și modern
          </h3>

          <p className="mt-3 leading-7 text-white/40">
            Punem accent pe performanță, navigare simplă și o experiență
            plăcută pentru vizitator.
          </p>

        </div>


        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30">

          <div className="mb-12 flex items-center justify-between">

            <span className="text-sm font-black text-orange-500">
              04
            </span>

            <span className="text-xl text-white/20">
              ●
            </span>

          </div>

          <h3 className="text-xl font-bold">
            Comunicare directă
          </h3>

          <p className="mt-3 leading-7 text-white/40">
            Vorbești direct cu noi, fără procese complicate și fără să fii
            plimbat între departamente.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* PORTOFOLIU */}

<section
  id="portofoliu"
  className="border-y border-white/10 bg-[#0f0f0f] py-28"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    {/* HEADER */}

    <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

      <div>

        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-orange-500" />

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            Proiecte demonstrative
          </p>
        </div>

        <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
          Portofoliu.
        </h2>

      </div>

      <p className="max-w-md text-lg leading-8 text-white/40">
        Exemple de website-uri create pentru diferite tipuri de afaceri.
        Fiecare proiect este construit cu accent pe design, claritate și
        experiența utilizatorului.
      </p>

    </div>


    {/* PROJECTS */}

    <div className="grid gap-6 md:grid-cols-2">

      {projects.map((project, index) => (

        <a
          key={project.title}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] transition duration-500 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-black/20"
        >

          {/* IMAGE */}

          <div className="relative aspect-[16/10] overflow-hidden bg-black">

            <Image
  src={project.image}
  alt={`Preview ${project.title}`}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
/>

            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-70 transition duration-500 group-hover:opacity-90" />


            {/* CATEGORY */}

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {project.category}
            </div>


            {/* NUMBER */}

            <div className="absolute right-5 top-5 text-sm font-black text-white/40">
              0{index + 1}
            </div>


            {/* OPEN BUTTON */}

            <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/70 text-lg text-white backdrop-blur-sm transition duration-300 group-hover:rotate-12 group-hover:bg-orange-500 group-hover:text-black">
              ↗
            </div>

          </div>


          {/* INFORMATION */}

          <div className="p-7 sm:p-8">

            <div className="flex items-start justify-between gap-6">

              <div>

                <h3 className="text-3xl font-black tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-white/45">
                  {project.description}
                </p>

              </div>

            </div>


            {/* BOTTOM */}

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

              <span className="text-sm font-bold text-orange-500">
                Vezi proiectul
              </span>

              <span className="text-sm text-white/25 transition duration-300 group-hover:translate-x-1 group-hover:text-white/60">
                Deschide ↗
              </span>

            </div>

          </div>

        </a>

      ))}

    </div>


    {/* PORTFOLIO CTA */}

    <div className="mt-8 rounded-[2rem] border border-orange-500/20 bg-orange-500/[0.04] p-7 sm:p-8">

      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

        <div>

          <p className="text-lg font-bold">
            Ai nevoie de un website pentru afacerea ta?
          </p>

          <p className="mt-2 text-sm leading-6 text-white/40">
            Putem construi ceva similar, dar adaptat complet brandului tău.
          </p>

        </div>

        <a
          href="#contact"
          className="group inline-flex shrink-0 items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400"
        >
          Cere o ofertă

          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </a>

      </div>

    </div>

  </div>
</section>
      {/* PROCES */}

      <section id="proces" className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                  Cum lucrăm
                </p>
              </div>

              <h2 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
                Simplu.
                <br />
                Clar.
                <br />
                Eficient.
              </h2>

              <p className="mt-8 max-w-md text-lg leading-8 text-white/40">
                Fără procese complicate. Discutăm, construim, lansăm și
                rămânem disponibili atunci când ai nevoie.
              </p>
            </div>

            <div className="space-y-2">
              {processSteps.map(([number, title, text]) => (
                <div
                  key={number}
                  className="group rounded-2xl border border-transparent p-6 transition duration-300 hover:border-white/10 hover:bg-white/[0.02]"
                >
                  <div className="flex gap-6">
                    <span className="mt-1 text-sm font-bold text-orange-500">
                      {number}
                    </span>

                    <div>
                      <h3 className="text-2xl font-bold transition group-hover:text-orange-500">
                        {title}
                      </h3>

                      <p className="mt-3 leading-7 text-white/40">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* CTA */}

<section
  id="contact"
  className="relative overflow-hidden border-t border-orange-400/40 bg-orange-500 text-black"
>

  {/* BACKGROUND DETAIL */}

  <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-[80px] border-black/5" />

  <div className="pointer-events-none absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full border-[80px] border-black/5" />


  <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">

    <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-end">

      {/* LEFT */}

      <div className="max-w-4xl">

        <div className="mb-7 flex items-center gap-3">

          <span className="h-px w-10 bg-black/40" />

          <p className="text-xs font-black uppercase tracking-[0.3em] text-black/60">
            Contact
          </p>

        </div>

        <h2 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.5rem]">
          Ai nevoie de
          <br />
          un website?
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
          Spune-ne ce afacere ai, ce îți dorești și unde vrei să ajungi.
          Discutăm direct și îți oferim o direcție clară pentru proiect.
        </p>


        {/* ACTIONS */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <a
            href="https://wa.me/40720689867"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-full bg-black px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#171717]"
          >
            Vorbește cu noi pe WhatsApp

            <span className="ml-3 text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>


          <a
            href="mailto:dazivoweb@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-black/20 px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-black/5"
          >
            Trimite un email
          </a>

        </div>

      </div>


      {/* RIGHT */}

      <div className="w-full lg:w-[280px]">

        <div className="rounded-[1.75rem] border border-black/15 bg-black/[0.04] p-7">

          <p className="text-xs font-black uppercase tracking-[0.2em] text-black/50">
            Răspundem direct
          </p>

          <p className="mt-5 text-xl font-black leading-tight">
            Fără formulare complicate.
            <br />
            Fără drumuri inutile.
          </p>

          <div className="mt-7 h-px bg-black/10" />

          <p className="mt-5 text-sm leading-6 text-black/55">
            Ne spui ce ai nevoie, discutăm proiectul și stabilim împreună
            următorii pași.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-sm text-white/35 md:flex-row lg:px-10">
          <p>© 2026 DAZIVO. Toate drepturile rezervate.</p>

          <p>Web Design & Development</p>
        </div>
      </footer>
    </main>
  );
}