export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Canvas&Pixels',
    url: 'https://canvasandpixels.com',
    logo: 'https://canvasandpixels.com/logo.png',
    description:
      'A software studio based in Ontario, Canada, helping businesses worldwide build innovative products that drive impact.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-816-350-9379',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/canvas-and-pixels/',
      'https://www.instagram.com/canvasnpixels/',
      'https://x.com/canvasandpixels',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Canvas&Pixels',
    image: 'https://canvasandpixels.com/logo.png',
    '@id': 'https://canvasandpixels.com',
    url: 'https://canvasandpixels.com',
    telephone: '+234-816-350-9379',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.6532',
      longitude: '-79.3832',
    },
    priceRange: '$$$',
    currenciesAccepted: 'USD, CAD, EUR, GBP',
    paymentAccepted: 'Credit Card, Bank Transfer, PayPal',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
