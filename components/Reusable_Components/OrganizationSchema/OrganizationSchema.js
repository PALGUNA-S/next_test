import Head from 'next/head';

const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "LeRemitt",
        "url": "https://www.leremitt.com/",
        "logo": "https://www.leremitt.com/static/media/LeRemitt_logo-re_svg.f95a2bc9ddbdd8aeba67226184311fc2.svg",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+918050087593",
            "contactType": "technical support",
            "contactOption": "TollFree",
            "areaServed": "IN",
            "availableLanguage": ["en", "Hindi"]
        },
        "sameAs": [
            "https://www.linkedin.com/company/leremit/",
            "https://www.facebook.com/LeRemitt/",
            "https://x.com/leremitt?s=11",
            "https://www.instagram.com/leremitt_com/"
        ]
    };

    return (
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Head>
    );
};

export default OrganizationSchema;
