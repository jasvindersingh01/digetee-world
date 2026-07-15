// ============ BLOG POSTS ============
export const blogPosts = [
  {
    id: 1,
    slug: "how-to-rank-1-on-google-maps-in-kota",
    title: "How to Rank #1 on Google Maps in Kota",
    excerpt:
      "Want your business to show up when someone searches on Google Maps in Kota? Here's a simple guide to get your business ranked at the top.",
    category: "Local SEO",
    author: "Chanchal Singh",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "/blog/gmb-guide.jfif",
    tags: ["GMB", "Local SEO", "Kota"],
    gradient: "from-blue-500 to-cyan-400",
    // Blog content sections
    intro:
      "If you run a business in Kota, showing up on Google Maps can bring you more customers than any ad. When someone searches 'best restaurant near me' or 'coaching in Kota', appearing at the top means real people walking into your shop. Here's how to make that happen.",
    sections: [
      {
        heading: "1. Set Up Your Google Business Profile (GBP)",
        content:
          "This is where everything starts. Go to google.com/business and create your free profile. Add your business name, address, phone number, and category. Make sure everything is 100% accurate — Google verifies this info against other sources online.",
      },
      {
        heading: "2. Verify Your Business",
        content:
          "Google will send you a postcard, call, or email with a verification code. Enter it to prove you own the business. Without verification, your profile won't rank anywhere. This step usually takes 5-14 days.",
      },
      {
        heading: "3. Complete Every Detail (100%)",
        content:
          "Add photos (at least 10), business hours, website link, services/products, and a proper description with keywords like 'best atta chakki in Kota' or your niche. A complete profile ranks higher than an incomplete one — Google rewards effort.",
      },
      {
        heading: "4. Get Real Google Reviews",
        content:
          "Reviews are the #1 ranking factor for local search. Ask happy customers to leave a review. Reply to every review (good or bad) within 24 hours. Businesses with 20+ reviews rank much higher than those with 2-3 reviews.",
      },
      {
        heading: "5. Post Regularly on GBP",
        content:
          "Just like Instagram, Google Business Profile has a 'Posts' section. Share offers, updates, events, or new products weekly. Active profiles get pushed higher by Google's algorithm.",
      },
      {
        heading: "6. Add Location-Based Keywords",
        content:
          "In your business description, services, and posts — use keywords like 'Kota', 'Rajasthan', your area name, and what you do. Example: 'Best coaching institute in Talwandi, Kota' works better than just 'Best coaching institute'.",
      },
      {
        heading: "7. Build Local Citations",
        content:
          "List your business on Justdial, Sulekha, IndiaMart, and other local directories with the exact same Name, Address, and Phone (NAP). Consistency across the web tells Google you're a legit local business.",
      },
    ],
    conclusion:
      "Ranking #1 on Google Maps in Kota isn't magic — it's consistency + optimization. Follow these steps, be patient (results take 4-8 weeks), and your business will start appearing in the top 3 for local searches. Need help? We do this for businesses across Kota and Indore every day.",
  },
  {
    id: 2,
    slug: "why-your-business-needs-a-website",
    title: "Why Your Business Needs a Website (Not Just Social Media)",
    excerpt:
      "Instagram and Facebook are great, but they're not enough. Here's why every serious business needs its own website in 2025 — no exceptions.",
    category: "Business Growth",
    author: "Chanchal Singh",
    date: "Dec 10, 2024",
    readTime: "4 min read",
    image: "/blog/website-need.jfif",
    tags: ["Website", "Business", "Digital"],
    gradient: "from-violet-500 to-purple-500",
    intro:
      "Many small business owners think, 'I have an Instagram page, that's enough.' But here's the truth — social media is rented land, your website is owned property. If Instagram bans your account tomorrow (it happens more than you think), you lose everything. A website is yours forever.",
    sections: [
      {
        heading: "1. You Own It Completely",
        content:
          "Social media accounts can get banned, hacked, or restricted anytime. Instagram changed rules last year and thousands of business pages lost their reach overnight. A website is yours — no one can take it away, change rules, or reduce your visibility.",
      },
      {
        heading: "2. It Makes You Look Professional",
        content:
          "When a customer searches 'Solanki Sweets Kota' and sees only a Facebook page vs one with a proper website — the website wins trust every time. It shows you're serious about your business, not just a hobby seller.",
      },
      {
        heading: "3. Better for Google Ranking",
        content:
          "You can rank a website on Google search — but not your Instagram page. When people search 'best sweets in Kota', a website can appear on Google. Instagram pages don't show up in Google search results the same way.",
      },
      {
        heading: "4. You Can Show Everything Properly",
        content:
          "On Instagram, everything is scattered — DMs, comments, story replies. On a website, you can show your services, prices, portfolio, testimonials, contact form, WhatsApp button, all in one place. Customers get everything they need in one visit.",
      },
      {
        heading: "5. Customers Can Buy 24/7",
        content:
          "With a proper website (especially e-commerce), customers can browse and buy at 2 AM. Instagram requires you to reply to DMs. A website works while you sleep — every business owner's dream.",
      },
      {
        heading: "6. Better for Google Ads",
        content:
          "If you run Google Ads, you need a website landing page — you can't send ads to Instagram. A website multiplies your ad results because you can build proper landing pages designed to convert visitors into customers.",
      },
    ],
    conclusion:
      "Social media is your storefront to attract people. But your website is your actual shop where they buy. You need both — but if you have to choose only one, choose the website. It's the foundation of any serious online business. Need one for your business? We build websites starting from just a landing page to full e-commerce stores.",
  },
];

export const blogCategories = ["All", "Local SEO", "Business Growth"];

// ============ HELPER: Get post by slug ============
export const getPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

// ============ HELPER: Get related posts ============
export const getRelatedPosts = (currentId, limit = 2) => {
  return blogPosts.filter((post) => post.id !== currentId).slice(0, limit);
};