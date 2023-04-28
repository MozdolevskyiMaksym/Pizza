/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
const { promisify } = require('util');
const { writeFile } = require('fs');
const writeFileAsync = promisify(writeFile);
const { validate } = require('fast-xml-parser');
const got = require('got');
const cheerio = require('cheerio');

const fetch = require('node-fetch');
const xml = require('xml');

(async function generateSiteMap() {
  try {
    const response = await fetch(
      'https://duecode.io/blog/ghost/api/v3/content/posts/?key=0d7e366ef0323a28320b525e8e&limit=all'
    );
    const json = await response.json();
    const posts = json.posts;
    let allLinks = [];

    const getAllLinksFromApp = async (url) => {
      try {
        const response = await got(url);
        const html = response.body;

        const $ = cheerio.load(html);
        const linkObjects = $('a');
        const forbiddenPaths = [
          '/',
          'https://duecode.io/',
          '/auth/signup',
          '/auth/signin',
        ];
        const links = [];

        linkObjects.each((index, element) => {
          const href =
            $(element).attr('href') && $(element).attr('href').split('#')[0];
          const isHrefValid =
            (href && !forbiddenPaths.includes(href) && href[0] === '/') ||
            (href &&
              !forbiddenPaths.includes(href) &&
              href.startsWith('https://duecode.io/'));
          if (isHrefValid) {
            if (!href.startsWith('https://duecode.io/')) {
              links.push(`https://duecode.io${href}`);
            } else {
              links.push(href);
            }
          }
        });
        return links;
      } catch (err) {
        console.log(err.response.body);
      }
    };

    await getAllLinksFromApp('https://duecode.io/').then(
      (links) => (allLinks = [...links, ...posts.map((item) => item.url)])
    );

    function getUniqLinks(links) {
      const result = [];

      links.forEach(function (value) {
        value = value.trim();

        if (result.indexOf(value) === -1) {
          result.push(value);
        }
      });

      return result;
    }

    const filteredLinks = getUniqLinks(allLinks);

    const indexItem = {
      url: [
        { loc: 'https://duecode.io/' },
        {
          lastmod: new Date(
            Math.max.apply(
              null,
              filteredLinks.map(() => {
                return new Date();
              })
            )
          ).toISOString(),
        },
        { changefreq: 'daily' },
        { priority: '1.0' },
      ],
    };

    const sitemapItems = filteredLinks.reduce(function (items, item) {
      items.push({
        url: [
          { loc: item },
          { lastmod: new Date().toISOString() },
          { changefreq: 'daily' },
          { priority: '0.5' },
        ],
      });
      return items;
    }, []);

    const sitemapObject = {
      urlset: [
        {
          _attr: {
            xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
          },
        },
        indexItem,
        ...sitemapItems,
      ],
    };

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>${xml(
      sitemapObject
    )}`;

    if (validate(sitemap) === true) {
      await writeFileAsync('./sitemap.xml', sitemap, 'utf8');
    }
  } catch (error) {
    console.log(error);
  }
})();
