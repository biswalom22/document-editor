'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [215],
  {
    5680: (e, t, r) => {
      r.d(t, { xA: () => u, yg: () => m });
      var n = r(6540);
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var s = n.createContext({}),
        c = function (e) {
          var t = n.useContext(s),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        u = function (e) {
          var t = c(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        g = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        d = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            u = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = c(r),
            d = a,
            m = p[''.concat(s, '.').concat(d)] || p[d] || g[d] || o;
          return r
            ? n.createElement(m, l(l({ ref: t }, u), {}, { components: r }))
            : n.createElement(m, l({ ref: t }, u));
        });
      function m(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var o = r.length,
            l = new Array(o);
          l[0] = d;
          var i = {};
          for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
          (i.originalType = e),
            (i[p] = 'string' == typeof e ? e : a),
            (l[1] = i);
          for (var c = 2; c < o; c++) l[c] = r[c];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      d.displayName = 'MDXCreateElement';
    },
    9240: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => l,
          default: () => g,
          frontMatter: () => o,
          metadata: () => i,
          toc: () => c,
        });
      var n = r(8168),
        a = (r(6540), r(5680));
      const o = { sidebar_position: 1 },
        l = 'Change logs',
        i = {
          unversionedId: 'release/change-logs',
          id: 'release/change-logs',
          title: 'Change logs',
          description: 'Version 1',
          source: '@site/docs/release/change-logs.md',
          sourceDirName: 'release',
          slug: '/release/change-logs',
          permalink: '/react-canvas-editor/docs/release/change-logs',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Release',
            permalink: '/react-canvas-editor/docs/category/release',
          },
          next: {
            title: 'Release notes',
            permalink: '/react-canvas-editor/docs/release/release-notes',
          },
        },
        s = {},
        c = [{ value: 'Version 1', id: 'version-1', level: 2 }],
        u = { toc: c },
        p = 'wrapper';
      function g(e) {
        let { components: t, ...r } = e;
        return (0, a.yg)(
          p,
          (0, n.A)({}, u, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.yg)('h1', { id: 'change-logs' }, 'Change logs'),
          (0, a.yg)('h2', { id: 'version-1' }, 'Version 1'),
          (0, a.yg)(
            'ul',
            null,
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Added ',
              (0, a.yg)('strong', { parentName: 'li' }, 'Bold'),
              ' feature for text formatting.'
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Added ',
              (0, a.yg)('strong', { parentName: 'li' }, 'Redo'),
              ' feature for undoing previous actions.'
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Added ',
              (0, a.yg)('strong', { parentName: 'li' }, 'Italic'),
              ' feature for text formatting.'
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Added ',
              (0, a.yg)('strong', { parentName: 'li' }, 'Underline'),
              ' feature for text formatting.'
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Added ',
              (0, a.yg)('strong', { parentName: 'li' }, 'Redo'),
              ': Allows users to redo the previous action.'
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Added ',
              (0, a.yg)('strong', { parentName: 'li' }, 'Undo'),
              ': feature for undo the previous action.'
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Added ',
              (0, a.yg)('strong', { parentName: 'li' }, 'Image'),
              ': feature for adding image'
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Implemented DOM events:',
              (0, a.yg)(
                'ul',
                { parentName: 'li' },
                (0, a.yg)(
                  'li',
                  { parentName: 'ul' },
                  (0, a.yg)('strong', { parentName: 'li' }, 'on_change'),
                  ': Allows you to listen to changes in the DOM.'
                ),
                (0, a.yg)(
                  'li',
                  { parentName: 'ul' },
                  (0, a.yg)('strong', { parentName: 'li' }, 'on_select'),
                  ': Enables you to track the selection of elements.'
                )
              )
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Introduced ',
              (0, a.yg)('strong', { parentName: 'li' }, 'value'),
              ' for updating data within the document.'
            )
          ),
          (0, a.yg)('p', null, 'Thank you for using our software!')
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
