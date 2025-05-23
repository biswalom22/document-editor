'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [224],
  {
    5680: (t, e, r) => {
      r.d(e, { xA: () => d, yg: () => c });
      var a = r(6540);
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          e &&
            (a = a.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(r), !0).forEach(function (e) {
                n(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
        }
        return t;
      }
      function i(t, e) {
        if (null == t) return {};
        var r,
          a,
          n = (function (t, e) {
            if (null == t) return {};
            var r,
              a,
              n = {},
              o = Object.keys(t);
            for (a = 0; a < o.length; a++)
              (r = o[a]), e.indexOf(r) >= 0 || (n[r] = t[r]);
            return n;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (a = 0; a < o.length; a++)
            (r = o[a]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (n[r] = t[r]));
        }
        return n;
      }
      var g = a.createContext({}),
        p = function (t) {
          var e = a.useContext(g),
            r = e;
          return t && (r = 'function' == typeof t ? t(e) : l(l({}, e), t)), r;
        },
        d = function (t) {
          var e = p(t.components);
          return a.createElement(g.Provider, { value: e }, t.children);
        },
        s = 'mdxType',
        y = {
          inlineCode: 'code',
          wrapper: function (t) {
            var e = t.children;
            return a.createElement(a.Fragment, {}, e);
          },
        },
        m = a.forwardRef(function (t, e) {
          var r = t.components,
            n = t.mdxType,
            o = t.originalType,
            g = t.parentName,
            d = i(t, ['components', 'mdxType', 'originalType', 'parentName']),
            s = p(r),
            m = n,
            c = s[''.concat(g, '.').concat(m)] || s[m] || y[m] || o;
          return r
            ? a.createElement(c, l(l({ ref: e }, d), {}, { components: r }))
            : a.createElement(c, l({ ref: e }, d));
        });
      function c(t, e) {
        var r = arguments,
          n = e && e.mdxType;
        if ('string' == typeof t || n) {
          var o = r.length,
            l = new Array(o);
          l[0] = m;
          var i = {};
          for (var g in e) hasOwnProperty.call(e, g) && (i[g] = e[g]);
          (i.originalType = t),
            (i[s] = 'string' == typeof t ? t : n),
            (l[1] = i);
          for (var p = 2; p < o; p++) l[p] = r[p];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    5530: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => g,
          contentTitle: () => l,
          default: () => y,
          frontMatter: () => o,
          metadata: () => i,
          toc: () => p,
        });
      var a = r(8168),
        n = (r(6540), r(5680));
      const o = { sidebar_position: 1 },
        l = 'Toolbar Options',
        i = {
          unversionedId: 'references/toolbar-option',
          id: 'references/toolbar-option',
          title: 'Toolbar Options',
          description: '| Option     |        Purpose         |',
          source: '@site/docs/references/toolbar-option.md',
          sourceDirName: 'references',
          slug: '/references/toolbar-option',
          permalink: '/react-canvas-editor/docs/references/toolbar-option',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'DOM Events',
            permalink: '/react-canvas-editor/docs/references/dom-event',
          },
          next: {
            title: 'Contribution Guide',
            permalink: '/react-canvas-editor/docs/category/contribution-guide',
          },
        },
        g = {},
        p = [],
        d = { toc: p },
        s = 'wrapper';
      function y(t) {
        let { components: e, ...r } = t;
        return (0, n.yg)(
          s,
          (0, a.A)({}, d, r, { components: e, mdxType: 'MDXLayout' }),
          (0, n.yg)('h1', { id: 'toolbar-options' }, 'Toolbar Options'),
          (0, n.yg)(
            'table',
            null,
            (0, n.yg)(
              'thead',
              { parentName: 'table' },
              (0, n.yg)(
                'tr',
                { parentName: 'thead' },
                (0, n.yg)('th', { parentName: 'tr', align: null }, 'Option'),
                (0, n.yg)('th', { parentName: 'tr', align: 'left' }, 'Purpose')
              )
            ),
            (0, n.yg)(
              'tbody',
              { parentName: 'table' },
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Undo')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  "This feature allows you to reverse the most recent action you performed. It's particularly useful when you make a mistake and want to go back one step."
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Redo')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  "Redo is the opposite of undo. It allows you to reapply an action that you've previously undone."
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Bold')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'When you apply bold formatting to text, it makes the selected text appear thicker and more prominent.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Italic')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Italic text is slanted to the right.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Underline')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Underlining text places a horizontal line beneath it.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Subscript')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Subscript lowers the selected text below the baseline.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Superscript')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Superscript raises the selected text above the baseline.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Strikethrough')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Text with a strikethrough line through it is used to indicate that the content should be deleted or is no longer valid.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Left Align')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'This feature aligns text to the left margin, creating a straight left edge.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Center Align')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Center alignment places text in the middle of the page or text box.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Right Align')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Text is aligned to the right margin, creating a straight right edge.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Justify')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Justification spreads text evenly between both the left and right margins, creating a clean and straight appearance on both sides.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Bullet List')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Bullet lists present information as a series of items with bullets.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Numbered List')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Numbered lists provide a sequential order to items.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Font Type')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Font type refers to the specific style of text characters. Examples include Arial, Times New Roman, and Calibri.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Insert Table')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'This feature allows you to create tables to organize data.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Text Color')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Text color lets you change the color of the text.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Highlight Color')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Highlighting text adds a background color.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Font Size')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Font size controls the size of the text characters.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Heading')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Headings are typically used to divide a document into sections or chapters. They are usually styled differently, such as with larger text or bold formatting.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Hyperlink')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'A hyperlink is a clickable link that connects to a webpage or another location within the document.'
                )
              ),
              (0, n.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.yg)('strong', { parentName: 'td' }, 'Image')
                ),
                (0, n.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'This feature allows you to insert images or graphics into your document to enhance its visual appeal or convey additional information.'
                )
              )
            )
          )
        );
      }
      y.isMDXComponent = !0;
    },
  },
]);
