/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  resolutions: {
    "styled-components": "^5",
  },
  pageExtensions: ["mdx", "md", "page.js"],
};

module.exports = nextConfig;
