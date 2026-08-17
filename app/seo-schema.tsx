export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

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
      "Creare Site-uri",
      "Site-uri de prezentare",
      "Landing Pages",
      "Magazine Online",
      "Redesign Website",
    ],

    knowsAbout: [
      "Web Design",
      "Web Development",
      "SEO",
      "Website Development",
      "Landing Pages",
      "E-commerce",
    ],

    sameAs: [],
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