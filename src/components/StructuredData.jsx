
import { Helmet } from 'react-helmet-async';

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "VULCANO - Dinner to Club",
        "image": [
            "https://www.vulcanopontemilvio.com/logo_vulcano.svg"
        ],
        "description": "Vulcano - Cucina con pizza, Cocktail Bar, Terrazza & Eventi a Ponte Milvio, Roma.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Flaminia, 479",
            "addressLocality": "Roma",
            "postalCode": "00191",
            "addressCountry": "IT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.9395,
            "longitude": 12.4673
        },
        "url": "https://www.vulcanopontemilvio.com",
        "telephone": "+393514072720",
        "servesCuisine": "Mediterranean",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "18:00",
                "closes": "02:00"
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}
