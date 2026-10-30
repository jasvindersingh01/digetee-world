// ============ WHATSAPP CONFIG ============
export const WHATSAPP_NUMBER = "917297988805";

// ============ NFC PRODUCTS ============
export const nfcProducts = [
  {
    id: "nfc-business-card",
    category: "nfc",
    name: "NFC Business Card",
    tagline: "Smart Digital Networking",
    seoTitle: "Buy NFC Business Card Online | Smart Digital Visiting Card",
    seoDesc: "Order custom branded NFC business cards. Share contact info, social links, and your website in one tap on any smartphone with zero apps required.",
    keywords: "buy NFC business card, smart visiting card India, digital NFC card, contactless business card, metal NFC card, customized smart card",
    shortDesc:
      "Modern NFC-enabled business cards that share your contact details, social profiles, and website with a single tap on any smartphone.",
    fullDesc:
      "Revolutionize your networking with NFC Business Cards. Just tap on any smartphone and instantly share your complete digital identity — contacts, social media, portfolio, website, and more. Eco-friendly, reusable, and always updated.",
    price: "₹1,499",
    originalPrice: "₹2,499",
    discount: "40% OFF",
    image: "/products/nfc.jpeg",
    features: [
      "One-tap contact sharing",
      "Works on all NFC-enabled phones",
      "Update info anytime online",
      "Custom design with your branding",
      "No app required for receiver",
      "Includes QR code backup",
      "Durable PVC/Metal options",
      "Lifetime NFC chip",
    ],
    idealFor: ["Business Owners", "Freelancers", "Sales Professionals", "Networkers"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "nfc-smart-ring",
    category: "nfc",
    name: "NFC Smart Ring XZ",
    tagline: "Wearable Smart Networking",
    seoTitle: "NFC Smart Ring XZ | Wearable Digital Networking Ring",
    seoDesc: "Experience next-level connectivity with the NFC Smart Ring XZ. Sleek wearable titanium smart ring that shares your profile with a simple tap.",
    keywords: "NFC smart ring, smart ring India, wearable NFC technology, digital identity ring, contactless sharing ring, titanium smart ring",
    shortDesc:
      "Premium NFC Smart Ring that lets you share contacts, links, and payment info with a simple hand gesture. Style meets technology.",
    fullDesc:
      "The NFC Smart Ring XZ is a stylish wearable that combines fashion with cutting-edge NFC technology. Share your digital info, unlock devices, and connect with people — all with a simple tap of your finger. Waterproof and battery-free.",
    price: "₹2,999",
    originalPrice: "₹4,999",
    discount: "40% OFF",
    image: "/products/ring.jpeg",
    features: [
      "Battery-free NFC technology",
      "100% Waterproof (IP68)",
      "Premium metal build",
      "Customizable data sharing",
      "Compatible with iOS & Android",
      "Multiple size options",
      "Elegant design",
      "Lifetime chip warranty",
    ],
    idealFor: ["Tech Enthusiasts", "Professionals", "Business Owners", "Networkers"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "google-review-card",
    category: "nfc",
    name: "Digital Google Review Card",
    tagline: "Boost Your Reviews Instantly",
    seoTitle: "Digital Google Review Card | Instant 1-Tap NFC Review Card",
    seoDesc: "Boost your 5-star Google Maps reviews instantly. Customers tap their phone on the card to open your Google review screen directly in seconds.",
    keywords: "Google review card, NFC tap review card, Google review tap stand, get more 5 star Google reviews, contactless review card India, local business review booster",
    shortDesc:
      "NFC-enabled Google Review Card that lets your customers leave a Google review with a single tap. Perfect for restaurants, salons, and local businesses.",
    fullDesc:
      "Increase your Google Business reviews effortlessly with our NFC Google Review Card. Just place it on your counter and let customers tap to instantly open your Google review page. More reviews = better ranking = more customers.",
    price: "₹999",
    originalPrice: "₹1,799",
    discount: "44% OFF",
    image: "/products/review.jpeg",
    features: [
      "One-tap Google Review",
      "Boost local SEO ranking",
      "Increase 5-star reviews",
      "Custom branded design",
      "Works with all smartphones",
      "Includes QR code backup",
      "Waterproof material",
      "Setup guidance included",
    ],
    idealFor: ["Restaurants", "Salons", "Retail Stores", "Clinics", "Local Businesses"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "nfc-tap-qr",
    category: "nfc",
    name: "NFC Tap + QR Code",
    tagline: "Dual Sharing Technology",
    seoTitle: "NFC Tap + QR Code Smart Card | Universal Networking Card",
    seoDesc: "Dual-technology smart card combining instant NFC tap and high-resolution dynamic QR code for 100% compatibility across all modern smartphones.",
    keywords: "NFC tap and QR code card, hybrid smart card, QR visiting card, dual technology NFC card, digital profile card, universal smartphone business card",
    shortDesc:
      "The perfect combo — NFC + QR code in one card. Works with both NFC-enabled and older phones. Universal compatibility for maximum reach.",
    fullDesc:
      "Get the best of both worlds with our NFC Tap + QR Code cards. NFC for quick tap-and-share, QR code for older devices. Whether it's contacts, menus, payment links, or social profiles — one card handles it all with universal compatibility.",
    price: "₹1,299",
    originalPrice: "₹2,299",
    discount: "43% OFF",
    image: "/products/nfctape.jpeg",
    features: [
      "NFC + QR combo technology",
      "Universal phone compatibility",
      "Multiple use cases",
      "Custom branding available",
      "Update content online",
      "Durable material",
      "Instant sharing",
      "Analytics tracking",
    ],
    idealFor: ["All Businesses", "Restaurants", "Events", "Marketing Teams", "Freelancers"],
    gradient: "from-orange-500 to-red-500",
  },
];

// ============ ALL PRODUCTS COMBINED ============
export const allProducts = nfcProducts;

// ============ HELPER: Get product by ID ============
export const getProductById = (id) => {
  return allProducts.find((p) => p.id === id);
};

// ============ HELPER: WhatsApp Message ============
export const getWhatsAppLink = (productName, price) => {
  const message = `Hi Digitee World! 👋\n\nI'm interested in buying:\n\n📦 *${productName}*\n💰 Price: ${price}\n\nPlease share more details and payment options.\n\nThank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};