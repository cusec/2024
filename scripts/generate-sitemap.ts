const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// Define pages
const pages = [
  { url: '/', changefreq: 'daily', priority: 0.7 },
  { url: '/about', changefreq: 'daily', priority: 0.5 },
  { url: '/schedule', changefreq: 'daily', priority: 0.5 },
  { url: '/speakers', changefreq: 'daily', priority: 0.5 },
  { url: '/sponsors', changefreq: 'daily', priority: 0.5 },
  { url: '/privacy', changefreq: 'daily', priority: 0.5 },
  { url: '/code-of-conduct', changefreq: 'daily', priority: 0.5 },
];

(async () => {
  // Create a stream to write to with hostname
  const sitemapStream = new SitemapStream({ hostname: 'https://2024.cusec.net' });

  // Create a write stream to write the sitemap to a file
  const sitemapOutput = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));
  sitemapStream.pipe(sitemapOutput);

  // Write each URL to the stream
  pages.forEach(page => {
    sitemapStream.write(page);
  });

  // Listen for any errors on the stream
  sitemapStream.on('error', (e: any) => {
    console.error(e);
    // Handle error
  });

  // Convert our stream to a promise
  const sitemapPromise = streamToPromise(sitemapStream);

  // End the stream
  sitemapStream.end();

  // Wait for the stream to finish and output the sitemap
  sitemapPromise.then((sitemap: Buffer) => console.log(sitemap.toString())).catch((e: any) => {
    console.error(e);
    // Handle error
  });
})();
