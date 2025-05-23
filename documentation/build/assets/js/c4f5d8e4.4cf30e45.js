'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [634],
  {
    6467: (e, t, n) => {
      n.r(t), n.d(t, { default: () => g });
      var a = n(6540),
        l = n(53),
        r = (n(5489), n(4586)),
        i = n(9408),
        c = n(8168);
      const o = { features: 'features_t9lD', featureSvg: 'featureSvg_GfXr' },
        s = [
          {
            title: 'Comprehensive Document Editing',
            description: a.createElement(
              a.Fragment,
              null,
              'React document editor offers versatile editing features.'
            ),
          },
          {
            title: 'Tailored Customization',
            description: a.createElement(
              a.Fragment,
              null,
              'Customize UI and functionality for unique applications.'
            ),
          },
          {
            title: 'Seamless React Integration',
            description: a.createElement(
              a.Fragment,
              null,
              'Integrates smoothly with React for a user-friendly experience.'
            ),
          },
          {
            title: 'Multi-Page Documents Like Google Docs',
            description: a.createElement(
              a.Fragment,
              null,
              'Easily create and manage multi-page documents, similar to Google Docs.'
            ),
          },
        ];
      function m(e) {
        let { Svg: t, title: n, description: r } = e;
        return a.createElement(
          'div',
          { className: (0, l.A)('col') },
          a.createElement(
            'div',
            { className: 'text--center padding-horiz--md' },
            a.createElement('h3', null, n),
            a.createElement('p', null, r)
          )
        );
      }
      function u() {
        return a.createElement(
          'section',
          { className: o.features },
          a.createElement(
            'div',
            { className: 'container' },
            a.createElement(
              'div',
              { className: 'row' },
              s.map((e, t) => a.createElement(m, (0, c.A)({ key: t }, e)))
            )
          )
        );
      }
      const d = { heroBanner: 'heroBanner_qdFl', buttons: 'buttons_AeoN' };
      function f() {
        const { siteConfig: e } = (0, r.A)();
        return a.createElement(
          'header',
          { className: (0, l.A)('hero', d.heroBanner) },
          a.createElement(
            'div',
            { className: 'container' },
            a.createElement('h1', { className: 'hero__title' }, e.title),
            a.createElement('p', { className: 'hero__subtitle' }, e.tagline)
          )
        );
      }
      function g() {
        const { siteConfig: e } = (0, r.A)();
        return a.createElement(
          i.A,
          {
            title: `Hello from ${e.title}`,
            description: 'Description will go into a meta tag in <head />',
          },
          a.createElement(f, null),
          a.createElement('main', null, a.createElement(u, null))
        );
      }
    },
  },
]);
