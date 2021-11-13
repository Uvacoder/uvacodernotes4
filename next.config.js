const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  // i18n: {
  //   locales: ['en', 'id'],
  //   defaultLocale: 'en'
  // }
  experimental: {
    optimizeCss: true,
  },
})
