'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [779],
  {
    5680: (e, r, t) => {
      t.d(r, { xA: () => p, yg: () => d });
      var n = t(6540);
      function o(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function a(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function c(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(t), !0).forEach(function (r) {
                o(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : a(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r)
                  );
                });
        }
        return e;
      }
      function s(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (t = a[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var l = n.createContext({}),
        i = function (e) {
          var r = n.useContext(l),
            t = r;
          return e && (t = 'function' == typeof e ? e(r) : c(c({}, r), e)), t;
        },
        p = function (e) {
          var r = i(e.components);
          return n.createElement(l.Provider, { value: r }, e.children);
        },
        u = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var r = e.children;
            return n.createElement(n.Fragment, {}, r);
          },
        },
        y = n.forwardRef(function (e, r) {
          var t = e.components,
            o = e.mdxType,
            a = e.originalType,
            l = e.parentName,
            p = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = i(t),
            y = o,
            d = u[''.concat(l, '.').concat(y)] || u[y] || f[y] || a;
          return t
            ? n.createElement(d, c(c({ ref: r }, p), {}, { components: t }))
            : n.createElement(d, c({ ref: r }, p));
        });
      function d(e, r) {
        var t = arguments,
          o = r && r.mdxType;
        if ('string' == typeof e || o) {
          var a = t.length,
            c = new Array(a);
          c[0] = y;
          var s = {};
          for (var l in r) hasOwnProperty.call(r, l) && (s[l] = r[l]);
          (s.originalType = e),
            (s[u] = 'string' == typeof e ? e : o),
            (c[1] = s);
          for (var i = 2; i < a; i++) c[i] = t[i];
          return n.createElement.apply(null, c);
        }
        return n.createElement.apply(null, t);
      }
      y.displayName = 'MDXCreateElement';
    },
    5205: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => l,
          contentTitle: () => c,
          default: () => f,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => i,
        });
      var n = t(8168),
        o = (t(6540), t(5680));
      const a = {},
        c = 'Release notes',
        s = {
          unversionedId: 'release/release-notes',
          id: 'release/release-notes',
          title: 'Release notes',
          description: '',
          source: '@site/docs/release/release-notes.md',
          sourceDirName: 'release',
          slug: '/release/release-notes',
          permalink: '/react-canvas-editor/docs/release/release-notes',
          draft: !1,
          tags: [],
          version: 'current',
          frontMatter: {},
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Change logs',
            permalink: '/react-canvas-editor/docs/release/change-logs',
          },
        },
        l = {},
        i = [],
        p = { toc: i },
        u = 'wrapper';
      function f(e) {
        let { components: r, ...t } = e;
        return (0, o.yg)(
          u,
          (0, n.A)({}, p, t, { components: r, mdxType: 'MDXLayout' }),
          (0, o.yg)('h1', { id: 'release-notes' }, 'Release notes')
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
