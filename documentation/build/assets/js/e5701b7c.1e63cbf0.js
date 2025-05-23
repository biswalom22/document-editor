'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [287],
  {
    5680: (e, t, n) => {
      n.d(t, { xA: () => s, yg: () => m });
      var a = n(6540);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var p = a.createContext({}),
        c = function (e) {
          var t = a.useContext(p),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        s = function (e) {
          var t = c(e.components);
          return a.createElement(p.Provider, { value: t }, e.children);
        },
        g = 'mdxType',
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        u = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            o = e.originalType,
            p = e.parentName,
            s = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
            g = c(n),
            u = r,
            m = g[''.concat(p, '.').concat(u)] || g[u] || d[u] || o;
          return n
            ? a.createElement(m, l(l({ ref: t }, s), {}, { components: n }))
            : a.createElement(m, l({ ref: t }, s));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var o = n.length,
            l = new Array(o);
          l[0] = u;
          var i = {};
          for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
          (i.originalType = e),
            (i[g] = 'string' == typeof e ? e : r),
            (l[1] = i);
          for (var c = 2; c < o; c++) l[c] = n[c];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, n);
      }
      u.displayName = 'MDXCreateElement';
    },
    5698: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => o,
          metadata: () => i,
          toc: () => c,
        });
      var a = n(8168),
        r = (n(6540), n(5680));
      const o = { sidebar_position: 3 },
        l = 'How to use DOM events',
        i = {
          unversionedId: 'tutorial-basics/dom-handle',
          id: 'tutorial-basics/dom-handle',
          title: 'How to use DOM events',
          description:
            'Mastering the handling of DOM events is crucial for effective React development. Below are key events and how to use them:',
          source: '@site/docs/tutorial-basics/dom-handle.md',
          sourceDirName: 'tutorial-basics',
          slug: '/tutorial-basics/dom-handle',
          permalink: '/react-canvas-editor/docs/tutorial-basics/dom-handle',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 3,
          frontMatter: { sidebar_position: 3 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'How to customize style',
            permalink:
              '/react-canvas-editor/docs/tutorial-basics/customized-style',
          },
          next: {
            title: 'References',
            permalink: '/react-canvas-editor/docs/category/references',
          },
        },
        p = {},
        c = [
          {
            value: 'Retrieving Page Value',
            id: 'retrieving-page-value',
            level: 2,
          },
          {
            value: 'Capturing Selected Text',
            id: 'capturing-selected-text',
            level: 2,
          },
          { value: 'Setting Page Value', id: 'setting-page-value', level: 2 },
        ],
        s = { toc: c },
        g = 'wrapper';
      function d(e) {
        let { components: t, ...o } = e;
        return (0, r.yg)(
          g,
          (0, a.A)({}, s, o, { components: t, mdxType: 'MDXLayout' }),
          (0, r.yg)(
            'h1',
            { id: 'how-to-use-dom-events' },
            'How to use DOM events'
          ),
          (0, r.yg)(
            'p',
            null,
            'Mastering the handling of DOM events is crucial for effective React development. Below are key events and how to use them:'
          ),
          (0, r.yg)(
            'h2',
            { id: 'retrieving-page-value' },
            'Retrieving Page Value'
          ),
          (0, r.yg)(
            'p',
            null,
            (0, r.yg)('strong', { parentName: 'p' }, 'on_change'),
            ': This event triggers when the value of an input page changes.'
          ),
          (0, r.yg)(
            'ul',
            null,
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'React Component')
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  'export const App = () => {\n  const handleChange = (data) => {\n    console.log("test ->", data);\n  };\n\n  return <DocumentEditor on_change={handleChange} />;\n};\n'
                )
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for React'
                )
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  'const handleChange = (data) => {\n  console.log("test ->", data);\n};\n\nDocumentEditorWebComponent({ on_change: handleChange });\n\nexport const App = () => <div id=\'document-editor\'></div>;\n'
                )
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for JavaScript'
                )
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-html' },
                  '\x3c!-- In you html file add following code in a body tag where you want to use react canvas editor --\x3e\n<body>\n  <div id="document-editor"></div>\n  <script type="module" src="/main.js"><\/script>\n</body>\n;\n'
                )
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  '// In main.js file(i.e. used as a script in html file) add the following code\nconst handleChange = (data) => {\n  console.log("test ->", data);\n};\n\nDocumentEditorWebComponent({ on_change: handleChange });\n'
                )
              ),
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('img', {
                  alt: 'Get value from page',
                  src: n(4906).A,
                  width: '1920',
                  height: '932',
                })
              )
            )
          ),
          (0, r.yg)(
            'h2',
            { id: 'capturing-selected-text' },
            'Capturing Selected Text'
          ),
          (0, r.yg)(
            'p',
            null,
            (0, r.yg)('strong', { parentName: 'p' }, 'on_select'),
            ': This event activates when text on the page is selected.'
          ),
          (0, r.yg)(
            'ul',
            null,
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'React Component')
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  'export const App = () => {\n  const handleSelectedText = (text) => {\n    console.log(text);\n  };\n\n  return <DocumentEditor on_select={handleSelectedText} />;\n};\n'
                )
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for React'
                )
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  "const handleSelectedText = (text) => {\n  console.log(text);\n};\n\nDocumentEditorWebComponent({ on_select: handleSelectedText });\n\nexport const App = () => <div id='document-editor'></div>;\n"
                )
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for JavaScript'
                )
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-html' },
                  '\x3c!-- In you html file add following code in a body tag where you want to use react canvas editor --\x3e\n<body>\n  <div id="document-editor"></div>\n  <script type="module" src="/main.js"><\/script>\n</body>\n;\n'
                )
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  '// In main.js file(i.e. used as a script in html file) add the following code\nconst handleSelectedText = (text) => {\n  console.log(text);\n};\n\nDocumentEditorWebComponent({ on_select: handleSelectedText });\n'
                )
              )
            )
          ),
          (0, r.yg)(
            'p',
            null,
            (0, r.yg)('img', {
              alt: 'Get select text from page',
              src: n(4038).A,
              width: '1440',
              height: '789',
            })
          ),
          (0, r.yg)('h2', { id: 'setting-page-value' }, 'Setting Page Value'),
          (0, r.yg)(
            'p',
            null,
            (0, r.yg)('strong', { parentName: 'p' }, 'value'),
            ': To assign a value to an input page, use the value attribute.'
          ),
          (0, r.yg)(
            'ul',
            null,
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'React Component')
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  "export const App = () => {\n  return <DocumentEditor value='Hello world' />;\n};\n"
                )
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for React'
                )
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  "DocumentEditorWebComponent({ value='Hello world' });\n\nexport const App = () => <div id='document-editor'></div>;\n"
                )
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for JavaScript'
                )
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-html' },
                  '\x3c!-- In you html file add following code in a body tag where you want to use react canvas editor --\x3e\n<body>\n  <div id="document-editor"></div>\n  <script type="module" src="/main.js"><\/script>\n</body>\n;\n'
                )
              ),
              (0, r.yg)(
                'pre',
                { parentName: 'li' },
                (0, r.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  "// In main.js file(i.e. used as a script in html file) add the following code\nDocumentEditorWebComponent({ value='Hello world' });\n"
                )
              )
            )
          ),
          (0, r.yg)(
            'p',
            null,
            (0, r.yg)('img', {
              alt: 'value',
              src: n(5942).A,
              width: '1440',
              height: '900',
            })
          ),
          (0, r.yg)(
            'p',
            null,
            "By following these steps, you can proficiently work with DOM events in React, enhancing your application's functionality."
          )
        );
      }
      d.isMDXComponent = !0;
    },
    4906: (e, t, n) => {
      n.d(t, { A: () => a });
      const a =
        n.p + 'assets/images/onChange-b0328f0d3b7c6e1da2f0975c31029f64.png';
    },
    4038: (e, t, n) => {
      n.d(t, { A: () => a });
      const a =
        n.p + 'assets/images/onSelect-d079924ebb3107358f918217c4d6f896.png';
    },
    5942: (e, t, n) => {
      n.d(t, { A: () => a });
      const a =
        n.p + 'assets/images/setValue-a2b453565e825d2359e2bfd706670fe0.png';
    },
  },
]);
