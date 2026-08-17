export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    "@id": "https://dazivoweb.com/#business",

    name: "DAZIVO",
    url: "https://dazivoweb.com/",

    description:
      "DAZIVO creează website-uri moderne, rapide și personalizate pentru afaceri din România.",

    email: "dazivoweb@gmail.com",
    telephone: "+40720689867",

    areaServed: {
      "@type": "Country",
      name: "Romania",
    },

    serviceType: [
      "Web Design",
      "Web Development",
      "Creare Site-uri",
      "Site-uri de prezentare",
      "Landing Pages",
      "Magazine Online",
      "Redesign Website",
      "SEO",
    ],

    knowsAbout: [
      "Web Design",
      "Web Development",
      "SEO",
      "Website Development",
      "Landing Pages",
      "E-commerce",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}