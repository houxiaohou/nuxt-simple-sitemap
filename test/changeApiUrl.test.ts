import { describe, expect, it } from 'vitest'
import { createResolver } from '@nuxt/kit'
import { $fetch, setup } from '@nuxt/test-utils'

const { resolve } = createResolver(import.meta.url)

await setup({
  rootDir: resolve('../.playground'),
  build: true,
  server: true,
  nuxtConfig: {
    app: {
      baseURL: '/base',
    },
    sitemap: {
      autoLastmod: false,
      siteUrl: 'https://nuxt-simple-sitemap.com',
      dynamicUrlsApiEndpoint: '/__sitemap',
    },
  },
})
describe('base', () => {
  it('basic', async () => {

    const posts = await $fetch('/base/posts-sitemap.xml')

    // expect(posts).not.match(/\/base\/base\//g)
    expect(posts).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><?xml-stylesheet type=\\"text/xsl\\" href=\\"/base/__sitemap__/style.xsl\\"?>
      <urlset xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:xhtml=\\"http://www.w3.org/1999/xhtml\\" xmlns:image=\\"http://www.google.com/schemas/sitemap-image/1.1\\" xsi:schemaLocation=\\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd\\" xmlns=\\"http://www.sitemaps.org/schemas/sitemap/0.9\\">
          <url>
              <loc>https://nuxt-simple-sitemap.com/base/blog</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/base/fr/blog\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/base/blog/1</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/base/fr/blog/1\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/base/blog/2</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/base/fr/blog/2\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/base/blog/3</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/base/fr/blog/3\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/base/blog/tags</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/base/fr/blog/tags\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/base/blog/tags/new</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/base/fr/blog/tags/new\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/base/blog/tags/edit</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/base/fr/blog/tags/edit\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/base/blog/categories</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/base/fr/blog/categories\\" />
          </url>
      </urlset>
      <!-- XML Sitemap generated by Nuxt Simple Sitemap -->"
    `)

  }, 60000)
})