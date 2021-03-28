export default {
  repository: 'https://github.com/sozonome',
  titleSuffix: ' | base - sozonome',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Base</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        sozonome
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Base: sozonome's knowledge base" />
      <meta name="og:description" content="Base: sozonome's knowledge base" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://og-image.sznm.dev/**Base**%20%7C%20sozonome.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&heights=300"
      />
      <meta name="twitter:site:domain" content="base.sznm.dev" />
      <meta name="twitter:url" content="https://base.sznm.dev" />
      <meta name="og:title" content="Base: sozonome's knowledge base" />
      <meta
        name="og:image"
        content="https://og-image.sznm.dev/**Base**%20%7C%20sozonome.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&heights=300"
      />
      <meta name="apple-mobile-web-app-title" content="Base" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/icon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icon/favicon-16x16.png"
      />
      <meta
        name="msapplication-TileImage"
        content="/icon/ms-icon-144x144.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: (
    <>
      2020 - {new Date().getFullYear()} |{' '}
      <a href="https://sznm.dev" target="_blank">
        sozonome
      </a>
      .<br />
      Feel free to let me know if there are some content which are outdated /
      need to be updated{' '}
      <a href="mailto:hello@sznm.dev?subject=base.sznm.dev&body=which-page-url-and-give-some-details-of-your-request-or-question">
        here
      </a>
      .
    </>
  ),
  // i18n: [
  //   { locale: 'en', text: 'English' },
  //   { locale: 'id', text: 'Bahasa Indonesia' },
  // ],
}
