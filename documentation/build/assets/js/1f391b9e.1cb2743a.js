'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [61],
  {
    7973: (e, t, a) => {
      a.r(t), a.d(t, { default: () => d });
      var l = a(6540),
        n = a(53),
        c = a(1003),
        r = a(7559),
        m = a(9408),
        i = a(2933),
        o = a(7763);
      const s = { mdxPageWrapper: 'mdxPageWrapper_j9I6' };
      function d(e) {
        const { content: t } = e,
          {
            metadata: { title: a, description: d, frontMatter: p },
          } = t,
          { wrapperClassName: u, hide_table_of_contents: g } = p;
        return l.createElement(
          c.e3,
          { className: (0, n.A)(u ?? r.G.wrapper.mdxPages, r.G.page.mdxPage) },
          l.createElement(c.be, { title: a, description: d }),
          l.createElement(
            m.A,
            null,
            l.createElement(
              'main',
              { className: 'container container--fluid margin-vert--lg' },
              l.createElement(
                'div',
                { className: (0, n.A)('row', s.mdxPageWrapper) },
                l.createElement(
                  'div',
                  { className: (0, n.A)('col', !g && 'col--8') },
                  l.createElement(
                    'article',
                    null,
                    l.createElement(i.A, null, l.createElement(t, null))
                  )
                ),
                !g &&
                  t.toc.length > 0 &&
                  l.createElement(
                    'div',
                    { className: 'col col--2' },
                    l.createElement(o.A, {
                      toc: t.toc,
                      minHeadingLevel: p.toc_min_heading_level,
                      maxHeadingLevel: p.toc_max_heading_level,
                    })
                  )
              )
            )
          )
        );
      }
    },
  },
]);
