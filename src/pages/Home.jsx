import About from "../components/sections/About";
import CTA from "../components/sections/CTA";
import FAQ from "../components/sections/FAQ";
import Hero from "../components/sections/Hero";
import Locations from "../components/sections/Locations";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import SEO from "../components/common/SEO";

export default function Home () {
    const homeSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://digiteeworld.com/#organization",
                "name": "Digitee World",
                "url": "https://digiteeworld.com/",
                "logo": {
                    "@type": "ImageObject",
                    "@id": "https://digiteeworld.com/#logo",
                    "url": "https://digiteeworld.com/logo.jpeg",
                    "caption": "Digitee World"
                },
                "image": {
                    "@id": "https://digiteeworld.com/#logo"
                },
                "description": "Digitee World is an AI-first digital marketing agency providing website development, SEO, Google Business Profile, social media, advertising and digital growth solutions for businesses.",
                "telephone": [
                    "+91 72979 88805",
                    "+91 91164 09905"
                ],
                "email": [
                    "info@digiteeworld.com",
                    "digiteeworld@gmail.com"
                ],
                "sameAs": [
                    "https://www.facebook.com/share/1EWKK4uYUr/",
                    "https://www.instagram.com/digitee_world",
                    "https://youtube.com/@digiteeworld",
                    "https://in.linkedin.com/in/digitee-world-94523b418",
                    "https://x.com/Digitee_World"
                ],
                "founder": {
                    "@id": "https://digiteeworld.com/#founder"
                }
            },
            {
                "@type": "Person",
                "@id": "https://digiteeworld.com/#founder",
                "name": "Chanchal Singh",
                "jobTitle": "Founder & CEO",
                "image": "https://digiteeworld.com/founder.jpeg",
                "worksFor": {
                    "@id": "https://digiteeworld.com/#organization"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://digiteeworld.com/#website",
                "url": "https://digiteeworld.com/",
                "name": "Digitee World",
                "description": "Digitee World is an AI-first digital marketing agency providing website development, SEO, Google Business Profile, social media, advertising and digital growth solutions for businesses.",
                "publisher": {
                    "@id": "https://digiteeworld.com/#organization"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://digiteeworld.com/#webpage",
                "url": "https://digiteeworld.com/",
                "name": "Digitee World - AI First Digital Marketing Agency in Rajasthan & Indore | Best Digital Marketing Agency in Rajasthan",
                "isPartOf": {
                    "@id": "https://digiteeworld.com/#website"
                },
                "about": {
                    "@id": "https://digiteeworld.com/#organization"
                },
                "description": "Digitee World is an AI-first digital marketing agency in Rajasthan & Indore. We drive growth with SEO, GMB, web development, social media, WhatsApp, Google & Meta Ads."
            },
            {
                "@type": "FAQPage",
                "@id": "https://digiteeworld.com/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What services does Digitee World offer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We offer GMB optimization, website development, social media, WhatsApp marketing, Google & Meta ads, YouTube marketing, digital business cards, and SEO — everything you need for complete digital growth."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to see results?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We take up India-level challenges with confidence — GMB Ranking in just 1.5 months and SEO Optimization results within 3 months. Google & Meta Ads deliver results in days, while social media traction begins within 30-60 days. No fake promises, only realistic timelines backed by proven strategies."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you work with startups & small businesses?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. Most of our clients are startups and small-to-medium businesses in Kota, Indore, and nearby cities. We build custom packages that fit your budget and stage."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are your pricing plans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Pricing depends on scope and service mix. We offer flexible packages — from affordable startup plans to comprehensive enterprise solutions. Book a free call to get a custom quote."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I hire you for just one service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. You can start with a single service like SEO or Google Ads, or bundle multiple together. Start with what you need most and scale from there."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Digitee World - AI-First Digital Marketing Agency in Rajasthan & Indore" 
                description="Digitee World is an AI-first digital marketing agency in Rajasthan & Indore. We drive business growth with SEO, GMB optimization, website development, and paid ads."
                path="/"
                keywords="digital marketing agency Rajasthan, digital marketing agency Indore, AI digital marketing agency, digital marketing company Rajasthan, digital marketing company Indore, SEO agency Rajasthan, SEO services Rajasthan, SEO agency Indore, website development Rajasthan, website development Indore, social media marketing Rajasthan, social media marketing Indore, Google Business Profile services, GMB services, Google Ads management, Meta Ads management, YouTube marketing, WhatsApp marketing, landing page development, e-commerce website development"
                schemaData={homeSchema}
            />
            <Hero />
            <About />
            <Services />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <Locations />
            <CTA />
        </>
    )
}