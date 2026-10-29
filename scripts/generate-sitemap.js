import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import constants (Node requires .js extension in ESM)
import { servicesData } from "../src/constants/services.js";
import { nfcProducts } from "../src/constants/products.js";
import { blogPosts } from "../src/constants/blogs.js";
import { portfolioItems } from "../src/constants/portfolio.js";

const DOMAIN = "https://digiteeworld.com";
const lastmod = new Date().toISOString().split("T")[0];

const staticPages = [
  "",
  "/about",
  "/services",
  "/products",
  "/portfolio",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms"
];

const urls = [];

// Static Pages
staticPages.forEach((page) => {
  urls.push({
    loc: `${DOMAIN}${page}`,
    changefreq: page === "" ? "daily" : "weekly",
    priority: page === "" ? "1.0" : "0.8",
  });
});

// Services Detail Pages
servicesData.forEach((service) => {
  urls.push({
    loc: `${DOMAIN}/services/${service.slug}`,
    changefreq: "weekly",
    priority: "0.7",
  });
});

// Products Detail Pages
nfcProducts.forEach((product) => {
  urls.push({
    loc: `${DOMAIN}/products/${product.id}`,
    changefreq: "weekly",
    priority: "0.7",
  });
});

// Blog Detail Pages
blogPosts.forEach((post) => {
  urls.push({
    loc: `${DOMAIN}/blog/${post.slug}`,
    changefreq: "weekly",
    priority: "0.6",
  });
});

// Portfolio Detail Pages
portfolioItems.forEach((item) => {
  urls.push({
    loc: `${DOMAIN}/portfolio/${item.slug}`,
    changefreq: "weekly",
    priority: "0.6",
  });
});

// Build XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

urls.forEach((url) => {
  xml += "  <url>\n";
  xml += `    <loc>${url.loc}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
  xml += `    <priority>${url.priority}</priority>\n`;
  xml += "  </url>\n";
});

xml += "</urlset>\n";

const outputPath = path.resolve(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, xml, "utf8");
console.log(`Sitemap generated successfully at ${outputPath} with ${urls.length} URLs.`);
