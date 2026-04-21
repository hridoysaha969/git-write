// app/sitemap.js

const BASE_URL = "https://gitwrite.vercel.app";

// Static routes – add all your public pages
const staticRoutes = [
  { url: "/", priority: 1.0, changefreq: "weekly" },
  { url: "/about", priority: 0.8, changefreq: "monthly" },
  { url: "/careers", priority: 0.8, changefreq: "weekly" },
  { url: "/contact", priority: 0.7, changefreq: "monthly" },
  { url: "/generate", priority: 0.8, changefreq: "weekly" },
  { url: "/pricing", priority: 0.7, changefreq: "monthly" },
];

// If you have dynamic routes (e.g., blog posts, user profiles), fetch them here
async function getDynamicRoutes() {
  // Example: fetch blog posts from a CMS
  // const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  // return posts.map(post => ({ url: `/blog/${post.slug}`, priority: 0.6, changefreq: 'weekly' }));
  return [];
}

export default async function sitemap() {
  const dynamicRoutes = await getDynamicRoutes();

  const allRoutes = [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));

  return allRoutes;
}
