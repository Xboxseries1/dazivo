"use client";

const projects = [
  {
    title: "AUTOFIX",
    category: "Service Auto",
    description:
      "Website modern pentru un service auto, construit pentru prezentarea serviciilor și generarea programărilor.",
    url: "https://service-auto-demo-six.vercel.app/",
  },
  {
    title: "NOIR BARBER",
    category: "Barber Shop",
    description:
      "Website premium pentru un barber shop, cu servicii, galerie, recenzii și sistem de programare.",
    url: "https://noir-barber-peach.vercel.app/",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* NAVBAR */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#090909]/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <a
            href="#home"
            className="text-xl font-black tracking-[0.2em]"
          >
            DAZIVO<span className="text-orange-500">.</span>
          </a>

          <nav className="hidden gap-8 text-sm text-white/60 md:flex">

            <a
              href="#servicii"
              className="transition hover:text-white"
            >
              Servicii
            </a>

            <a
              href="#portofoliu"
              className="transition hover:text-white"
            >
              Portofoliu
            </a>

            <a
              href="#proces"
              className="transition hover:text-white"
            >
              Proces
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>

          </nav>

          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-orange-400"
          >
            Cere o ofertă
          </a>

        </div>

      </header>


      {/* HERO */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

        </div>


        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">

          <div className="max-w-5xl">

            <p className="mb-7 text-sm font-bold uppercase tracking-[0.35em] text-orange-500">
              Web Design • Development • Digital
            </p>

            <h1 className="text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-[9rem]">

              SITE-URI

              <br />

              CARE

              <br />

              <span className="text-orange-500">
                VÂND.
              </span>

            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50">
              Construim website-uri moderne pentru afaceri care vor să arate
              profesionist, să fie găsite online și să transforme vizitatorii
              în clienți.
            </p>


            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#portofoliu"
                className="rounded-full bg-orange-500 px-7 py-4 font-bold text-black transition hover:bg-orange-400"
              >
                Vezi portofoliul →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-4 font-bold transition hover:bg-white/10"
              >
                Hai să discutăm
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="border-y border-white/10 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">

              Prima impresie a unei afaceri
              <span className="text-orange-500">
                {" "}începe online.
              </span>

            </h2>

            <p className="max-w-xl text-lg leading-8 text-white/45">

              Nu facem site-uri doar pentru a exista. Construim experiențe
              digitale clare, rapide și adaptate afacerii tale.

            </p>

          </div>

        </div>

      </section>


      {/* SERVICII */}

      <section
        id="servicii"
        className="py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-14">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Ce facem
            </p>

            <h2 className="text-5xl font-black">
              Servicii.
            </h2>

          </div>


          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">

            {services.map((service) => (

              <div
                key={service.number}
                className="bg-[#111111] p-8 transition hover:bg-[#171717] sm:p-10"
              >

                <p className="text-sm font-bold text-orange-500">
                  {service.number}
                </p>

                <h3 className="mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-white/45">
                  {service.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PORTOFOLIU */}

      <section
        id="portofoliu"
        className="border-y border-white/10 bg-[#0f0f0f] py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-14">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Proiecte demonstrative
            </p>

            <h2 className="text-5xl font-black">
              Portofoliu.
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {projects.map((project) => (

              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] transition hover:-translate-y-1 hover:border-orange-500/40"
              >

                <div className="flex aspect-[16/10] items-end bg-gradient-to-br from-orange-500/20 via-[#181818] to-black p-8">

                  <div>

                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-4xl font-black">
                      {project.title}
                    </h3>

                  </div>

                </div>


                <div className="p-8">

                  <p className="leading-7 text-white/45">
                    {project.description}
                  </p>

                  <p className="mt-6 font-bold text-orange-500">
                    Vezi proiectul →
                  </p>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* PROCES */}

      <section
        id="proces"
        className="py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Cum lucrăm
              </p>

              <h2 className="text-5xl font-black leading-tight">
                Simplu.
                <br />
                Clar.
                <br />
                Eficient.
              </h2>

            </div>


            <div className="space-y-8">

              {[
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
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="border-b border-white/10 pb-8"
                >

                  <div className="flex gap-6">

                    <span className="text-sm font-bold text-orange-500">
                      {number}
                    </span>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {title}
                      </h3>

                      <p className="mt-3 leading-7 text-white/45">
                        {text}
                      </p>

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
        className="border-t border-white/10 bg-orange-500 py-28 text-black"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.3em]">
              Ai o idee?
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight sm:text-7xl">
              Hai să construim
              <br />
              ceva bun.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
              Spune-ne ce afacere ai și ce ai nevoie. Îți oferim o direcție
              clară și o estimare pentru proiect.
            </p>


            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://wa.me/40720689867"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-7 py-4 font-bold text-white transition hover:bg-[#222]"
              >
                WhatsApp →
              </a>

              <a
                href="mailto:dazivoweb@gmail.com"
                className="rounded-full border border-black/20 px-7 py-4 font-bold transition hover:bg-black/5"
              >
                contact@novaweb.ro
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-sm text-white/35 md:flex-row lg:px-10">

          <p>
            © 2026 NOVA WEB. Toate drepturile rezervate.
          </p>

          <p>
            Web Design & Development
          </p>

        </div>

      </footer>

    </main>
  );
}