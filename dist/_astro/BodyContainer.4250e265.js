import { j as h } from "./jsx-runtime.b9e88e07.js";
import { r as u } from "./index.03be2d59.js";
import {
  i as E,
  a as x,
  s as y,
  u as I,
  b as S,
  m as w,
} from "./motion.28893b4b.js";
function j(t, s, e) {
  var n;
  if (typeof t == "string") {
    let i = document;
    s && (E(!!s.current), (i = s.current)),
      e
        ? (((n = e[t]) !== null && n !== void 0) ||
            (e[t] = i.querySelectorAll(t)),
          (t = e[t]))
        : (t = i.querySelectorAll(t));
  } else t instanceof Element && (t = [t]);
  return Array.from(t || []);
}
function V(t) {
  t.values.forEach((s) => s.stop());
}
function W() {
  const t = new Set(),
    s = {
      subscribe(e) {
        return t.add(e), () => void t.delete(e);
      },
      start(e, n) {
        const i = [];
        return (
          t.forEach((r) => {
            i.push(x(r, e, { transitionOverride: n }));
          }),
          Promise.all(i)
        );
      },
      set(e) {
        return t.forEach((n) => {
          y(n, e);
        });
      },
      stop() {
        t.forEach((e) => {
          V(e);
        });
      },
      mount() {
        return () => {
          s.stop();
        };
      },
    };
  return s;
}
function A() {
  const t = I(W);
  return S(t.mount, []), t;
}
const p = A,
  k = { some: 0, all: 1 };
function B(t, s, { root: e, margin: n, amount: i = "some" } = {}) {
  const r = j(t),
    a = new WeakMap(),
    l = (d) => {
      d.forEach((o) => {
        const f = a.get(o.target);
        if (o.isIntersecting !== !!f)
          if (o.isIntersecting) {
            const m = s(o);
            typeof m == "function" ? a.set(o.target, m) : c.unobserve(o.target);
          } else f && (f(o), a.delete(o.target));
      });
    },
    c = new IntersectionObserver(l, {
      root: e,
      rootMargin: n,
      threshold: typeof i == "number" ? i : k[i],
    });
  return r.forEach((d) => c.observe(d)), () => c.disconnect();
}
function C(t, { root: s, margin: e, amount: n, once: i = !1 } = {}) {
  const [r, a] = u.useState(!1);
  return (
    u.useEffect(() => {
      if (!t.current || (i && r)) return;
      const l = () => (a(!0), i ? void 0 : () => a(!1)),
        c = { root: (s && s.current) || void 0, margin: e, amount: n };
      return B(t.current, l, c);
    }, [s, t, e, i]),
    r
  );
}
function L({ children: t, idName: s, scholarship: e }) {
  const n = e
      ? [
          {
            src: "../images/group-full.jpg",
            mediaQuery: "(max-width: 1050px)",
          },
          { src: "../images/group.png" },
        ]
      : [
          {
            src: "../images/walkthrough-full.jpg",
            mediaQuery: "(max-width: 1050px)",
          },
          { src: "../images/walkthrough.png" },
        ],
    i = u.useRef(null),
    r = C(i, { once: !0 }),
    a = p(),
    l = p(),
    c = p(),
    [d, o] = u.useState(n[n.length - 1].src),
    [f, m] = u.useState(!1);
  return (
    u.useEffect(() => {
      const v = () => {
          for (const g of n)
            if (g.mediaQuery && window.matchMedia(g.mediaQuery).matches) {
              o(g.src);
              return;
            }
          o(n[n.length - 1].src);
        },
        b = () => {
          window.innerWidth <= 1050 ? m(!0) : m(!1), v();
        };
      return (
        v(),
        window.addEventListener("resize", b),
        () => {
          window.removeEventListener("resize", b);
        }
      );
    }, []),
    u.useEffect(() => {
      r &&
        (a.start("visible"),
        l.start("visibleShield"),
        c.start("visibleYellow"));
    }, [r]),
    h.jsxs("div", {
      className: "wrapper",
      id: s,
      ref: i,
      children: [
        h.jsx(w.div, {
          variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
          initial: "hidden",
          animate: a,
          transition: { duration: 1, delay: 0.3 },
          className: "text-container",
          children: t,
        }),
        h.jsxs("div", {
          className: "overlay-container",
          children: [
            h.jsx(w.img, {
              src: d,
              alt: "Pavillion Rendering Walkthrough",
              id: "shield-image",
              variants: {
                hidden: { opacity: 0, x: -25 },
                visibleShield: { opacity: 1, x: 0 },
              },
              initial: "hidden",
              animate: l,
              transition: { duration: 0.75, delay: 0.9 },
            }),
            !f &&
              h.jsx(w.img, {
                src: "../images/yellow-bg-small.jpg",
                alt: "yellow background",
                id: "yellow-bg",
                variants: {
                  hidden: { opacity: 0, x: 95 },
                  visibleYellow: { opacity: 1, x: 0 },
                },
                initial: "hidden",
                animate: c,
                transition: { duration: 0.75, delay: 0.6 },
              }),
          ],
        }),
      ],
    })
  );
}
export { L as default };